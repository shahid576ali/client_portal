import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const UploadJournal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 6; // Change this to adjust entries per page

  const tasks = [
      { "id": "JRN-7479", "date": "2025/03/19", "status": "In Process", "Learnings": "Implemented client portal UI, integrated authentication", "Remarks": "Pending final testing" },
      { "id": "JRN-7480", "date": "2024/03/18", "status": "Approved", "Learnings": "Updated dashboard layout, optimized responsiveness", "Remarks": "Approved by manager" },
      { "id": "JRN-7475", "date": "2025/03/17", "status": "Approved", "Learnings": "Built admin dashboard, added role-based access", "Remarks": "Well-structured layout" },
      { "id": "JRN-7483", "date": "2025/03/16", "status": "Disapproved", "Learnings": "Fixed UI inconsistencies, pagination issues", "Remarks": "Needs better performance optimization" },
      { "id": "JRN-7484", "date": "2025/03/15", "status": "Approved", "Learnings": "Optimized component rendering, improved load time", "Remarks": "Significant speed improvement" },
      { "id": "JRN-7486", "date": "2025/03/14", "status": "Approved", "Learnings": "Developed new features for journal upload", "Remarks": "Feature set completed successfully" },
      { "id": "JRN-7489", "date": "2025/03/13", "status": "Approved", "Learnings": "Enhanced UI/UX for better user experience", "Remarks": "Smooth and interactive design" },
      { "id": "JRN-7490", "date": "2025/03/12", "status": "Approved", "Learnings": "Implemented automated testing for upload feature", "Remarks": "Stable performance under test cases" },
      { "id": "JRN-7491", "date": "2025/03/11", "status": "In Process", "Learnings": "Bug fixing in mobile journal upload feature", "Remarks": "Some issues pending resolution" },
      { "id": "JRN-7492", "date": "2025/03/10", "status": "Approved", "Learnings": "Optimized database queries for journal storage", "Remarks": "Improved data retrieval speed" },
      { "id": "JRN-7493", "date": "2025/03/09", "status": "Disapproved", "Learnings": "Attempted cloud deployment for journal app", "Remarks": "Issues in server configuration" },
      { "id": "JRN-7494", "date": "2025/03/08", "status": "Approved", "Learnings": "Reviewed code for security vulnerabilities", "Remarks": "Passed all security checks" },
      { "id": "JRN-7495", "date": "2025/03/07", "status": "Disapproved", "Learnings": "User testing identified multiple UI bugs", "Remarks": "Needs further refinement" },
      { "id": "JRN-7496", "date": "2025/03/06", "status": "Approved", "Learnings": "Set up data backup for journal entries", "Remarks": "Ensured data safety" },
      { "id": "JRN-7497", "date": "2025/03/05", "status": "In Process", "Learnings": "Enhancing features based on feedback", "Remarks": "Pending final review" },
      { "id": "JRN-7498", "date": "2025/03/04", "status": "Approved", "Learnings": "Applied security patches to journal system", "Remarks": "System secured from threats" },
      { "id": "JRN-7499", "date": "2025/03/03", "status": "Disapproved", "Learnings": "Tried SEO optimizations for journal entries", "Remarks": "Needs better implementation" },
      { "id": "JRN-7500", "date": "2025/03/02", "status": "Approved", "Learnings": "Automated DevOps process for deployment", "Remarks": "Smooth deployment pipeline" },
      { "id": "JRN-7501", "date": "2025/03/01", "status": "In Process", "Learnings": "Analyzing user feedback on journal UI", "Remarks": "Making adjustments as needed" },
      { "id": "JRN-7502", "date": "2025/03/28", "status": "Approved", "Learnings": "Implemented database indexing for faster retrieval", "Remarks": "Significant query speedup" },
  
  
  ];

  const filteredTasks = tasks.filter(
    (task) =>
      task.status.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || task.status === filter)
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredTasks.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, startIndex + entriesPerPage);

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 w-full">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Journal Entries</h2>
        

        {/* Search & Upload Section */}
        <div className="flex flex-col md:flex-row md:justify-end items-end gap-4 mb-4">
  <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer">
    Upload Journal
  </button>
</div>


        {/* Filter Buttons */}
        <div className="flex gap-4 mb-4 w-1/3 overflow-x-auto ">
          {["all", "In Process", "Approved", "Disapproved"].map((status) => (
            <button
              key={status}
              onClick={() => {
                setFilter(status);
                setCurrentPage(1); // Reset to first page on filter change
              }}
              className={`px-3 py-1 rounded cursor-pointer ${
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
           </div>
      
        {/* Table */}
        <div className="overflow-x-auto">
  <table className="w-1/1 table-fixed border-collapse border border-gray-200 text-sm md:text-base">
    <thead>
      <tr className="bg-gray-100 text-gray-700">
        <th className="px-2 md:px-4 py-2 text-left w-1/6">Journal ID</th>
        <th className="px-2 md:px-4 py-2 text-left w-1/6">DOA</th>
        <th className="px-2 md:px-4 py-2 text-left w-1/6">Status</th>
        <th className="px-2 md:px-4 py-2 text-left w-1/6">Actions</th>
        <th className="px-2 md:px-4 py-2 text-left w-1/6">Learnings</th>
        <th className="px-2 md:px-4 py-2 text-left w-1/6">Remarks</th>
      </tr>
    </thead>
    <tbody>
      {paginatedTasks.length > 0 ? (
        paginatedTasks.map((task, index) => (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-2 md:px-4 py-2 w-1/6">{task.id}</td>
            <td className="px-2 md:px-4 py-2 w-1/6">{task.date}</td>
            <td className="px-2 md:px-4 py-2 w-1/6">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  task.status === "In Process"
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                    : task.status === "Approved"
                    ? "bg-green-100 text-green-800 border border-green-400"
                    : "bg-red-200 text-red-800 border border-red-400"
                }`}>
                {task.status}
              </span>
            </td>
            <td className="px-2 md:px-4 py-2 flex gap-2 w-1/6">
  <div className="text-green-500 cursor-pointer text-lg">
    <FaEye />
  </div>
  <div className="text-blue-500 cursor-pointer text-lg">
    <FaEdit />
  </div>
  <div className="text-red-500 cursor-pointer text-lg">
    <FaTrash />
  </div>
</td>

            <td className="px-2 md:px-4 py-2 w-1/6">{task.Learnings}</td>
            <td className="px-2 md:px-4 py-2 w-1/6">{task.Remarks}</td>
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
        {/* Pagination Controls */}
<div className="flex justify-between items-center mt-4">
  <span className="text-gray-600 text-sm md:text-base">
    Page {currentPage} of {totalPages}
  </span>
  <div className="flex gap-4">
    <button 
      onClick={() => setCurrentPage(currentPage - 1)} 
      disabled={currentPage === 1} 
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <button 
      onClick={() => setCurrentPage(currentPage + 1)} 
      disabled={currentPage === totalPages} 
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default UploadJournal;
