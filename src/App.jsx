import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authenticate from './appwrite/auth'
import {Header,Footer} from './components/index/Index'
import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
 const [isLoading,setIsLoading]=useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authenticate.getCurrentUser()
          .then((userData)=>{
            console.log("User:",userData)
             if(userData){
               dispatch(login(userData))
             }else{
               dispatch(logout())
             }
          })
          .finally(()=>setIsLoading(false)
          )
},[])


 return !isLoading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
       <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
 ) :<h1 className='text-center font-semi-bold text-xl'>Loading...</h1>
}

export default App
