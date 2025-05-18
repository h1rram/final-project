import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const [username, setUsername]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const nav = useNavigate();

    function Handlesubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/register', {username, email, password})
        .then(res=>{
            alert("Registered ")
            console.log(res.data)
            nav('/')
        })
        .catch(err=>{
            console.log("error we have", err)
        })

    }
  return (
    <section className='flex flex-col gap-y-3 h-screen w-screen items-center justify-center'>
            <h1 className='text-lg mb-4'>Register</h1>
            <form className='flex flex-col w-[400px] gap-y-3' onSubmit={Handlesubmit} >
                <div className="flex flex-col">
                    <label>Username</label>
                    <input type="text"
                    onChange={(e)=>setUsername(e.target.value)}
                    className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input type="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <button type='submit' className='p-3 rounded cursor-pointer bg-gray-700 text-white'>Register</button>
                </div>
            </form>
            <Link to="/">Login</Link>
    </section>
  )
}

export default Register