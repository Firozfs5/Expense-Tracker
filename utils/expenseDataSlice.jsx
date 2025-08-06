import { createSlice } from "@reduxjs/toolkit";

const expenseDataSlice=createSlice({
    name:'expenseData',
    initialState:{
        dataItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.dataItems.unshift(action.payload);
        },
        removeItem:(state,action)=>{
            state.dataItems.splice(action.payload,1);
        },
        clearItem:(state)=>{
            state.dataItems.length=0;
        }
    }
})

export const {addItem,removeItem,clearItem}=expenseDataSlice.actions;

export default expenseDataSlice.reducer;