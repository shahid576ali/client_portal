import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const data = [
  { id: "JRN - 76010", date: "12/03/2025", status: "approved", learnings: "Improved API handling, Error debugging", rating: 5, leaderRemarks: "Great progress" },
  { id: "JRN - 76011", date: "11/03/2025", status: "approved", learnings: "Learned about Redux, State management", rating: 4, leaderRemarks: "Good effort" },
  { id: "JRN - 76012", date: "10/03/2025", status: "disapproved", learnings: "Missed deadline, Incomplete documentation", rating: 2, leaderRemarks: "Needs improvement" },
  { id: "JRN - 76013", date: "09/03/2025", status: "approved", learnings: "Implemented authentication, Security fixes", rating: 5, leaderRemarks: "Excellent" },
  { id: "JRN - 76014", date: "08/03/2025", status: "approved", learnings: "Performance optimization, Code refactoring", rating: 5, leaderRemarks: "Well done" },
];

const chartData = [
  { month: "Jan", journals: 50 },
  { month: "Feb", journals: 65 },
  { month: "Mar", journals: 60 },
  { month: "Apr", journals: 75 },
  { month: "May", journals: 70 },
];

const pieData = [
  { name: "Approved", value: 4 },
  { name: "Disapproved", value: 1 },
  { name: "Pending", value: 2 },
];

const COLORS = ["#4A90E2", "#1E3A8A", "#A6C1EE"];

const UploadJournal = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>
        <button
          onClick={() => navigate("/dailyjournal")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md mt-3 sm:mt-0"
        >
          Upload Daily Journal
        </button>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center text-lg font-bold">Weekly Report: 24</div>
        <div className="bg-blue-400 text-white p-4 rounded-lg shadow-md text-center text-lg font-bold">Daily Journal: 7</div>
        <div className="bg-blue-300 text-white p-4 rounded-lg shadow-md text-center text-lg font-bold">Leaves: 12</div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold mb-4">Daily Trends</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="journals" stroke="#4A90E2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold mb-4">Journal Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#4A90E2" dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg overflow-x-auto">
        <h3 className="text-lg font-bold mb-4">Journal Entries</h3>
        <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Journal ID</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Learnings</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Leader Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id} className="text-center">
                <td className="border p-2">{entry.id}</td>
                <td className="border p-2">{entry.date}</td>
                <td className={`border p-2 font-bold ${entry.status === "approved" ? "text-green-500" : "text-red-500"}`}>{entry.status}</td>
                <td className="border p-2">{entry.learnings}</td>
                <td className="border p-2">{entry.rating}</td>
                <td className="border p-2">{entry.leaderRemarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadJournal;
