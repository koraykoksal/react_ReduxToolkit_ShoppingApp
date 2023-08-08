import { createSlice } from "@reduxjs/toolkit";

//datanın tutulacağı yer
const initialState={
user:"",
}


const authSlice = createSlice({
name:"auth",
initialState,

reducers:{
    // buradaki setUser fonc. initialState içindeki userı update edecek.
    setuser:(state,action)=>{
        state.user=action.payload
    },
    setDelUser:(state)=>{
        state.user=""
    }
}

})

export const {setuser,setDelUser} = authSlice.actions

export default authSlice.reducer

