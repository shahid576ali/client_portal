import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const steps = ["Personal Info", "Contact Info", "Set Password"];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="flex h-screen items-center justify-center bg-gray-100"
    >
      <div className="flex w-3/4 max-w-4xl shadow-lg rounded-2xl overflow-hidden relative">
        {/* Left Side (Signup Form) */}
        <div className="w-1/2 bg-white px-12 py-12 flex flex-col justify-center rounded-l-2xl">
          <div className="flex justify-center mb-4"> {/* Logo moved up */}
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNnhO4HcdvsaaKvo7cvppYO9nA9jGH00bXg&s" 
              alt="Placeholder" 
              className="w-48 h-16 object-cover"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Form Inputs (Now with 4 fields per step) */}
          <div className="space-y-4">
            {step === 1 && (
              <>
                <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </>
            )}
            {step === 2 && (
              <>
                <input type="text" placeholder="City" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="State" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Phone Number (With Country Code)" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Postal Code" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)} 
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-400"
              >Back</button>
            )}
            {step < steps.length ? (
              <button 
                onClick={() => setStep(step + 1)} 
                className="bg-[#6096BA] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#4b7d9a] ml-auto"
              >Next</button>
            ) : (
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600 ml-auto">Register</button>
            )}
          </div>
        </div>

        {/* Right Side (Step Progress & Login Link) */}
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "0%" }} 
          exit={{ x: "100%" }}
          transition={{ duration: 0.6 }}
          className="w-1/2 bg-[#6096BA] text-white flex flex-col items-start justify-between px-12 py-16 rounded-r-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Registration Steps</h2>
          <div className="w-full space-y-4 mb-6">
            {steps.map((s, index) => (
              <div key={index} className={`p-4 border border-white rounded-lg ${step === index + 1 ? 'bg-white text-[#6096BA] font-bold' : 'text-gray-300'}`}>
                <span className="mr-3 font-bold">{index + 1}. </span>{s}
              </div>
            ))}
          </div>
          <p className="text-lg self-start">
            Already a user? 
            <span 
              onClick={() => navigate("/login")} 
              className="underline cursor-pointer hover:text-gray-200 transition"
            > Login</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Signup;
