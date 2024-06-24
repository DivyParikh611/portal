import "../Home/home.css"
import React, { useState, useEffect } from 'react'

export default function Home() {
  function openTab(){}
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, imgUrl: 'https://api.learningt.com/wp-content/uploads/2022/10/banner-1.jpg', content: "Check" },
    { id: 2, imgUrl: 'https://api.learningt.com/wp-content/uploads/2024/02/banner-2.webp', content: "Check" },
    { id: 3, imgUrl: 'https://api.learningt.com/wp-content/uploads/2024/05/home-banner-2-4.jpg', content: "Check" }
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
              <img src={slide.imgUrl} className="w-full h-[28vw]" />
                  <h1 className="text-4xl text-center p-8 text-white slide-content">{slide.content}</h1>
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
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"></h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"></p>
            <div className="flex mx-auto border border-purple-500 rounded overflow-hidden mt-6">
              <button onClick={openTab()} className="py-4 px-4 bg-purple-700 text-white focus:outline-none">Instructor Led Online Programmes</button>
              <button onClick={openTab()} className="py-4 px-4 focus:outline-none">E-Learning Programs</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium"></h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none"></h1>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium"></h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                </h1>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium"></h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                </h1>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="center text-center text-3xl lg:text-6xl"></div>
        <div className="slider-container">
          <div className="slider">
            <div className="image-container p-4">
              <img src="" alt="" className="slider-item" />
              <div className="text-overlay flex-col">
                <h1 className="text-4xl lg:text-7xl">Text 1</h1>
                <h2 className="text-2xl lg:text-5xl">Text 1</h2>
              </div>
            </div>
            <div className="image-container p-4">
              <img src="" alt="" className="slider-item" />
              <div className="text-overlay flex-col">
                <h1 className="text-4xl lg:text-7xl">Text 2</h1>
                <h2 className="text-2xl lg:text-5xl">Text 2</h2>
              </div>
            </div>
            <div className="image-container p-4">
              <img src="" alt="" className="slider-item" />
              <div className="text-overlay flex-col">
                <h1 className="text-4xl lg:text-7xl">Text 3</h1>
                <h2 className="text-2xl lg:text-5xl">Text 3</h2>
              </div>
            </div>
            <div className="image-container p-4">
              <img src="" alt="" className="slider-item" />
              <div className="text-overlay flex-col">
                <h1 className="text-4xl lg:text-7xl">Text 4</h1>
                <h2 className="text-2xl lg:text-5xl">Text 4</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
