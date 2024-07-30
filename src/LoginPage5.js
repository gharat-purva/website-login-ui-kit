import React from 'react';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';
import { useMediaQuery } from 'react-responsive';

const LoginPage5 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center relative bg-turbo-blue">
        {/* Parallelogram structures */}
        {/* Top left corner */}
        <div className="absolute -top-1 left-32 w-10 h-12 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-10 left-10 w-32 h-48 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-52 left-44 w-8 h-10 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-64 left-36 w-6 h-8 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-64 left-44 w-16 h-24 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        {/* Top right corner */}
        <div className="absolute top-16 -right-10 w-32 h-48 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-10 -right-6 w-32 h-48 bg-darkgray transform skew-y-12 rounded-sm"></div>
        <div className="absolute top-64 right-14 w-8 h-12 bg-darkest-blue transform skew-y-12 rounded-sm"></div>
        {/* Bottom left corner */}
        <div className="absolute bottom-4 left-14 w-32 h-48 bg-sky-blue transform skew-y-12 rounded-sm"></div>
        <div className="absolute bottom-10 left-10 w-32 h-48 bg-darkgray transform skew-y-12 rounded-sm"></div>
        <div className="absolute bottom-16 left-48 w-8 h-12 bg-sky-blue transform skew-y-12 rounded-sm"></div>
        {/* Bottom right corner */}
        <div className="absolute bottom-10 -right-10 w-32 h-48 bg-bumblebee transform skew-y-12 rounded-sm"></div>
        <div className="absolute bottom-8 right-24 w-8 h-12 bg-bumblebee transform skew-y-12 rounded-sm"></div>

        <div className="text-realwhite px-8 py-12 z-10">
          {/* Logo display */}
          <div className="absolute top-4 left-4 flex items-center">
          {isMobile ? (
                <img src={logoMobile} alt="Logo" className="h-8 w-8" />
              ) : (
                <img src={logoDesktop} alt="Logo" className="h-10 w-30" />
              )}
            <div className="h-8 w-8 bg-white rounded-full mr-2 flex items-center justify-center">
              
            </div>
            <span className="text-xl font-bold">Grafhi</span>
          </div>
          <h1 className="ml-60 mt-20 mr-80 text-5xl font-bold">Welcome to Grafhi.</h1>
          <p className="ml-60 mr-60 mt-3">Let's get you all set up so you can verify your personal account and begin setting up your profile</p>
        </div>
      </div>

      {/* Right section with login form */}
      <div className="flex w-1/2 bg-white">
        <div className="m-auto w-100">
          <div className="mb-6">
            <div className="m-auto">
              <p className="mt-3 font-semi-bold">Want to create an account? <a href="#" className="text-darkblue font-bold">Sign up</a></p>
              <h1 className="text-3xl font-poppins font-bold mb-6 mt-20">Sign In</h1>
              <p className="mb-6 text-darkgray">Enter your email and password to login to your account.</p>
              <form>
                <div className="mb-4 text-darkgray">
                  <input type="email" className="w-full p-3 bg-input-grey rounded" placeholder="example@email.com" />
                </div>
                <div className="mb-4 text-darkgray">
                  <input type="password" className="w-full p-3 bg-input-grey rounded" placeholder="8+ strong characters" />
                </div>
                <button className="w-full p-3 bg-turbo-blue text-white rounded">Sign In</button>
              </form>
              <div className="mt-6 flex items-center">
                <hr className="flex-grow border-t border-darkgray" />
                <span className="mx-4 text-sm text-darkgray">Or sign in with</span>
                <hr className="flex-grow border-t border-darkgray" />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="w-16 h-16 border border-grafhi-gray rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
                </button>
                <button className="w-16 h-16 border border-grafhi-gray rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
                </button>
                <button className="w-16 h-16 border border-grafhi-gray rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
                </button>
              </div>
              <p className="mt-6 font-semi-bold text-darkgray mt-36">© Copyright Upgrafhi 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage5;
