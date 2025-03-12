import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("Last Year");
  const [showLeaves, setShowLeaves] = useState(true);
  const [showJournal, setShowJournal] = useState(true);
  const [selectedChart, setSelectedChart] = useState("Daily Journal");

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const getLineData = () => {
    const dataSets = {
      "Last Year": [
        { name: "Jan", Leaves: 50, Journal: 40 },
        { name: "Feb", Leaves: 60, Journal: 45 },
        { name: "Mar", Leaves: 55, Journal: 50 },
        { name: "Apr", Leaves: 70, Journal: 55 },
        { name: "May", Leaves: 65, Journal: 60 },
      ],
      "Last Month": [
        { name: "Week 1", Leaves: 20, Journal: 10 },
        { name: "Week 2", Leaves: 25, Journal: 15 },
        { name: "Week 3", Leaves: 30, Journal: 20 },
        { name: "Week 4", Leaves: 35, Journal: 25 },
      ],
      "Last Week": [
        { name: "Mon", Leaves: 10, Journal: 5 },
        { name: "Tue", Leaves: 12, Journal: 7 },
        { name: "Wed", Leaves: 15, Journal: 9 },
        { name: "Thu", Leaves: 20, Journal: 12 },
        { name: "Fri", Leaves: 18, Journal: 10 },
      ],
    };
    return dataSets[timeFrame] || [];
  };

  const getPieData = () => {
    const dataSets = {
      "Daily Journal": [
        { name: "Approved", value: 35 },
        { name: "Disapproved", value: 40 },
        { name: "Pending", value: 25 },
      ],
      "Weekly Report": [
        { name: "Approved", value: 50 },
        { name: "Disapproved", value: 30 },
        { name: "Pending", value: 20 },
      ],
    };
    return dataSets[selectedChart] || [];
  };

  const COLORS = ["#6096BA", "#274C77", "#A3CEF1"];

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#274C77]">
              Daily Trends
            </h3>
            <select
              value={timeFrame}
              onChange={handleTimeFrameChange}
              className="border p-2 rounded cursor-pointer text-[#274C77]"
            >
              <option value="Last Year">Last Year</option>
              <option value="Last Month">Last Month</option>
              <option value="Last Week">Last Week</option>
            </select>
          </div>

          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded font-medium cursor-pointer ${
                showLeaves ? "bg-[#6096BA] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowLeaves(!showLeaves)}
            >
              Leaves
            </button>
            <button
              className={`px-4 py-2 rounded font-medium cursor-pointer ${
                showJournal ? "bg-[#274C77] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowJournal(!showJournal)}
            >
              Daily Journal
            </button>
          </div>

          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={getLineData()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#8B8C89" />
                <XAxis dataKey="name" stroke="#274C77" />
                <YAxis stroke="#274C77" />
                <Tooltip />
                {showLeaves && (
                  <Line
                    type="monotone"
                    dataKey="Leaves"
                    stroke="#6096BA"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                )}
                {showJournal && (
                  <Line
                    type="monotone"
                    dataKey="Journal"
                    stroke="#274C77"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="flex mb-4">
            <button
              className={`px-4 py-2 rounded-l-lg font-medium cursor-pointer ${
                selectedChart === "Daily Journal"
                  ? "bg-[#6096BA] text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setSelectedChart("Daily Journal")}
            >
              Daily Journal
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg font-medium cursor-pointer ${
                selectedChart === "Weekly Report"
                  ? "bg-[#6096BA] text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setSelectedChart("Weekly Report")}
            >
              Weekly Report
            </button>
          </div>

          <PieChart width={300} height={300}>
            <Pie
              data={getPieData()}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {getPieData().map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
