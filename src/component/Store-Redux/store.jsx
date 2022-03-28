import { configureStore } from "@reduxjs/toolkit";
import MyProduct from "./Reducer";

const store = configureStore({
  reducer: {
    Product: MyProduct,
  },
});

export default store;
