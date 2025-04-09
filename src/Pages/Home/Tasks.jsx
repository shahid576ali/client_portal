import React, { useState, useEffect, useRef } from "react";
import {
  FaEdit,
  // FaTrash,
  // FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useLocation, useNavigate, Link } from "react-router-dom";
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
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  // Forms states
  const [isContinuous, setIsContinuous] = useState(true);
  const [isRecurring, setIsRecurring] = useState(false);
  const [deadline, setDeadline] = useState("");

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

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      isContinuous,
      isRecurring,
      deadline: isContinuous ? null : deadline,
      recurringDays: isRecurring ? selectedDays : [],
    };
    console.log("Form Data Submitted:", formData);
    setShowModal(false)
  };

  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
  ];

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
          {/* Top Row: Add Task & Dropdown (Side by Side in Desktop, Row in Mobile) */}
          <div className="flex w-full md:w-auto justify-between items-center gap-4">
            {/* Add Task Button */}
            {/* <Link to='/add-task'> */}
            <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer shadow-md hover:bg-[#1c85c4] transition-all whitespace-nowrap" onClick={() => setShowModal(true)}>
              Add Task
            </button>
            {/* </Link> */}

            {/* Dropdown Button */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-all w-full md:w-36 justify-between hover:cursor-pointer"
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {options.find((opt) => opt.value === filter)?.label || "Select Task"}
                </span>
                <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-full md:w-36 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-10">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`flex items-center w-full px-4 py-3 text-left text-gray-700 cursor-pointer transition-all ${filter === option.value ? `${option.color} text-white` : "hover:text-white"} ${option.hover}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Input (Always Below in Mobile, Inline in Desktop) */}
          <div className="w-full">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Tasks (ctrl + /)"
              className="border px-4 py-2 rounded w-full md:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2f9ce4] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
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

                    {/* <td className="px-4 py-2 flex gap-4 relative">
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
                    </td> */}

                    <td className="px-4 py-2 flex justify-center items-center gap-4 relative">
                      <div className="relative group flex items-center">
                        <FaEdit className="text-[#6096ba] cursor-pointer text-lg" onClick={() => setEditTask(task)} />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                          Edit
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

        {/* Pagination */}
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

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
              Task Creation Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Task Name */}
              <div>
                <label className="block font-medium mb-1">Task Name:</label>
                <input
                  type="text"
                  placeholder="Task Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Task Type */}
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isContinuous}
                    onChange={() => setIsContinuous(!isContinuous)}
                    className="accent-blue-600"
                  />
                  <span>Continuous</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                    className="accent-blue-600"
                  />
                  <span>Recurring</span>
                </label>
              </div>

              {/* Conditional: Task Deadline */}
              {!isContinuous && (
                <div>
                  <label className="block font-medium mb-1">Task Deadline:</label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* Conditional: Recurring Days */}
              {isRecurring && (
                <div>
                  <label className="block font-medium mb-2">
                    Select Recurring Days:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {daysOfWeek.map((day) => (
                      <label key={day} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedDays.includes(day)}
                          onChange={() => handleDayToggle(day)}
                          className="accent-blue-600"
                        />
                        <span>{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Priority */}
              <div>
                <label className="block font-medium mb-1">Priority:</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Priority</option>
                  <option value="High">Urgent within 0–2 days</option>
                  <option value="Medium">Medium urgency within 3–7 days</option>
                  <option value="Low">Not urgent over 7 days</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#d9534f] text-white px-3 py-[6px] rounded hover:bg-[#C9302C] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#337ab7] text-white px-3 py-[6px] rounded hover:bg-[#286090] cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editTask && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
              Task Edit Form
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // ✅ Add your update logic here (API call etc.)
                console.log("Updated Task:", editTask);
                setEditTask(null);
              }}
              className="space-y-5"
            >
              {/* Task Assign Date */}
              <div>
                <label className="block font-semibold mb-1">Task Assign Date:</label>
                <input
                  type="text"
                  value={editTask.date || ""}
                  disabled
                  className="w-full border rounded px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Task Description */}
              <div>
                <label className="block font-semibold mb-1">Task Name:</label>
                <input
                  type="text"
                  value={editTask.name || ""}
                  onChange={(e) =>
                    setEditTask((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full border rounded px-4 py-2"
                />
              </div>


              {/* Task Type */}
              <div>
                <label className="block font-semibold mb-1">Task Type:</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="taskType"
                      value="Continuous"
                      checked={editTask.type === "Continuous"}
                      onChange={(e) =>
                        setEditTask((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                    />
                    Continuous
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="taskType"
                      value="Recurring"
                      checked={editTask.type === "Recurring"}
                      onChange={(e) =>
                        setEditTask((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                    />
                    Recurring
                  </label>
                </div>
              </div>

              {/* Task Deadline */}
              <div>
                <label className="block font-semibold mb-1">Task Deadline:</label>
                <input
                  type="text"
                  value={editTask.deadline || ""}
                  disabled
                  className="w-full border rounded px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block font-semibold mb-1">Priority:</label>
                <select
                  value={editTask.priority || ""}
                  onChange={(e) =>
                    setEditTask((prev) => ({
                      ...prev,
                      priority: e.target.value,
                    }))
                  }
                  className="w-full border rounded px-4 py-2"
                >
                  <option value="Urgent within 0-2 days">Urgent within 0-2 days</option>
                  <option value="High priority (3-5 days)">High priority (3-5 days)</option>
                  <option value="Normal priority (6+ days)">
                    Normal priority (6+ days)
                  </option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#d9534f] text-white px-3 py-[6px] rounded hover:bg-[#C9302C] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#337ab7] text-white px-3 py-[6px] rounded hover:bg-[#286090] cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default TaskComponent;
