import { configureStore } from "@reduxjs/toolkit";
import currency from "./currency";
import market from "./market";
import days from "./days";
export default configureStore({ reducer:{curr:currency,market:market,days:days}})
