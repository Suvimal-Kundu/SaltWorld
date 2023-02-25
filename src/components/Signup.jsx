import React from 'react'
import LoginImg from '../assets/login.png'
import LogoImg from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt=''/>
      </div>
      <div className='bg-teal-600 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <img className='' src={LogoImg} alt=''/>
            <h3 className='text-2xl dark:text-white text-center'>SIGN UP</h3>
            <div className='flex flex-col text-gray-400 py-2' type={"text"} >
                <label>Name</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' required/>
            </div>
            <div className='flex flex-col text-gray-400 py-2' type={"email"} >
                <label>Email</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' required/>
            </div>
            <div className='flex flex-col text-gray-400 py-2' type={"password"} >
                <label>Password</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' required/>
            </div>
            <button className='w-full my-5 py-2 bg-teal-600 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">Sign Up</button>
            <div className=' text-gray-400 py-2'>
                <p className='text-center'>Already Have An Account?<span className='text-bold'> <Link to="/Login" element={<Login/>}>Sign In</Link></span>
                </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
