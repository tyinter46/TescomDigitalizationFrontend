import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices";


import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer,  
   middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([]),
  devTools: true
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
