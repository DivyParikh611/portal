import React from 'react'
import "../Feedback/feedback.css";
import Stars from '../StarsRow/stars';
import Image from "../../assets/feedackBanner.jpg";

export default function Feedback() {
  document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.addEventListener('click', function () {
        stars.forEach(s => s.classList.remove('text-yellow-700'));
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('text-yellow-700');
        }
      });
    });
  });

  return (
    <div className=''>
      <section className="w-full text-gray-600 body-font">
        <div className="mx-auto flex px-5 items-center justify-center flex-col">
          <img className="mb-10 object-cover object-center rounded" alt="" src={Image} />
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
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="FirstName" name="name" placeholder='First Name' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="LastName" name="name" placeholder='Last Name' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="course" name="name" placeholder='Course Name' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-3 w-1/2">
                <div className="relative">
                  <input type="email" id="email" name="email" placeholder='Email ID' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="container py-12 mx-auto flex flex-wrap">
              <div className="md:pr-16 lg:pr-0 pr-0">
                <h1 className='text-xl py-3 items-center'>Helped in relating the content to my job context - covered practical aspects along with the theory</h1>
                <Stars />
                <h1 className='text-xl py-2'>How was the pace of the training?</h1>
                <Stars />
                <h1 className='text-xl py-2'>The speaker's resolution of the queries raised during the session</h1>
                <Stars />
                <h1 className='text-xl py-2'>The speaker's interaction with the participant as and when required</h1>
                <Stars />
                <h1 className='text-xl py-2'>Information was presented in a clear, logical and structured manner</h1>
                <Stars />
                <h1 className='text-xl py-2'>Speaker's command over the topic and the presentation</h1>
                <Stars />
                <h1 className='text-xl py-2'>Speaker's communication of the concepts</h1>
                <Stars />
              </div>
            </div>
            <div className="text-gray-600 body-font relative container px-5 py-2 mx-auto items-center text-center">
              <div className="mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input type="email" id="email" name="email" placeholder='Trainer Name' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input type="text" id="email" name="email" placeholder='Date of training' className="w-full h-[4.5vw] inputHeight bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <textarea id="message" name="message" placeholder='Message if any' className="p-2 w-full bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-purple-800 items-center text-center border-0 py-4 w-full focus:outline-none hover:bg-purple-900 rounded text-sm"><div className="items-center">SUBMIT FORM</div></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
