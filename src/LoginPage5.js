import React from 'react';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';
import { useMediaQuery } from 'react-responsive';

const LoginPage5 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <div className="text-center mb-6">
            {isMobile ? (
              <img src={logoMobile} alt="Logo" className="h-12" />
            ) : (
              <img src={logoDesktop} alt="Logo" className="h-24" />
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border border-gray-300 rounded"/>
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-gray-300 rounded"/>
          <button className="w-full bg-blue-600 text-white p-3 rounded mb-4">Sign In</button>
          <button className="w-full bg-gray-200 text-black p-3 rounded mb-4 flex items-center justify-center">
            <div className="h-5 w-5 mr-3 bg-gray-400 rounded-full"></div>Continue with Google
          </button>
          <div className="text-sm text-center">
            <button className="text-blue-500 hover:underline" onClick={() => {/* Handle forgot password */}}>I forgot my password</button><br/>
            Don't have an account?
            <button className="text-blue-500 hover:underline" onClick={() => {/* Handle sign up */}}> Sign Up</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="mt-4">We're glad to see you again. Please login to continue.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage5;
