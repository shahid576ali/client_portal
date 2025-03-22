import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen items-center justify-center bg-gray-100 p-4"
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden relative bg-white">
        {/* Left Side (Welcome Section) */}
        <motion.div 
          initial={{ x: "-100%" }} 
          animate={{ x: "0%" }} 
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full bg-[#274C77] text-white flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-16 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">Hello, Welcome!</h2>
          <p className="mt-2 text-center text-sm md:text-base">Don't have an account?</p>
          <Link 
            to="/signup"
            className="mt-4 border-2 border-white px-4 md:px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 transition text-sm md:text-base"
          >
            Register
          </Link>
        </motion.div>

        {/* Right Side (Login Form) */}
        <div className="md:w-1/2 w-full bg-white px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNnhO4HcdvsaaKvo7cvppYO9nA9jGH00bXg&s" 
              alt="Login Icon" 
              className="w-32 md:w-48 h-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Form Inputs */}
          <div className="space-y-4 md:space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          {/* Forgot Password */}
          <p className="text-right text-sm text-gray-500 mt-2 cursor-pointer hover:underline">
            Forgot password?
          </p>

          {/* Login Button */}
          <button className="w-full bg-[#274C77] text-white py-3 rounded-lg cursor-pointer text-sm md:text-lg font-semibold hover:bg-blue-600 transition mt-6">
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
