import "../Home/home.css"
import Slider from "react-slick";
import { motion } from "framer-motion";
import 'slick-carousel/slick/slick.css';
import Image from "../../assets/no_user.png";
import Elearning from "./Programs/elearning";
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
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
          <button className={`tab-button py-1 px-4 focus:outline-none ${activeTab === 'InstructorLead' ? 'text-white bg-purple-800 font-medium' : ''
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
        <button className="flex mx-auto text-purple-800 font-semibold border border-purple-800 py-3 px-12 focus:outline-none hover:bg-purple-900 hover:text-white rounded-lg text-md">ALL PROGRAMMES</button>
      </section>
      <section className="text-gray-600 body-font benchMarks">
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-3 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">Empowering Success</h1>
          </div>
          <div className="container py-6">
            <div className="flex flex-wrap -m-3">
              <motion.div initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/rating-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6">4.54 / 5</h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">RATED BY CLIENTS</h2>
                </div>
              </motion.div>
              <motion.div initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/learner-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><div className="flex"><NumberCounter initialNumber={17750} targetNumber={18000} />+</div></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">HAPPY LEARNERS</h2>
                </div>
              </motion.div>
              <motion.div initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }} className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/office-building-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><CityCounter targetNumber={15} /></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">PRESENCE IN 15 CITIES</h2>
                </div>
              </motion.div>
              <motion.div initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }} className="p-2 lg:w-1/4">
                <div className="h-full flex flex-col bg-opacity-75 px-8 pt-12 rounded-lg overflow-hidden text-center items-center justify-center relative">
                  <img src="https://api.learningt.com/wp-content/uploads/2023/06/learner-icon.png" alt="" />
                  <h1 className="text-5xl 2xl:text-6xl text-white mt-6"><div className="flex"><NumberCounter initialNumber={959750} targetNumber={960000} />+</div></h1>
                  <h2 className="text-lg 2xl:text-xl text-white py-3">LEARNING HOURS</h2>
                </div>
              </motion.div>
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
      <section className="container px-24 mx-auto overflow-hidden">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="lg:text-4xl sm:text-2xl font-medium title-font mb-4 text-gray-900">What people are saying</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="py-4 md:w-1/2 w-full">
            <Slideshow />
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full items-center justify-center flex-col rounded rounded-lg">
              <div className="h-2/3">
                <img className="w-full h-full rounded rounded-lg rounded-br-none rounded-bl-none" src="https://api.learningt.com/wp-content/uploads/2022/10/leadership-img1.jpg" alt="" />
                {/* <iframe id="videoUrl" className="w-full h-full rounded rounded-lg rounded-br-none rounded-bl-none" src="https://www.youtube.com/embed/R90UqNNwF2g?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen=""></iframe> */}
              </div>
              <div className="h-1/3 bg-purple-500 rounded rounded-lg rounded-tr-none rounded-tl-none">
              </div>
            </div>
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
    <div>{count}</div>
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

const Slideshow = () => {
  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  }
  return (
    <Slider {...settings}>
      <div>
        <div className="h-full bg-gray-200 px-8 items-center justify-center py-24 rounded rounded-lg">
          <p className="leading-relaxed mb-6">I have looked into too many wells for pursuing US CPA course but GT is where my thirst quenched. It's immediate tie-up with Becker, hassle free sign-ups, easy &amp;amp; quick guidance at every step, swift responses to queries and live lectures are one of the few things that helped me choose GT with a...</p>
          <a className="inline-flex items-center">
            <img alt="" src={Image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Devanshi Mantri</span>
              <span className="text-gray-500 text-sm"></span>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div className="h-full bg-gray-200 px-8 items-center justify-center py-24 rounded rounded-lg">
          <p className="leading-relaxed mb-6">I am delighted to share my experience with GT Academy for US CPA course. As a student enrolled in their program, I can confidently say that they have provided me with an exceptional educational journey.
            The quality of education is unparalleled. The teachers are highly knowledgeable, passionate...</p>
          <a className="inline-flex items-center">
            <img alt="" src={Image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Vishal Ghai</span>
              <span className="text-gray-500 text-sm"></span>
            </span>
          </a>
        </div>
      </div>
    </Slider>
  );
}