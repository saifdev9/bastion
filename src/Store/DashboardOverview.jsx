import { createSlice } from '@reduxjs/toolkit';
import api from '../components/Utilities/Api';

const Overview = createSlice({
  name:"overview",
  initialState : {ordered:[],modifiedOrdered:[] , dashInfo:{
           sales : 0,
            orders: 0,
            visitors: 0,
            men: 0,
            women: 0,
            kids: 0,
            numProducts:0
  }},

  reducers: {
     setDashInfo(state,action) {
       state.dashInfo = action.payload
     },

     setOrdered(state,action) {
       state.ordered = action.payload

     }, 

     setModifiedOrdered(state,action) {
       state.modifiedOrdered = action.payload

     }, 
   }
})


export const getSoldProducts = () => {

   return async (dispatch,getState) => {

      const state = getState()
      const token = state.login.token
      const {id,products} = state.login.user

      const response = await api(`/bastion/api/purchases`,"GET", undefined , token)
      const filterOrdered = response.data.purchases.filter((el)=> el.product.seller.id === id)

      const TotalSales = filterOrdered.reduce((acc,el)=> {
        return acc + el.price
      },0)

      const Men = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "men")  return acc + 1
        return acc
      },0)

      const Women = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "women") return acc + 1
        return acc
      },0)

      const Kids = filterOrdered.reduce((acc,el)=> {
        if(el.product.consumer === "kids") return acc + 1
        return acc
      },0)

      const TotalVisitors = new Set(filterOrdered.map((el,i)=> {
         return el.user.email
      })).size 

      const dashInfo ={
            sales : TotalSales,
            orders: filterOrdered.length,
            visitors: TotalVisitors,
            men: Men,
            women: Women,
            kids: Kids,
            numProducts:products.length
      }


      dispatch(Overview.actions.setOrdered(filterOrdered))
      dispatch(Overview.actions.setModifiedOrdered(filterOrdered))
      dispatch(Overview.actions.setDashInfo(dashInfo))
   }
}

export const {actions:overviewActions, reducer:overviewReducer} = Overview