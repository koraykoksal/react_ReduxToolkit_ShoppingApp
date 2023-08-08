import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../feature/autSlice'


export const store=configureStore({

    reducer:{
        auth:autReducer
    }

})

