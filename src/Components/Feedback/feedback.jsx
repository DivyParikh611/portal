import React from 'react'
import "../Feedback/feedback.css";
import RatingSection from './FeedBack/feedback';

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
    <div className='' style={{fontFamily:"Poppins"}}>
      <section className="text-gray-600 body-font">
        <div className="flex items-center justify-center flex-col">
          <img className="object-cover object-center rounded h-[15vw] w-full" alt="" src="https://api.learningt.com/wp-content/uploads/2023/07/contact-banner.jpg" />
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">Feedback Form</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
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
                <RatingSection/>
              </div>
            </div>
            <div className="text-gray-600 body-font relative container px-5 py-2 mx-auto items-center text-center">
              <div className="mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <input type="email" id="email" name="email" placeholder='Trainer Name' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                    <input type="date" id="email" name="email" placeholder='Date of training' className="w-full h-[4.5vw] inputHeight bg-opacity-75 rounded border border-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 duration-200 ease-in-out"/>
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
