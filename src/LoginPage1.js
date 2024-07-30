import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoDesktop from './assets/logoDesktop.png';
import logoMobile from './assets/logoMobile.png';

const LoginPage1 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex h-screen">
      <div className="flex w-1/2 bg-white pr-20">
        <div className="relative w-20 h-20">
          <div className="absolute m-2 w-5 h-10 bg-structblue rounded-tl-full rounded-bl-full"></div>
          <div className="absolute m-2 w-5 h-5 bg-highlight-yellow rounded-br-full top-5 left-5 clip-quarter"></div>
        </div>
        <div className="m-3 font-poppins text-xl font-bold">Grafhi</div>
        <div className="m-auto">
          {isMobile ? (
            <img src={logoMobile} alt="Logo" className="mx-auto mb-8" style={{ width: '50px' }} />
          ) : (
            <img src={logoDesktop} alt="Logo" className="mx-auto mb-8" style={{ width: '150px' }} />
          )}
          <h1 className="text-3xl font-poppins font-bold mb-6 mt-20">Sign In</h1>
          <p className="mb-6 text-darkgray">Enter your email and password to login to your account.</p>
          <form>
            <div className="mb-4 text-darkgray">
              <label className="block mb-2 text-sm">Email Address</label>
              <input type="email" className="w-full p-3 border border-grafhi-gray rounded" placeholder="example@email.com" />
            </div>
            <div className="mb-4 text-darkgray">
              <label className="block mb-2 text-sm">Password</label>
              <input type="password" className="w-full p-3 border border-grafhi-gray rounded" placeholder="8+ strong characters" />
            </div>
            <button className="w-full p-3 bg-darkblue text-realwhite rounded">Sign In</button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <hr className="flex-grow border-t border-darkgray" />
            <span className="mx-4 text-sm text-darkgray">Or sign in with</span>
            <hr className="flex-grow border-t border-darkgray" />
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
            </button>
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
            </button>
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-grafhi-gray rounded-full"></div>
            </button>
          </div>
          <p className="mt-20">
            Want to create an account? <button className="text-darkblue underline">Sign up</button>
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-darkgray text-realwhite flex items-center justify-center">
        <div>
          <h1 className="ml-60 mb-5 mr-40 text-5xl font-poppins font-bold">
            <div className="relative w-1 h-1">
              <div className="absolute w-12 h-12 bg-realwhite rounded-full"></div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute w-5 h-10 bg-darkblue rounded-tl-full rounded-bl-full"></div>
              <div className="absolute w-5 h-5 bg-highlight-yellow rounded-br-full top-5 left-5 clip-quarter"></div>
            </div>
            <span className='tracking-widest'>Welcome to Grafhi.</span>
          </h1>
          <p className="ml-60 mr-60">Let's get you all set up so you can verify your personal account and begin setting up your profile</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage1;
