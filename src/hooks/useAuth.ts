import { useEffect, useState } from "react";

export const useAuth  = () => {

  const[isAuth,setAuth] =  useState(false);

  useEffect (()=>{
    debugger;
    const token = localStorage.getItem('token');
    if(token){
       setAuth(true)
    }
  } ,[]);
 
  return {isAuth,setAuth}
}