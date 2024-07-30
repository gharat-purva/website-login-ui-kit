import React from 'react';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';
import { useMediaQuery } from 'react-responsive';

const LoginPage4 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center relative bg-highlight-yellow">
        <div className="absolute top-4 left-4 text-black flex items-center">
          {isMobile ? (
            <img src={logoMobile} alt="Logo" className="h-8 w-8" />
          ) : (
            <img src={logoDesktop} alt="Logo" className="h-10 w-30" />
          )}
          <span className="ml-4 font-bold text-3xl">Welcome Back</span>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-80 max-w-full">
          <h2 className="text-2xl font-semibold mb-4">Sign In to Your Account</h2>
          <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border border-gray-300 rounded"/>
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-gray-300 rounded"/>
          <button className="w-full bg-blue-500 text-white p-3 rounded mb-4">Sign In</button>
          <button className="w-full bg-gray-200 text-black p-3 rounded mb-4 flex items-center justify-center">
            <div className="h-5 w-5 mr-3 bg-gray-400 rounded-full"></div>Continue with Google
          </button>
          <div className="text-sm">
            <button className="text-blue-500 hover:underline" onClick={() => {/* Handle forgot password */}}>I forgot my password</button><br/>
            Don't have an account?
            <button className="text-blue-500 hover:underline" onClick={() => {/* Handle sign up */}}> Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage4;
