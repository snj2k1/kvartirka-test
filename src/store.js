import { configureStore } from "@reduxjs/toolkit";
import { distanceReducer } from "./features/distance/distance-slice";
import { cartReducer } from "./features/cart/cart-slice";
import axios from "axios";
import * as api from "./config";
import { asteroidsReducer } from "./features/asteroids/asteroids-slice";

export const store = configureStore({
  reducer: {
    distance: distanceReducer,
    asteroids: asteroidsReducer,
    cart: cartReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
