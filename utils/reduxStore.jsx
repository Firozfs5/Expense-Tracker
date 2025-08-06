import { configureStore } from "@reduxjs/toolkit";
import expenseData from "../utils/expenseDataSlice"
const reduxStore=configureStore({
    reducer:{
        expense:expenseData
    }
})

export default reduxStore;