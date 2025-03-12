import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
      className="flex h-screen items-center justify-center bg-gray-100"
    >
      <div className="flex w-3/4 max-w-4xl shadow-lg rounded-2xl overflow-hidden relative">
        {/* Left Side (Welcome Section) */}
        <motion.div 
          initial={{ x: "-100%" }} 
          animate={{ x: "0%" }} 
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6 }}
          className="w-1/2 bg-[#274C77] text-white flex flex-col items-center justify-center px-12 py-16 rounded-l-2xl"
        >
          <h2 className="text-3xl font-bold">Hello, Welcome!</h2>
          <p className="mt-2">Don't have an account?</p>
          <button
            onClick={() => navigate("/signup")}
            className="mt-4 border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition"
          >
            Register
          </button>
        </motion.div>

        {/* Right Side (Login Form) */}
        <div className="w-1/2 bg-white px-12 py-16 flex flex-col justify-center rounded-r-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNnhO4HcdvsaaKvo7cvppYO9nA9jGH00bXg&s" 
              alt="Login Icon" 
              className="w-48 h-20 object-cover"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Form Inputs */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <p className="text-right text-sm text-gray-500 mt-2 cursor-pointer hover:underline">
            Forgot password?
          </p>

          {/* Login Button */}
          <button className="w-full bg-[#274C77] text-white py-3 rounded-lg text-lg font-semibold hover:bg-offwhite-600 transition mt-6">
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
