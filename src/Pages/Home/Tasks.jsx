import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const TaskComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const tasks = [
    {
      id: "TSK-7479",
      date: "2025/03/06",
      name: "Client Portal",
      status: "Ongoing",
      deadline: "2025/04/05",
      assignedBy: "Self",
    },
    {
      id: "TSK-7480",
      date: "2024/03/07",
      name: "Dashboard Update",
      status: "Completed",
      deadline: "2024/03/25",
      assignedBy: "Manager",
    },
    {
      id: "TSK-7475",
      date: "2025/03/04",
      name: "Admin Dashboard",
      status: "Completed",
      deadline: "2025/03/17",
      assignedBy: "Self",
    },
  ];

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || task.status.toLowerCase() === filter)
  );

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 w-full">
      {/* Task Table */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-2/3 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Tasks Allotted to Me</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer">
            Add Task
          </button>
          <input
            type="text"
            placeholder="Search Tasks..."
            className="border px-2 py-1 rounded w-full md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mb-4 overflow-x-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "all" ? "bg-[#2f9ce4] text-white" : "bg-gray-300"
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "ongoing" ? "bg-[#B4AF26] text-white" : "bg-gray-300"
            }`}
          >
            Ongoing Tasks
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded cursor-pointer ${
              filter === "completed" ? "bg-[#56C16B] text-white" : "bg-gray-300"
            }`}
          >
            Completed Tasks
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-2 md:px-4 py-2 text-left">Task ID</th>
                <th className="px-2 md:px-4 py-2 text-left">Task Date</th>
                <th className="px-2 md:px-4 py-2 text-left">Task Name</th>
                <th className="px-2 md:px-4 py-2 text-left">Status</th>
                <th className="px-2 md:px-4 py-2 text-left">Actions</th>
                <th className="px-2 md:px-4 py-2 text-left">Deadline</th>
                <th className="px-2 md:px-4 py-2 text-left">Assigned By</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-2 md:px-4 py-2">{task.id}</td>
                  <td className="px-2 md:px-4 py-2">{task.date}</td>
                  <td className="px-2 md:px-4 py-2 text-blue-500 cursor-pointer">
                    {task.name}
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        task.status === "Ongoing"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                          : "bg-green-100 text-green-800 border border-green-400"
                      }`}
                    >
                      {task.status === "Ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaEye className="text-green-500 cursor-pointer text-lg" />
                      <FaEdit className="text-blue-500 cursor-pointer text-lg" />
                      <FaTrash className="text-red-500 cursor-pointer text-lg" />
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2">{task.deadline}</td>
                  <td className="px-2 md:px-4 py-2">{task.assignedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        {[
          { title: "Total Tasks", count: 2, icon: "📊" },
          { title: "Task Deadlines", count: "Today", icon: "📅" },
          { title: "Next Day Tasks", count: 1, icon: "⏭" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#6096BA] text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <span className="text-3xl">{item.icon}</span>
            <p className="text-lg mt-2">{item.title}</p>
            <p className="text-xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
