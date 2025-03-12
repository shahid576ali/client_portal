import React, { useState } from "react";

const DailyJournal = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-100 p-4">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <h1 className="text-center text-xl font-bold text-black mb-4">Upload Journal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Date of Journal:</label>
            <input type="date" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue="2025-04-08" />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Task Topic:</label>
            <input type="text" placeholder="Enter task topic" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Task Done Today:</label>
            <textarea placeholder="Describe the task done today" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-24"></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Learnings:</label>
            <textarea placeholder="Your learnings from this task" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-24"></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Task Status:</label>
            <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Task Time (in minutes):</label>
            <input type="number" placeholder="Enter time taken in minutes" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105">Submit</button>
          </div>
        </form>

        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-2xl text-center border border-gray-300 animate-fade-in w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800">🎉 Submission Successful!</h2>
            <p className="text-gray-600 mt-2">Your journal entry has been submitted successfully.</p>
            <div className="mt-4 flex justify-center">
              <span className="text-green-500 text-3xl">✔️</span>
            </div>
          </div>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default DailyJournal;
