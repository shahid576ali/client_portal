import React, { useState } from "react";
import { FaUser, FaLock, FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-3/4 max-w-3xl flex shadow-lg rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-in-out min-h-[500px]">
        {/* Registration Content on Left (if Register Page) */}
        <div className={`w-1/2 ${isLogin ? "bg-blue-500 text-white" : "bg-white text-black"} flex flex-col justify-center items-center p-10`}> 
          <h1 className="text-3xl font-bold mb-4">{isLogin ? "Hello, Welcome!" : "Welcome Back!"}</h1>
          <p className="text-md mb-6">{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
          <button 
            className="bg-white text-blue-500 px-6 py-2 rounded-xl font-medium hover:bg-gray-100"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>

        {/* Form Content on Right */}
        <div className={`w-1/2 ${isLogin ? "bg-white" : "bg-blue-500 text-white"} flex flex-col justify-center items-center p-10 min-h-[500px]`}>
          <h2 className="text-2xl font-bold mb-6">{isLogin ? "Login" : "Registration"}</h2>
          <div className="w-full mb-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none"
              />
              <FaUser className="absolute left-3 top-3 text-gray-400" />
            </div>
            {!isLogin && (
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none"
                />
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              </div>
            )}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg focus:outline-none"
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
            </div>
            {isLogin && (
              <p className="text-right text-blue-500 text-sm cursor-pointer mb-4 hover:underline">
                Forgot password?
              </p>
            )}
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-600">
              {isLogin ? "Login" : "Register"}
            </button>
          </div>

          <p className="text-gray-500 mb-4">or {isLogin ? "login" : "register"} with social platforms</p>
          <div className="flex space-x-4">
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaGoogle className="text-gray-500" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaFacebook className="text-gray-500" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaGithub className="text-gray-500" />
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaLinkedin className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
