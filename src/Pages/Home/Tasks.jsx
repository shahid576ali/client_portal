import React, { useState, useEffect } from "react";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import tasksData from "./tasksData.json";

const TaskComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasksData);
  const navigate = useNavigate();
  const location = useLocation();
  const tasksPerPage = 5;

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      const searchedTasks = tasksData.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTasks(searchedTasks.length > 0 ? searchedTasks : []);
      setCurrentPage(1);
    }
  };

  const getPageFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get("page")) || 1;
  };
  const [currentPage, setCurrentPage] = useState(getPageFromUrl());

  useEffect(() => {
    navigate(`?page=${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

  useEffect(() => {
    if (filter !== "all") {
      setFilteredTasks(
        tasksData.filter((task) => task.status.toLowerCase() === filter)
      );
      setCurrentPage(1);
    } else {
      setFilteredTasks(tasksData);
    }
  }, [filter]);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 w-full">
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
            onKeyDown={handleSearch}
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
              {paginatedTasks.length > 0 ? (
                paginatedTasks.map((task, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{task.id}</td>
                    <td className="px-4 py-2">{task.date}</td>
                    <td className="px-4 py-2 cursor-pointer">{task.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          task.status === "Ongoing"
                            ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                            : "bg-green-100 text-green-800 border border-green-400"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-2">
                      <FaEye className="text-green-500 cursor-pointer text-lg" />
                      <FaEdit className="text-blue-500 cursor-pointer text-lg" />
                      <FaTrash className="text-red-500 cursor-pointer text-lg" />
                    </td>
                    <td className="px-4 py-2">{task.deadline}</td>
                    <td className="px-4 py-2">{task.assignedBy}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-4 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-[#2f9ce4] text-white px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <FaChevronLeft /> Prev
          </button>
          <span className="font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-[#2f9ce4] text-white px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        {[
          { title: "Total Tasks", count: filteredTasks.length, icon: "📊" },
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
