import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../feature/autSlice'
import productsReducer from '../feature/productSlice'

export const store=configureStore({

    reducer:{
        auth:autReducer,
        products:productsReducer
    }

})

