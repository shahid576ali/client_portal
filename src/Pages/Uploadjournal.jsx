import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DailyJournal from "./DailyJournal/Dailyjournal";

const UploadJournal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const updateEntriesPerPage = () => {
      const viewportHeight = window.innerHeight;
      const estimatedRows = Math.floor((viewportHeight - 200) / 40);
      setEntriesPerPage(Math.max(5, estimatedRows));
    };
    updateEntriesPerPage();
    window.addEventListener("resize", updateEntriesPerPage);
    return () => window.removeEventListener("resize", updateEntriesPerPage);
  }, []);

  const data = Array.from({ length: 50 }, (_, i) => ({
    id: `JRN - 75${100 + i}`,
    date: `0${(i % 9) + 1}/02/2025`,
    status: i % 3 === 0 ? "disapproved" : "approved",
    report: "N/A",
    learnings: `Learning session ${i + 1}, Communication, Leadership`,
    pendings: "NA",
    rating: Math.floor(Math.random() * 5) + 1,
    leaderRemarks: i % 2 === 0 ? "Excellent" : "Needs Improvement",
  }));

  const filteredData = data.filter((entry) =>
    Object.values(entry).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    ) && (filterStatus ? entry.status === filterStatus : true)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortBy) return 0;
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    if (typeof valueA === "string") {
      return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  });

  const totalPages = Math.ceil(sortedData.length / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sortedData.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="p-4 bg-gray-100 min-h-screen w-full">
      <div className="overflow-auto bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Journal Entries</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-lg text-gray-700 w-full md:w-auto"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("approved")}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition ${filterStatus === "approved" ? "bg-green-700" : "bg-green-500 hover:bg-green-600"}`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilterStatus("disapproved")}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition ${filterStatus === "disapproved" ? "bg-red-700" : "bg-red-500 hover:bg-red-600"}`}
              >
                Disapproved
              </button>
              <button
                onClick={() => setFilterStatus("")}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-black font-semibold"
              >
                Reset
              </button>
            </div>
            <select
              className="border p-2 rounded-lg text-gray-700 w-full md:w-auto"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="date">DOA</option>
              <option value="status">Status</option>
              <option value="rating">Rating</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
            >
              {sortOrder === "asc" ? "↑ Asc" : "↓ Desc"}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#6096BA] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Upload Journal
            </button>
          </div>
        </div>

        <table className="min-w-full text-sm text-gray-800 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#E7ECEF] text-left">
              <th className="border p-3">Journal ID</th>
              <th className="border p-3">DOA</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Report</th>
              <th className="border p-3">Learnings</th>
              <th className="border p-3">Pendings</th>
              <th className="border p-3">Rating</th>
              <th className="border p-3">Leader Remarks</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-100 transition">
                <td className="border p-3 truncate">{entry.id}</td>
                <td className="border p-3">{entry.date}</td>
                <td className="border p-3">
                  <span className={`px-4 py-1 text-white rounded-lg text-sm font-semibold ${entry.status === "approved" ? "bg-green-500" : "bg-red-500"}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="border p-3 truncate">{entry.report}</td>
                <td className="border p-3 truncate">{entry.learnings}</td>
                <td className="border p-3">{entry.pendings}</td>
                <td className="border p-3">{entry.rating}</td>
                <td className="border p-3 truncate">{entry.leaderRemarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadJournal;
