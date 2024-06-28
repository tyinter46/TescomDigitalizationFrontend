import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";

const rootReducer = combineReducers({
  auth

  // settings,
  //   [meetingApi.reducerPath]: meetingApi.reducer,
  //   [userApi.reducerPath]: userApi.reducer,
  //   [imageApi.reducerPath]: imageApi.reducer
});

export default rootReducer;
