import { createSlice } from "@reduxjs/toolkit";
const daysSlice=createSlice ({
name:"days",
initialState: {
days: 1,


},
reducers :{
    daysUpdate:(state,action)=>{
        state.days= action.payload;
    }
}
})
export const {daysUpdate}= daysSlice.actions;
export default daysSlice.reducer;