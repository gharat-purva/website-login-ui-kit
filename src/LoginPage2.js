import React from 'react';
import './index.css';
const LoginPage2 = () => {
  return (
    <div className="h-screen bg-realwhite p-5 overflow-hidden">
      <div className="h-full flex md:flex-row bg-grafhi-blue rounded-3xl relative ">
        <div className="absolute top-8 left-96 w-40 h-80 bg-grafhi-orange rounded-full rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-28 h-28 top-20 right-80 rounded-br-full rotate-12 transform bg-mint"></div>
        <div className="absolute w-28 h-28 right-140 top-60 rounded-tl-full rotate-12 transform bg-grafhi-red"></div>
        <div className="absolute bottom-20 right-80 w-24 h-48 rotate-12 rounded-tl-full rounded-bl-full bg-burgundy transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-40 left-0 w-40 h-80 -rotate-12 rounded-tr-full rounded-br-full bg-structblue"></div>
        <div className="absolute bottom-80 right-12 w-28 h-56 rounded-tl-full rounded-bl-full bg-structblue transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute w-72 h-36 bottom-0 right-0 rounded-tl-full rounded-tr-3xl bg-realwhite text-darkgray p-5 items-center justify-center text-sm">
        <div className="relative w-20 h-20">
          <div className="absolute m-5 w-5 h-10 bg-structblue rounded-tl-full rounded-bl-full"></div>
          <div className="absolute m-5 w-5 h-5 bg-highlight-yellow rounded-br-full top-5 left-5 clip-quarter"></div>
        </div> 
        <span className='font-bold text-md text-black'>Upgrafhi Studio</span><br/>© Upgrafhi Copyright 2022</div>
          
        <div className="relative flex flex-1 items-center justify-center mt-24 mb-24 bg-realwhite bg-opacity-85 backdrop-blur-sm shadow-lg max-w-md mx-auto md:mx-0 md:max-w-none transform translate-x-24">
          <div className="w-1/2">
            <h2 className="text-2xl mb-4">Welcome <span className='font-bold'>Back</span></h2>
            <p className="text-darkgray mb-6">Enter your email and password to login to your account.</p>
            <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 bg-input-grey"/>
            <input type="password" placeholder="Password" className="w-full p-3 mb-4 bg-input-grey"/>
            <button className="w-full bg-grafhi-blue text-realwhite p-3 mb-4">Sign In</button>
            <button className="w-full bg-input-grey border-2 border-darkgray text-black p-3 mb-4 flex items-center justify-center">
              <div className="h-5 w-5 mr-3 font-serif bg-grafhi-gray rounded-full transform rotate-90"></div>Continue with Google
            </button>
            <div className="text-sm">
              <a href="#" className="hover:underline text-darkblue font-bold">I forgot my password</a><br/>
              Don't have an account?
              <a href="#" className="hover:underline text-darkblue font-bold"> Sign Up</a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-realwhite ml-60 mt-10 mr-80">
          <h1 className="absolute text-6xl font-bold">
          <div className="relative w-1 h-1">   
         <div className="absolute w-12 h-12  bg-realwhite rounded-full"></div> 
         </div>
         <div className="relative w-20 h-20">
         <div className="absolute w-5 h-10 bg-darkblue rounded-tl-full rounded-bl-full"></div>
         <div className="absolute w-5 h-5 bg-highlight-yellow rounded-br-full top-5 left-5 clip-quarter"></div>
       </div> 
          Welcome to Grafhi.</h1>
          <p className="mt-60 mr-48">Let’s get you all set up so you can verify your personal account and begin setting up your profile</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;
