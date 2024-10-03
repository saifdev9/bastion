import { createSlice } from "@reduxjs/toolkit";
import api from "../components/Utilities/Api";
import disableScroll from 'disable-scroll';


 const Home = createSlice({
   name:"notify",
   initialState:{mostBought:[],mostRated:[],fetched:false},
   reducers : {
      fetchHomeProducts(state,action) {
         state.mostBought = action.payload.mostBought
         state.mostRated = action.payload.mostRated
         state.fetched = true

         disableScroll.off()

      },

      reset(state) {
         state.fetched = false
      }
   }
})


export const fetchProducts = () => {

   return async (dispatch,getState) => {
     const response = await api(`/bastion/api/products`,"GET",undefined,undefined)
     const mostRated = response.data.products.sort((a,b) => b.rating - a.rating).slice(0,11)
     const mostBought = response.data.products.sort((a,b) => b.ratingQuantity - a.ratingQuantity).slice(0,11)

     dispatch(Home.actions.fetchHomeProducts({mostBought,mostRated}))
   }
}


export const { actions: homeActions, reducer: homeReducer } = Home;