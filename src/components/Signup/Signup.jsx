import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const steps = ["Personal Info", "Contact Info", "Academic Qualifications"];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen items-center justify-center bg-gray-100 p-4"
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden relative bg-white">
        {/* Left Side (Signup Form) */}
        <div className="md:w-1/2 w-full bg-white px-6 md:px-12 py-10 md:py-12 flex flex-col justify-center rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNnhO4HcdvsaaKvo7cvppYO9nA9jGH00bXg&s" 
              alt="Placeholder" 
              className="w-32 md:w-48 h-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            {step === 1 && (
              <>
                <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Phone No." className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
              </>
            )}
            {step === 2 && (
              <>
                <input type="text" placeholder="City" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="State" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
              </>
            )}
            {step === 3 && (
              <>
                <input type="text" placeholder="Education Details" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Organisation" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Course" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
                <input type="text" placeholder="Applied For" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-3 sm:space-y-0">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)} 
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {step < steps.length ? (
              <button 
                onClick={() => setStep(step + 1)} 
                className="bg-[#274C77] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#4b7d9a] sm:ml-auto"
              >
                Next
              </button>
            ) : (
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600 sm:ml-auto">
                Register
              </button>
            )}
          </div>
        </div>

        {/* Right Side (Steps & Link) */}
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "0%" }} 
          exit={{ x: "100%" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full bg-[#274C77] text-white flex flex-col items-start justify-between px-6 md:px-12 py-10 md:py-16 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Registration Steps</h2>
          <div className="w-full space-y-4 mb-6">
            {steps.map((s, index) => (
              <div 
                key={index} 
                className={`p-3 md:p-4 border border-white rounded-lg text-sm md:text-base ${
                  step === index + 1 ? "bg-white text-[#6096BA] font-bold" : "text-gray-300"
                }`}
              >
                <span className="mr-2 font-bold">{index + 1}.</span> {s}
              </div>
            ))}
          </div>
          <p className="text-sm md:text-lg">
            Already a user?{" "}
            <Link 
              to="/login" 
              className="underline cursor-pointer hover:text-gray-200 transition"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Signup;
