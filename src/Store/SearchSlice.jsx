import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
   name:"search",
   initialState: {touched : true},
   reducers:{
      touchHandler : (state,action) => {
         // console.log("redux-cartSlice",state.touched)
         state.touched = action.payload ?? !state.touched  //very important implementatiom broooo
      }
   }
})

export const { actions: searchActions, reducer: searchReducer } = Search;