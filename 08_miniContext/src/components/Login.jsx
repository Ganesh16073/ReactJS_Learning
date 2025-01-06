import { useState } from "react"
import React from 'react'
import UserContext from "../context/userContext"
import { useContext } from "react"


function Login() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext) // setUser is method declered in UserContext

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        setUser({userName,password}) // pass value 

    }
  return (
    <>
    <h2>Login</h2>
    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}placeholder="userName"/>
    {" "}
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login