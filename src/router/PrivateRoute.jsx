import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const PrivateRoute = () => {

    //redux tarafında yer alan initialState içinde ki user bilgisi çekilir
    //!state store erişip ilgili reducer altındaki bilgilere erişmemizi sağlar
    const user = useSelector((state)=>state.auth.user)

    //user içi true ise
  return user?.email ? <Outlet/> : <Navigate to="/login"/>
  
}
