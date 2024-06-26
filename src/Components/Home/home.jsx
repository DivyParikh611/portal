import "../Home/home.css"
import Elearning from "./Programs/elearning";
import React, { useState, useEffect } from 'react'
import InstructorPrograms from "./Programs/instructorPrograms";

export default function Home() {
  const [activeTab, setActiveTab] = useState('InstructorLead');
  const openTab = (event, tabName) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, message: 'Check1', imgUrl: 'https://api.learningt.com/wp-content/uploads/2022/10/banner-1.jpg' },
    { id: 2, message: 'Check2', imgUrl: 'https://api.learningt.com/wp-content/uploads/2024/02/banner-2.webp' },
    { id: 3, message: 'Check3', imgUrl: 'https://api.learningt.com/wp-content/uploads/2024/05/home-banner-2-4.jpg' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === slides.length - 1) {
        setTimeout(() => setCurrentSlide(0), 1500);
      } else {
        return prevSlide + 1;
      }
    });
  };

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div className="slideshow container">
        <div className="slideshow-inner" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className={`slide ${slide.bgColor}`}>
              <img src={slide.imgUrl} className="w-full h-[28vw]" alt="" />
              <h1 className="text-4xl text-center p-8 text-white slide-content"></h1>
            </div>
          ))}
        </div>
        <div className="page-indicators">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`page-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <section className="flex flex-col text-center w-full mb-20">
        <div className="flex mx-auto border border-purple-800 rounded overflow-hidden mt-6 tab-bar">
          <button className={`tab-button py-1 px-4 bg-purple-500 text-white focus:outline-none ${activeTab === 'InstructorLead' ? 'text-white bg-purple-800 font-medium' : 'text-purple-800 bg-white'
            }`}
            onClick={(event) => openTab(event, 'InstructorLead')}
          >
            Instructor Lead Programs
          </button>
          <button className={`tab-button py-1 px-4 focus:outline-none ${activeTab === 'ELearning' ? 'text-white font-medium bg-purple-800' : ''
            }`}
            onClick={(event) => openTab(event, 'ELearning')}
          >
            E-Learning Programs
          </button>
        </div>
        <div className="tab-content" id="InstructorLead" style={{ display: activeTab === 'InstructorLead' ? 'block' : 'none' }}>
          <InstructorPrograms />
        </div>
        <div className="tab-content" id="ELearning" style={{ display: activeTab === 'ELearning' ? 'block' : 'none' }}>
          <Elearning />
        </div>
        <button className="flex mx-auto text-purple-800 font-semibold border border-purple-800 py-3 px-12 focus:outline-none hover:bg-purple-900 rounded-lg text-md">ALL PROGRAMMES</button>
      </section>
      <section className="text-gray-600 body-font benchMarks">
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-3 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">Empowering Success</h1>
          </div>
          <div className="container py-6">
            <div className="flex flex-wrap -m-3">
              <div className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/rating-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6">4.54 / 5</h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">RATED BY CLIENTS</h2>
                </div>
              </div>
              <div className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/learner-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><div className="flex"><NumberCounter initialNumber={17000} targetNumber={18000} />+</div></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">HAPPY LEARNERS</h2>
                </div>
              </div>
              <div className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/office-building-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><CityCounter targetNumber={15} /></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">PRESENCE IN 15 CITIES</h2>
                </div>
              </div>
              <div className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/learner-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><div className="flex"><NumberCounter initialNumber={958500} targetNumber={960000} />+</div></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">LEARNING HOURS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
            <p className="mb-8 leading-relaxed"></p>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"></button>
        </div>
      </section>
      {/* <section className="bg-gradient-to-br from-pink-600 to-purple-800">
        <div className="mx-auto flex md:flex-row flex-col items-center">
          <div className="px-8 lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">LearninGT enables personal and professional transformation</h1>
            <div className="py-4">
              <button className="inline-flex text-white border-indigo-500 border py-2 px-6 focus:outline-none hover:border-none rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-24 md:pl-16 flex justify-end">
            <img className="rounded-lg" alt="" src="https://api.learningt.com/wp-content/uploads/2023/07/event-01.webp" />
          </div>
        </div>
      </section> */}
        <section class="container px-5 mx-auto overflow-hidden">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What people are saying</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="flex flex-wrap -m-12 py-24 ">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
              <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
              <a class="inline-flex items-center">
                <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                </span>
              </a>
            </div>
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
              <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
              <a class="inline-flex items-center">
                <img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                  <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
      </section>
    </div>
  )
}

const NumberCounter = ({ initialNumber, targetNumber }) => {
  const [count, setCount] = useState(initialNumber);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 0.0000000000001);

    return () => clearInterval(interval);
  }, [count, targetNumber]);

  return (
    <div className="">{count}</div>
  );
};

const CityCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, targetNumber]);

  return (
    <div className="counter">
      {count}
    </div>
  );
};