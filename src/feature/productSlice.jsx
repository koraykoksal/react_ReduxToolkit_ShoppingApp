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

    setBasket:(state,action)=>{

        console.log("py : ",action.payload)

        if(state.products.some(p=>p.id == action.payload.id)){

            return{count:state.count+1,products:state.products.map((item)=>item.id == action.payload.id ? {...item,itemQuantity:item.itemQuantity + 1,itemPrice:item.itemPrice * item.itemQuantity}:item)}
        }
        else{
            return{count:state.count + 1,products:[...state.products,{id:action.payload.item.id,itemName:action.payload.item.title,itemQuantity:1,itemPrice:action.payload.item.price}]} 
        }
        
    }

}

})

export const {setBasket}=productsSlice.actions

export default productsSlice.reducer

