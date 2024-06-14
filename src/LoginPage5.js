import React from 'react';

const LoginPage5 = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center relative bg-turbo-blue">
        <div className="text-realwhite px-8 py-12">
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
            <div className="mb-4  text-darkgray">
              <input type="email" className="w-full p-3 bg-input-grey rounded" placeholder="example@email.com" />
            </div>
            <div className="mb-4  text-darkgray">
              <input type="password" className="w-full p-3 bg-input-grey rounded" placeholder="8+ strong characters" />
            </div>
            <button className="w-full p-3 bg-turbo-blue text-realwhite rounded">Sign In</button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <hr className="flex-grow border-t border-darkgray" />
            <span className="mx-4 text-sm text-darkgray">Or sign in with</span>
            <hr className="flex-grow border-t border-darkgray" />
          </div>
          <div className="mt-4 justify-center space-x-2">
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg">
              <button className="w-8 h-8 mt-1 bg-grafhi-gray rounded-full "></button>
            </button>
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg">
              <button className="w-8 h-8 mt-1 bg-grafhi-gray rounded-full "></button>
            </button>
            <button className="w-32 h-12 border border-grafhi-gray rounded-lg">
              <button className="w-8 h-8 mt-1 bg-grafhi-gray rounded-full "></button>
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
