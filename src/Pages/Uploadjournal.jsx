import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const UploadJournal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6;

  const tasks = [
    { id: "JRN-7479", date: "2025/03/19", status: "In Process", Learnings: "Implemented client portal UI, integrated authentication", Remarks: "Pending final testing" },
    { id: "JRN-7480", date: "2024/03/18", status: "Approved", Learnings: "Updated dashboard layout, optimized responsiveness", Remarks: "Approved by manager" },
    { id: "JRN-7475", date: "2025/03/17", status: "Approved", Learnings: "Built admin dashboard, added role-based access", Remarks: "Well-structured layout" },
    { id: "JRN-7479", date: "2025/03/19", status: "In Process", Learnings: "Implemented client portal UI, integrated authentication", Remarks: "Pending final testing" },
    { id: "JRN-7480", date: "2024/03/18", status: "Approved", Learnings: "Updated dashboard layout, optimized responsiveness", Remarks: "Approved by manager" },
    { id: "JRN-7475", date: "2025/03/17", status: "Approved", Learnings: "Built admin dashboard, added role-based access", Remarks: "Well-structured layout" },
    { id: "JRN-7479", date: "2025/03/19", status: "In Process", Learnings: "Implemented client portal UI, integrated authentication", Remarks: "Pending final testing" },
    { id: "JRN-7480", date: "2024/03/18", status: "Approved", Learnings: "Updated dashboard layout, optimized responsiveness", Remarks: "Approved by manager" },
    { id: "JRN-7475", date: "2025/03/17", status: "Approved", Learnings: "Built admin dashboard, added role-based access", Remarks: "Well-structured layout" },
  ];

  const filteredTasks = tasks.filter(
    (task) => task.status.toLowerCase().includes(searchTerm.toLowerCase()) && (filter === "all" || task.status === filter)
  );

  const totalPages = Math.ceil(filteredTasks.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, startIndex + entriesPerPage);

  return (
    <div className="p-4 flex flex-col gap-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4 text-left">Journal Entries</h2>

        {/* Search & Upload Section */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-4">
          {/* <input
            type="text"
            placeholder="Search Journals..."
            className="border px-3 py-1 rounded w-full md:w-1/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
           <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer">Upload Journal</button>
           <Link to="/dailyjournal"></Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 w-1/1">
          {["all", "In Process", "Approved", "Disapproved"].map((status) => (
            <button
              key={status}
              onClick={() => {
                setFilter(status);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded cursor-pointer text-sm md:text-base ${
                filter === status
                  ? status === "In Process"
                    ? "bg-yellow-500 text-white"
                    : status === "Approved"
                    ? "bg-green-500 text-white"
                    : status === "Disapproved"
                    ? "bg-red-500 text-white"
                    : "bg-[#2f9ce4] text-white"
                  : "bg-gray-300"
              }`}
            >
              {status === "all" ? "All Journals" : status}
            </button>
          ))}
            <div className="ml-auto">
    <input
      type="text"
      placeholder="Search Journals..."
      className="border px-3 py-1 rounded w-full md:w-full"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-xs md:text-sm">
                <th className="px-2 py-2">Journal ID</th>
                <th className="px-2 py-2">DOA</th>
                <th className="px-2 py-2">Status</th>
                <th className="px-2 py-2">Actions</th>
                <th className="px-2 py-2 hidden md:table-cell">Learnings</th>
                <th className="px-2 py-2 hidden md:table-cell">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTasks.length > 0 ? (
                paginatedTasks.map((task, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 text-xs md:text-sm">
                    <td className="px-2 py-2 text-center">{task.id}</td>
                    <td className="px-2 py-2 text-center">{task.date}</td>
                    <td className="px-2 py-2 text-center">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === "In Process"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                          : task.status === "Approved"
                          ? "bg-green-100 text-green-800 border border-green-400"
                          : "bg-red-200 text-red-800 border border-red-400"
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-2 py-2 flex justify-center gap-2">
                      <FaEye className="text-green-500 cursor-pointer text-lg" />
                      <FaEdit className="text-blue-500 cursor-pointer text-lg" />
                      <FaTrash className="text-red-500 cursor-pointer text-lg" />
                    </td>
                    <td className="px-2 py-2 hidden md:table-cell">{task.Learnings}</td>
                    <td className="px-2 py-2 hidden md:table-cell">{task.Remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">No journals found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm md:text-base">Page {currentPage} of {totalPages}</span>
          <div className="flex gap-4">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadJournal;
