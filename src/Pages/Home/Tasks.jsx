import React, { useState, useEffect, useRef } from "react";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import tasksData from "./tasksData.json";
import { FaTasks, FaCalendarAlt, FaHourglassHalf, FaChevronDown } from "react-icons/fa";

const TaskComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasksData);
  const navigate = useNavigate();
  const location = useLocation();
  const tasksPerPage = 5;
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const today = new Date().toLocaleDateString("en-GB");
  const todayDeadlines = tasksData.filter(
    (task) => task.deadline === today
  ).length;

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

  const options = [
    { label: "All Tasks", value: "all", color: "bg-[#2f9ce4]", hover: "hover:bg-[#2f9ce4]" },
    { label: "Ongoing Tasks", value: "ongoing", color: "bg-[#CFC800]", hover: "hover:bg-[#CFC800]" },
    { label: "Completed Tasks", value: "completed", color: "bg-[#56C16B]", hover: "hover:bg-[#56C16B]" },
  ];

  const handleSelect = (option) => {
    setFilter(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleShortcut = (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault(); // Prevent default browser behavior
        searchRef.current?.focus(); // Focus on search input
      }
    };

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-2/3 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Tasks Allotted to Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Add Task Button */}
          <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer shadow-md hover:bg-[#1c85c4] transition-all">
            Add Task
          </button>

          {/* Search Input & Dropdown Container */}
          <div className="flex w-full md:w-auto items-center gap-4 relative">
            {/* Search Input */}
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Tasks (ctrl + /)"
              className="border px-4 py-2 rounded w-full md:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9ce4] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all w-36 justify-between hover:cursor-pointer"
              >
                <span className="text-sm font-medium">
                  {options.find((opt) => opt.value === filter)?.label || "Select Task"}
                </span>
                <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-10">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`flex items-center w-full px-4 py-3 text-left text-gray-700 cursor-pointer transition-all ${filter === option.value ? `${option.color} text-white` : "hover:text-white"
                        } ${option.hover}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
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
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${task.status === "Ongoing"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                          : "bg-green-100 text-green-800 border border-green-400"
                          }`}
                      >
                        {task.status}
                      </span>
                    </td>

                    <td className="px-4 py-2 flex gap-4 relative">
                      <div className="relative group flex items-center">
                        <FaEye className="text-[#2a8252] cursor-pointer text-lg" />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                          View
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>

                      <div className="relative group flex items-center">
                        <FaEdit className="text-[#6096ba] cursor-pointer text-lg" />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                          Edit
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>

                      <div className="relative group flex items-center">
                        <FaTrash className="text-[#EA6C6C] cursor-pointer text-lg" />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                          Delete
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
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
            className="bg-[#d1d5dc] text-black px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <FaChevronLeft /> Prev
          </button>
          <span className="font-semibold text-lg text-[#676767]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-[#d1d5dc] text-black px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        {[
          {
            title: "Total Tasks",
            count: filteredTasks.length,
            icon: <FaTasks size={30} />,
          },
          {
            title: "Task Deadlines",
            count:
              todayDeadlines > 0 ? todayDeadlines : "Not any task deadline",
            icon: <FaCalendarAlt size={30} />,
          },
          {
            title: "Next Day Tasks",
            count: tasksData.filter(
              (task) => task.status.toLowerCase() === "ongoing"
            ).length,
            icon: <FaHourglassHalf size={30} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#6096BA] text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <span className="text-3xl">{item.icon}</span>
            <p className="text-lg mt-2">{item.title}</p>
            <p className="text-lg font-bold">{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
