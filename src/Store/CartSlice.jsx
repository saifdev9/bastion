import { createSlice } from "@reduxjs/toolkit";
import {loginReducer } from "./LoginSlice";
import api from "../components/Utilities/Api";




const initialState = {touched : false , cart: [], cartTotal: 0 , pseudoCartTotal:0, pseudoUpdatedCArt:[], detailedUpdatedCart:[]}

const Cart = createSlice({
   name:"cart",
   initialState: initialState,
   reducers:{
      touchHandler(state,action) {
         state.touched = action.payload ?? !state.touched  //very important implementatiom bro
      },

      addToCart(state,action) {
         state.cart.unshift(action.payload.item)
      },

      removeFromCart(state,action) { 
         state.cart =  state.cart.filter((el,i) => el !== action.payload.item)  
      },

      setCart(state,action) {
         state.cart = [...action.payload]
      },

      setDetailedUpdatedCart(state,action) {
        state.detailedUpdatedCart = action.payload?.length !== undefined  ? [...action.payload] : []
      },

      setPseudoDetailedUpdatedCart(state,action) {
        state.detailedUpdatedCart = action.payload?.length !== undefined  ? [...action.payload] : []
      },


      mutateCartTotal(state,action){
         state.cartTotal = Number(action.payload).toFixed(2)
      },

      mutatePseudoCartTotal(state,action){
         state.cartTotal = Number(action.payload).toFixed(2)
      },

      SubtractCartTotal(state,action) {
         const total = Number(state.cartTotal) - Number(action.payload)
         state.cartTotal = total.toFixed(2)
      }
   }
})



export const updateCart = (item,action) => {

   return async (dispatch,getState) => {

      if(action === "add") dispatch(Cart.actions.addToCart({item}))
      if(action === "delete") dispatch(Cart.actions.removeFromCart({item}))
      
      
      
      // these  states should be below the add and delete actions so as to get the latest cart
      const state = getState()
      const userToken = state.login.token
      const cart = state.cart.cart
      

      const updateCartResponse  = await api("/bastion/api/users/updateCart","PUT",{cart:cart},userToken )
      // console.log(updateCartResponse)

      const getUserUpdatedCart = await api("/bastion/api/users/me","GET",undefined,userToken)
      // console.log(getUserUpdatedCart,"ppp")


      const {cart:detailedCart} = getUserUpdatedCart.data.user
      console.log(detailedCart,"llllll")
      const cartTotal = detailedCart?.reduce((acc,el)=> acc  + Number(el.price) ,0) || 0

      // dispatch(cartActions.mutatePseudoCartTotal(cartTotal))
      // dispatch(cartActions.setPseudoDetailedUpdatedCart(detailedCart))

      dispatch(cartActions.mutateCartTotal(cartTotal))
      dispatch(cartActions.setDetailedUpdatedCart(detailedCart))

   }
}


export const { actions: cartActions, reducer: cartReducer } = Cart;
