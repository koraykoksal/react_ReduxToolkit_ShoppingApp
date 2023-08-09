import { createSlice } from "@reduxjs/toolkit";


const initialState={
    count:0,
    products:[]
}

//created productsSlice reducer
const productsSlice=createSlice({
name:"products",
initialState,

reducers:{

    setBasket:(state)=>{
        return{count:state.count+1}
    }
}

})

export const {setBasket}=productsSlice.actions

export default productsSlice.reducer

