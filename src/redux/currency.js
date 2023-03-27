import { createSlice } from "@reduxjs/toolkit";
const Currencyslice=createSlice ({
name:"currency",
initialState: {
coinlist :[],
chartlist:"Line-Chart",
cryptobutton:"Bitcoin",
corrency: "usd",



},
reducers :{
    update:(state,action)=>{
        state.corrency= action.payload;
    },
    updateCoinList:(state,action)=>{
        state.coinlist=action.payload
    },
    updateChartList:(state,action)=>{
        state.chartlist=action.payload
    },
    updateCryptoButton:(state,action)=>{
        state.cryptobutton=action.payload
    }
    

}
})
export const {update,updateCoinList,updateChartList ,updateCryptoButton}= Currencyslice.actions;
export default Currencyslice.reducer;
