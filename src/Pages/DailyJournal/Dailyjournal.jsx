import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import StatusBadge from './StatusBadge';

export const ReviewContext = createContext();

const INITIAL_DATA = [
  { id: '100001', week: '2025-02-27 to 2025-03-05', status: 'REJECTED', remarks: 'Focus on metrics and KPIs', stamp: '2025-03-06 18:39:31' },
  { id: '100002', week: '2025-02-20 to 2025-02-26', status: 'APPROVED', remarks: 'Great progress on project milestones', stamp: '2025-02-27 22:43:40' },
  { id: '100003', week: '2025-02-13 to 2025-02-19', status: 'PENDING', remarks: 'Under review by team lead', stamp: '2025-02-20 11:29:38' },
];

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(INITIAL_DATA);

  const addReview = (newReview) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

function Dailyjournal() {
  const navigate = useNavigate();
  const { reviews } = useContext(ReviewContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(reviews);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    setFilteredData(reviews);
  }, [reviews]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < filteredData.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = reviews.filter(review =>
      (filterStatus === "All" || review.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (
        review.id.toLowerCase().includes(term) ||
        review.week.toLowerCase().includes(term) ||
        review.remarks.toLowerCase().includes(term)
      )
    );

    setFilteredData(filtered);
    setCurrentPage(1); // Reset pagination when searching
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);

    const filtered = reviews.filter(review =>
      status === "All" || review.status.toLowerCase() === status.toLowerCase()
    );

    setFilteredData(filtered);
    setCurrentPage(1); // Reset pagination when filtering
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6096BA] to-[#4E7A9A] bg-clip-text text-transparent">
          Weekly Reviews
        </h1>
        <button
          onClick={() => navigate('/upload')}
          className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-[#6096BA] text-white rounded-lg hover:bg-[#4E7A9A]"
        >
          Upload Weekly Review
        </button>
      </div>

      <div className="bg-[#f7f8fa] px-10 py-6">
        <div className="mb-2 flex items-center justify-end space-x-2">
          <label className="text-gray-700 text-sm font-semibold">Search:</label>
          <div className="relative w-60 sm:w-48">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700 text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="flex justify-end">
          {["Approved", "Pending", "Rejected", "All"].map(status => (
            <button
              key={status}
              onClick={() => handleFilterChange(status)}
              className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold transition-all ${
                filterStatus === status ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="bg-white shadow-lg overflow-hidden border border-indigo-50">
          <table className="min-w-full divide-y divide-indigo-100">
            <thead className="bg-[#e9ecef]">
              <tr>
                {["ID", "Week", "Status", "Remarks", "Stamp", "Actions"].map(header => (
                  <th key={header} className="px-6 py-4 text-left text-sm font-bold text-black">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((review) => (
                <tr key={review.id} className="hover:bg-indigo-50 transition-colors">
                  <td className="px-6 py-4">#{review.id}</td>
                  <td className="px-6 py-4">{review.week}</td>
                  <td className="px-6 py-4"><StatusBadge status={review.status} /></td>
                  <td className="px-6 py-4">{review.remarks}</td>
                  <td className="px-6 py-4">{review.stamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage} disabled={indexOfLastItem >= filteredData.length}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Dailyjournal;
