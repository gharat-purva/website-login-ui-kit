import React from 'react';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';
import { useMediaQuery } from 'react-responsive';

const LoginPage3 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-grafhi-blue relative">
        <div className="absolute top-8 left-96 w-40 h-80 bg-grafhi-orange rounded-full rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 rounded-tr-full bg-structblue"></div>
        <div className="absolute w-28 h-28 -top-2 right-80 rounded-br-full transform rotate-45 bg-mint"></div>
        <div className="absolute bottom-20 right-20 w-24 h-48 rotate-12 rounded-tl-full rounded-bl-full bg-burgundy transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      </div>
      <div className="flex-1 bg-white">
        <div className="flex justify-center items-center h-full mr-96 pr-40">
          <div className="text-white overflow-hidden mt-20 mr-96 ml-48">
            {isMobile ? (
              <img src={logoMobile} alt="Logo" className="mx-auto mb-8" style={{ width: '50px' }} />
            ) : (
              <img src={logoDesktop} alt="Logo" className="mx-auto mb-8" style={{ width: '150px' }} />
            )}
            <h1 className="text-5xl font-bold tracking-wide">Welcome to Grafhi.</h1>
            <p className="mt-4">
              Let's get you all set up so you can verify your personal account and begin setting up your profile.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 mr-10 transform -translate-y-1/2 p-8 bg-realwhite shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold">Welcome <span className='font-bold'>Back</span></h2>
        <p className="text-darkgray mb-6">Enter your email and password to login to your account.</p>
        <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 bg-input-grey"/>
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 bg-input-grey"/>
        <button className="w-full bg-grafhi-blue text-realwhite p-3 mb-4">Sign In</button>
        <button className="w-full bg-input-grey border-2 border-darkgray text-black p-3 mb-4 flex items-center justify-center">
          <div className="h-5 w-5 mr-3 font-serif bg-grafhi-gray rounded-full transform rotate-90"></div>Continue with Google
        </button>
        <div className="text-sm">
          <button className="hover:underline text-darkblue font-bold">I forgot my password</button><br/>
          Don't have an account?
          <button className="hover:underline text-darkblue font-bold"> Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage3;
