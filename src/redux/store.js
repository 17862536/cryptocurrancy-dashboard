import { configureStore } from "@reduxjs/toolkit";
import currency from "./currency";
import market from "./market";
export default configureStore({ reducer:{curr:currency,market:market}})
