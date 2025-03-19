import React from "react";
import { motion } from "framer-motion";

const IntroMessage = ({ userName }) => {
  // Static Motivational Quote
  const quote = "Every new day is a chance to shine brighter!";

  // Format date (e.g., "Saturday, Mar 8")
  const formatDate = () => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-8xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 mt-20 md:mt-6 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Side: Welcome Message */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-[#083B76] leading-tight">
          Welcome,{" "}
          <span className="text-[#274C77]">{userName.toUpperCase()}</span>!
        </h1>
      </div>

      {/* Right Side: Date & Quote */}
      <div className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0">
        <p className="text-sm md:text-lg text-[#8B8C89]">{formatDate()}</p>
        <p className="mt-2 text-xs md:text-base italic text-[#6096BA]">
          "{quote}"
        </p>
      </div>
    </motion.div>
  );
};

export default IntroMessage;
