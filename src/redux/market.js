import { createSlice } from "@reduxjs/toolkit";
const marketslice=createSlice ({
name:"marketdata",
initialState: {
marketdata: [],


},
reducers :{
    marketupdate:(state,action)=>{
        state.marketdata= action.payload;
    }
}
})
export const {marketupdate}= marketslice.actions;
export default marketslice.reducer;