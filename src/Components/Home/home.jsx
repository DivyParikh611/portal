import "../Home/home.css"
import Elearning from "../Programs/elearning";
import React, { useState, useEffect } from 'react'
import InstructorPrograms from "../Programs/instructorPrograms";

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
    <>
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
          <button className={`tab-button py-1 px-4 bg-purple-500 text-white focus:outline-none ${activeTab === 'InstructorLead' ? 'text-white bg-purple-800 font-medium' : 'bg-white text-purple-800'
            }`}
            onClick={(event) => openTab(event, 'InstructorLead')}
          >
            Instructor Lead
          </button>
          <button className={`tab-button py-1 px-4 focus:outline-none ${activeTab === 'ELearning' ? 'text-white font-medium bg-purple-800' : ''
            }`}
            onClick={(event) => openTab(event, 'ELearning')}
          >
            E-Learning
          </button>
        </div>
        <div className="tab-content" id="InstructorLead" style={{ display: activeTab === 'InstructorLead' ? 'block' : 'none' }}>
          <InstructorPrograms />
        </div>
        <div className="tab-content" id="ELearning" style={{ display: activeTab === 'ELearning' ? 'block' : 'none' }}>
          <Elearning />
        </div>
        <button class="flex mx-auto mt-16 text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 rounded text-lg">Button</button>
      </section>
      <section>
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Clients</h1>
        </div>
        <div className="slider-container">
          <div className="slider p-4">
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
            <div className="image-container p-4 border border-black">
              <img src="https://api.learningt.com/wp-content/uploads/2023/07/examity-logo.png" alt="" className="slider-item" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
