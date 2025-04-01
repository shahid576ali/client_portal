import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl h-full md:h-auto md:min-h-[500px] shadow-lg rounded-2xl overflow-hidden bg-white">
        
        {/* Left Side (Welcome) */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full bg-[#274C77] text-white flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-20
            md:rounded-l-2xl 
            rounded-b-[100px] 
            md:rounded-b-none 
            relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">Hello, Welcome!</h2>
          <p className="mt-2 text-center text-sm md:text-base">Don't have an account?</p>
          <Link
            to="/signup"
            className="mt-4 border-2 border-white px-4 md:px-6 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#274C77] transition text-sm md:text-base"
          >
            Register
          </Link>
        </motion.div>

        {/* Right Side (Login Form) */}
        <div className="md:w-1/2 w-full bg-white px-6 md:px-12 py-10 md:py-12 flex flex-col justify-center flex-1 h-full">
          <div className="flex justify-center mb-8">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNnhO4HcdvsaaKvo7cvppYO9nA9jGH00bXg&s" 
              className="w-32 md:w-48 h-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
          <button className="bg-[#274C77] text-white w-full py-3 rounded-lg hover:bg-[#4b7d9a] transition text-sm md:text-base">
            Login
          </button>
          <p className="text-sm mt-4 text-center">
            Forgot your password?{" "}
            <span className="underline cursor-pointer text-blue-600">Click here</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
