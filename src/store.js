// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers";

const store = configureStore({
  reducer: {
    reducers: rootReducers,
  },
});

export default store;
