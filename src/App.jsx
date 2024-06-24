import './App.css';
import Home from './Components/Home/home';
import Image from "./assets/main-logo.png";
import Login from './Components/Login/login';
import Image1 from "./assets/grant-thornton.png";
import Feedback from './Components/Feedback/feedback';

function App() {
  return (
    <>
      <header class="text-gray-600 body-font" style={{fontFamily:"Poppins"}}>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-5">
            <img src={Image} alt="" className='h-13 w-40'/>
          </a>
          <button className='text-black hover:bg-gray-100 px-3 py-4 rounded'>Programmes&nbsp;<i class="fa-solid fa-chevron-down text-md"></i></button>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900"></a>
            <a class="mr-5 hover:text-gray-900"></a>
            <a class="mr-5 hover:text-gray-900"></a>
            <a class="mr-5 hover:text-gray-900"></a>
          </nav>
          <button class="inline-flex items-center border-0 py-3 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           <i class="fa-solid fa-cart-shopping"></i> &nbsp;Cart (0)
          </button>
          <button class="flex ml-2 text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded">Log In</button>
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3">
            <img src={Image1} alt="" className='h-10 w-48'/>
          </a>
        </div>
      </header>
      <Home/>
      {/* <Feedback/> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
