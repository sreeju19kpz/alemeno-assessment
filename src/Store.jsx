import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/Feature/cartSlice";
import purchaseReducer from "./Components/Feature/PurchaseSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    purchase: purchaseReducer,
  },
});
