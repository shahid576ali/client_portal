
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const AllTasks = () => {
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
    {
        id: "TSK-7482",
        date: "2023/04/10",
        name: "Responsiveness",
        status: "Ongoing",
        deadline: "2023/04/15",
        assignedBy: "Team Member",
    },
      {
        id: "TSK-7483",
        date: "2023/04/23",
        name: "React router setup",
        status: "Completed",
        deadline: "2023/04/27",
        assignedBy: "Self",
      },
      {
        id: "TSK-7484",
        date: "2023/03/25",
        name: "Redux setup",
        status: "Ongoing",
        deadline: "2023/03/30",
        assignedBy: "Team Leader",
      },
  ];

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || task.status.toLowerCase() === filter)
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between bg-gray-100 p-4 overflow-auto">
      {/* Task Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full overflow-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Tasks Allotted to Me</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <button className="bg-[#2f9ce4] text-white px-6 py-2 rounded w-full md:w-auto">
            Add Task
          </button>
          <input
            type="text"
            placeholder="Search Tasks..."
            className="border px-3 py-2 rounded w-full md:w-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded cursor-pointer ${
              filter === "all" ? "bg-[#2f9ce4] text-white" : "bg-gray-300"
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-4 py-2 rounded cursor-pointer ${
              filter === "ongoing" ? "bg-[#B4AF26] text-white" : "bg-gray-300"
            }`}
          >
            Ongoing Tasks
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded cursor-pointer ${
              filter === "completed" ? "bg-[#56C16B] text-white" : "bg-gray-300"
            }`}
          >
            Completed Tasks
          </button>
        </div>
        <div className="overflow-auto max-h-[70vh]">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="sticky top-0 bg-gray-200">
              <tr className="text-gray-700">
                <th className="px-4 py-2 text-left">Task ID</th>
                <th className="px-4 py-2 text-left">Task Date</th>
                <th className="px-4 py-2 text-left">Task Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
                <th className="px-4 py-2 text-left">Deadline</th>
                <th className="px-4 py-2 text-left">Assigned By</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="px-4 py-2">{task.id}</td>
                  <td className="px-4 py-2">{task.date}</td>
                  <td className="px-4 py-2 text-blue-500 cursor-pointer">{task.name}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        task.status === "Ongoing"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                          : "bg-green-100 text-green-800 border border-green-400"
                      }`}
                    >
                      {task.status === "Ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <FaEye className="text-green-500 cursor-pointer text-lg" />
                      <FaEdit className="text-blue-500 cursor-pointer text-lg" />
                      <FaTrash className="text-red-500 cursor-pointer text-lg" />
                    </div>
                  </td>
                  <td className="px-4 py-2">{task.deadline}</td>
                  <td className="px-4 py-2">{task.assignedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;