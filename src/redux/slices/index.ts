import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import ogNumber from "./ogNumber.slice";

const rootReducer = combineReducers({
  auth,
  ogNumber

  // settings,
  //   [meetingApi.reducerPath]: meetingApi.reducer,
  //   [userApi.reducerPath]: userApi.reducer,
  //   [imageApi.reducerPath]: imageApi.reducer
});

export default rootReducer;
