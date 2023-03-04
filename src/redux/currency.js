import { createSlice } from "@reduxjs/toolkit";
const Currencyslice=createSlice ({
name:"currency",
initialState: {
corrency: "usd",


},
reducers :{
    update:(state,action)=>{
        state.corrency= action.payload;
    }
}
})
export const {update}= Currencyslice.actions;
export default Currencyslice.reducer;