import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { notifyReducer } from "./NotifySlice";
import { loginReducer } from "./LoginSlice";
import { searchReducer } from "./SearchSlice";
import { overviewReducer } from "./DashboardOverview";
import { homeReducer } from "./HomeSlice";

const store = configureStore({
   reducer: {
      cart:cartReducer,
      notify:notifyReducer,
      login:loginReducer,
      search:searchReducer,
      overview:overviewReducer,
      home:homeReducer
   }
})

export default store