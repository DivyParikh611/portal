import React from 'react'
import "../Login/login.css"

export default function Login() {
    return (
        <div className='image-container'>
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center w-1/3">
                <div class="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-2xl bg-white opacity-95">
                    <h2 class="text-black text-xl text-center font-bold mb-5 py-6">Login Now</h2>
                    <div class="relative mb-4 py-3">
                        <input placeholder='User Name/Email' type="text" id="full-name" name="full-name" class="w-full h-14 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4 py-1">
                        <input placeholder='Password' type="email" id="email" name="email" class="w-full h-14 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                        <button class="text-white bg-purple-900 border-0 py-2 px-8 focus:outline-none hover:bg-purple rounded text-lg">Button</button>
                    <p class="text-md text-center text-gray-500 mt-3 py-2">Don't have an account? <a href='' className='text-purple-800'>Sign Up</a></p>
                </div>
            </div>
        </div>
    )
}
