import React from 'react'
import "../Feedback/feedback.css";
import RatingSection from './Ratings/ratings';

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
    <div style={{ fontFamily: "Poppins" }}>
        <div class="flex items-center justify-center flex-col relative">
          <img class="object-cover object-center rounded h-[17vw] w-full gtImage" alt="" src="https://api.learningt.com/wp-content/uploads/2023/07/contact-banner.jpg" />
          <div class="absolute inset-0 flex items-center justify-center p-8">
          <h1 className="lg:text-4xl sm:text-2xl font-medium title-font mb-4 text-white">Feedback Form</h1>
          </div>
        </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto ">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="FirstName" name="name" placeholder='First Name' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="LastName" name="name" placeholder='Last Name' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input type="text" id="course" name="name" placeholder='Course Name' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-3 w-1/2">
                <div className="relative">
                  <input type="email" id="email" name="email" placeholder='Email ID' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="container py-12 mx-auto flex flex-wrap">
              <div className="md:pr-16 lg:pr-0 pr-0">
                <RatingSection />
              </div>
            </div>
            <div className="text-gray-600 body-font relative container px-5 py-2 mx-auto items-center text-center">
              <div className="mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative text-start">
                    <label htmlFor="" >Trainer Name</label>
                      <input type="email" id="email" name="email" placeholder='' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative text-start">
                      <label htmlFor="">Date of training</label>
                      <input type="date" id="date" name="date" placeholder='Date of training' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <textarea id="message" name="message" placeholder='Message if any' className="p-2 w-full bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-purple-900 items-center font-semibold justify-center border-0 py-4 w-full focus:outline-none hover:bg-purple rounded text-sm transition-colors duration-200 ease-in-out"><div className="items-center">SUBMIT FORM</div></button>
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
