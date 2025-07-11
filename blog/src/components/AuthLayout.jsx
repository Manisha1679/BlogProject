import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React,{useState,useEffect} from "react"

export default function Protected({
    children,
    authentication=true
}){
    const [loader,setLoader]=useState(true)
    const navigate=useNavigate()
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus!==authentication){
            navigate("/login")
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authentication,authStatus,navigate])
return loader ? <h1>Loading...</h1> : <>{children}</>
}