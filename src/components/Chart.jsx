import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const allData = {
  "7days": [
    { week: "Day 1", leaves: 10, journal: 5 },
    { week: "Day 2", leaves: 20, journal: 10 },
    { week: "Day 3", leaves: 15, journal: 8 },
    { week: "Day 4", leaves: 30, journal: 12 },
    { week: "Day 5", leaves: 25, journal: 15 },
    { week: "Day 6", leaves: 35, journal: 18 },
    { week: "Day 7", leaves: 40, journal: 20 },
  ],
  "1month": Array.from({ length: 30 }, (_, i) => ({
    week: `Day ${i + 1}`,
    leaves: Math.random() * 50,
    journal: Math.random() * 25,
  })),
  "6months": Array.from({ length: 6 }, (_, i) => ({
    week: `Month ${i + 1}`,
    leaves: Math.random() * 100,
    journal: Math.random() * 50,
  })),
  "1year": Array.from({ length: 12 }, (_, i) => ({
    week: `Month ${i + 1}`,
    leaves: Math.random() * 120,
    journal: Math.random() * 60,
  })),
};

const DailyJournalChart = () => {
  const [selectedTime, setSelectedTime] = useState("7days");
  const [showLeaves, setShowLeaves] = useState(true);
  const [showJournal, setShowJournal] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 md:p-6 bg-white shadow-lg rounded-2xl w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4 relative">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          Daily Journal Stats
        </h2>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 text-sm md:text-base"
          >
            {selectedTime
              .replace("7days", "Last 7 Days")
              .replace("1month", "1 Month")
              .replace("6months", "6 Months")
              .replace("1year", "1 Year")}
            <ChevronDownIcon className="w-5 h-5 text-purple-600 ml-2" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-10">
              {Object.keys(allData).map((key) => (
                <button
                  key={key}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedTime(key);
                    setIsOpen(false);
                  }}
                >
                  {key
                    .replace("7days", "Last 7 Days")
                    .replace("1month", "1 Month")
                    .replace("6months", "6 Months")
                    .replace("1year", "1 Year")}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center">
          <Switch
            checked={showLeaves}
            onChange={setShowLeaves}
            className={`${
              showLeaves ? "bg-red-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                showLeaves ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          <span className="ml-2 text-gray-800 text-sm md:text-base">
            Leaves
          </span>
        </div>
        <div className="flex items-center">
          <Switch
            checked={showJournal}
            onChange={setShowJournal}
            className={`${
              showJournal ? "bg-green-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                showJournal ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          <span className="ml-2 text-gray-800 text-sm md:text-base">
            Daily Journal
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={allData[selectedTime]} margin={{ right: 20 }}>
              <XAxis
                dataKey="week"
                tick={{ fill: "#4B5563", fontSize: 12 }}
                axisLine={{ stroke: "#D1D5DB" }}
              />
              <YAxis
                tick={{ fill: "#4B5563", fontSize: 12 }}
                axisLine={{ stroke: "#D1D5DB" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend wrapperStyle={{ color: "#374151" }} />
              {showLeaves && (
                <Line
                  type="monotone"
                  dataKey="leaves"
                  stroke="#EF4444"
                  strokeWidth={3}
                />
              )}
              {showJournal && (
                <Line
                  type="monotone"
                  dataKey="journal"
                  stroke="#22C55E"
                  strokeWidth={3}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DailyJournalChart;
