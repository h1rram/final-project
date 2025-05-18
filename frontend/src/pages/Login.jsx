import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const nav = useNavigate()

  async function HandleSubmit(e) {
    e.preventDefault()
    await axios.post('http://localhost:3000/login', {username, password})
    .then(() => {
      alert(`Welcome ${username}`)
      nav('/home')
    })
    .catch(err=>console.log("error we have", err)); 
  }
  return (
    <section className='flex flex-col gap-y-3 h-screen w-screen items-center justify-center'>
            <h1 className='text-lg mb-4'>Login</h1>
            <form className='flex flex-col w-[400px] gap-y-3' onSubmit={HandleSubmit}>
                <div className="flex flex-col">
                    <label>Username</label>
                    <input type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 border border-gray-400 outline-0 rounded' />
                </div>
                <div className="flex flex-col">
                    <button className='p-3 rounded cursor-pointer bg-gray-700 text-white'>Login</button>
                </div>
            </form>
            <Link to="/register">Register</Link>
    </section>
  )
}

export default Login