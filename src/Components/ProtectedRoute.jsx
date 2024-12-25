import React from 'react'
import { Navigate } from 'react-router-dom';


export const ProtectedRoute = ({children}) => {
   const obj =   JSON.parse(localStorage.getItem("admin"));
   if (obj?.user.email=="premchopra971800@gmail.com"){
    return children
   }
   else{
    return <Navigate to={"/Adminlogin"}/>
   }
}
