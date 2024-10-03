import { createSlice } from "@reduxjs/toolkit";

 const notify = createSlice({
   name:"notify",
   initialState:{touched:false},
   reducers : {
       touchHandler : (state,action) => {
         // console.log("redux-notify",state.touched)
         state.touched = action.payload ?? !state.touched  //very important implementatiom broooo
      }
   }
})


export const { actions: notifyActions, reducer: notifyReducer } = notify;