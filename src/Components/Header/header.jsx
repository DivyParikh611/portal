import "./header.css"
import React from 'react'
import Image from "../../assets/main-logo.png"
import Image1 from "../../assets/grant-thornton.png"

export default function Header() {
    return (
        <header className="text-gray-600 body-font Header" style={{ fontFamily: "Poppins" }}>
            <div className="container mx-auto flex flex-wrap p-4 flex-row md:flex-row items-center justify-between">
                <div className='flex items-center'>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-5">
                        <img src={Image} alt="" className='h-13 w-40' />
                    </a>
                    <button className='text-black hover:bg-gray-100 px-3 py-4 rounded text-md'>Programmes&nbsp;<i className="fa-solid fa-chevron-down text-sm"></i></button>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900"></a>
                        <a className="mr-5 hover:text-gray-900"></a>
                        <a className="mr-5 hover:text-gray-900"></a>
                        <a className="mr-5 hover:text-gray-900"></a>
                    </nav>
                </div>
                <div className="relative text-gray-600 border border-gray-300 hover:border-none rounded rounded-2xl w-1/4">
                    <input type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <svg className="h-4 w-4 fill-current searchIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                <div className='flex items-center'>
                    <button className="inline-flex items-center border-0 py-3 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <i className="fa-solid fa-cart-shopping"></i> &nbsp;Cart (0)
                    </button>
                    <button className="flex ml-2 text-white bg-purple-800 border-0 py-3 px-6 focus:outline-none hover:bg-purple-900 rounded">Log In</button>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3">
                        <img src={Image1} alt="" className='h-10 w-48' />
                    </a>
                </div>
            </div>
        </header>
    )
}
