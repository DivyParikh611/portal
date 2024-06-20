import React from 'react'
import Stars from '../StarsRow/stars';
import Image from "../../assets/feedackBanner.jpg";

export default function Feedback() {
    document.addEventListener("DOMContentLoaded", function () {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
          star.addEventListener('click', function () {
            // Reset all stars color
            stars.forEach(s => s.classList.remove('text-yellow-500'));
            // Color the clicked star and all previous stars
            for (let i = 0; i <= index; i++) {
              stars[i].classList.add('text-yellow-500');
            }
          });
        });
      });

  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="mx-auto flex px-5 items-center justify-center flex-col">
    <img class="w-full mb-10 object-cover object-center rounded" alt="" src={Image}/>
  </div>
</section>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">Feedback Form</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-3 w-1/2">
          <div className="relative">
            {/* <label for="name" className="leading-7 text-sm text-gray-600">Name</label> */}
            <input type="text" id="FirstName" name="name" placeholder='First Name' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-3 w-1/2">
        <div className="relative">
            {/* <label for="name" className="leading-7 text-sm text-gray-600">Name</label> */}
            <input type="text" id="LastName" name="name" placeholder='Last Name' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-3 w-1/2">
          <div className="relative">
            {/* <label for="name" className="leading-7 text-sm text-gray-600">Course</label> */}
            <input type="text" id="course" name="name" placeholder='Course Name' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-3 w-1/2">
          <div className="relative">
            {/* <label for="email" className="leading-7 text-sm text-gray-600">Email ID</label> */}
            <input type="email" id="email" name="email" placeholder='Email ID' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
        <h1 className='text-3xl text-start py-2'>Test</h1>
    <Stars/>
    <h1 className='text-3xl text-start py-2'>Test</h1>
    <Stars/>
    <h1 className='text-3xl text-start py-2'>Test</h1>
    <Stars/>
    <h1 className='text-3xl text-start py-2'>Test</h1>
    <Stars/>
    <h1 className='text-3xl text-start py-2'>Test</h1>
    <Stars/>
    </div>
</div>

  <div className="text-gray-600 body-font relative container px-5 py-24 mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
        <div className="relative">
            {/* <label for="email" className="leading-7 text-sm text-gray-600">Email ID</label> */}
            <input type="email" id="email" name="email" placeholder='Trainer Name' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
        <div className="relative">
            {/* <label for="email" className="leading-7 text-sm text-gray-600">Email ID</label> */}
            <input type="text" id="email" name="email" placeholder='Date of training' className="w-full h-[4.5vw] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <textarea id="message" name="message" placeholder='Message if any' className="p-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
