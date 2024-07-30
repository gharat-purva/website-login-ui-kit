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
        </div>
        <div className="text-black px-8 py-12">
          <h1 className="ml-60 mt-20 mr-80 text-5xl font-bold">Welcome to Grafhi.</h1>
          <p className="ml-60 mr-60 mt-4">Let's get you all set up so you can verify your personal account and begin setting up your profile</p>
        </div>
      </div>
      <div className="flex w-1/2 bg-white">
        <div className="m-auto w-1/2">
          <div className="flex justify-between mb-6 items-center text-center">
            <div className="relative w-20 h-20">
              <div className="absolute w-5 h-10 bg-structblue rounded-tl-full rounded-bl-full"></div>
              <div className="absolute w-5 h-5 bg-highlight-yellow rounded-br-full top-5 left-5 clip-quarter"></div>
            </div>
            <div className="font-poppins text-xl font-bold text-center">Grafhi</div>
          </div>
          <h1 className="text-3xl font-poppins font-bold mb-6">Sign In</h1>
          <p className="mb-6">Enter your email and password to login to your account.</p>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Email Address</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="example@email.com" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Password</label>
              <input type="password" className="w-full p-3 border border-gray-300 rounded" placeholder="8+ strong characters" />
            </div>
            <button className="w-full p-3 bg-darkblue text-realwhite rounded">Sign In</button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-400">Or sign in with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="p-3 border border-gray-300 rounded-full"></button>
            <button className="p-3 border border-gray-300 rounded-full"></button>
            <button className="p-3 border border-gray-300 rounded-full"></button>
          </div>
          <p className="mt-6 text-center">
            Want to create an account? <a href="/sign-up" className="text-darkblue">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage4;
