import React from 'react'
import "../Login/login.css"

export default function Login() {
    return (
        <div className='login-image-container'>
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center w-1/3">
                <div class="rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-2xl bg-white opacity-85">
                    <h1 class="text-black text-2xl text-center font-bold mb-5 py-6">Login Now</h1>
                    <div class="relative mb-4 py-3">
                        <input placeholder='User Name/Email' type="email" id="full-name" name="full-name" class="w-full h-14 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4 py-1">
                        <input placeholder='Password' type="text" id="password" name="password" class="w-full h-14 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4 py-1 text-center">
                       <a className='text-lg'>Forgot Password?</a>
                    </div>
                    <button class="text-white bg-purple-900 border-0 py-3 px-8 focus:outline-none hover:bg-purple rounded text-md uppercase">Login</button>
                    <p class="text-md text-center text-gray-500 mt-3 py-2">Don't have an account? <a href='' className='text-purple-800'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}
