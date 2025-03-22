import { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, ArrowUpIcon, ClockIcon, HashtagIcon, CalendarIcon } from '@heroicons/react/24/outline';
import StatusBadge from './StatusBadge';

// Create a context for managing reviews
export const ReviewContext = createContext();

const INITIAL_DATA = [
  { id: '100001', week: '2025-02-27 to 2025-03-05', status: 'REJECTED', remarks: 'Focus on metrics and KPIs', stamp: '2025-03-06 18:39:31' },
  { id: '100002', week: '2025-02-20 to 2025-02-26', status: 'APPROVED', remarks: 'Great progress on project milestones', stamp: '2025-02-27 22:43:40' },
  { id: '100003', week: '2025-02-13 to 2025-02-19', status: 'PENDING', remarks: 'Under review by team lead', stamp: '2025-02-20 11:29:38' },
  { id: '100004', week: '2025-02-06 to 2025-02-12', status: 'APPROVED', remarks: 'Met all deadlines efficiently', stamp: '2025-02-13 10:45:22' },
  { id: '100005', week: '2025-01-30 to 2025-02-05', status: 'PENDING', remarks: 'Waiting for final client feedback', stamp: '2025-02-06 08:20:11' },
  { id: '100006', week: '2025-01-23 to 2025-01-29', status: 'REJECTED', remarks: 'Missing key deliverables', stamp: '2025-01-30 14:15:43' },
  { id: '100007', week: '2025-01-16 to 2025-01-22', status: 'APPROVED', remarks: 'Excellent performance and teamwork', stamp: '2025-01-23 12:35:29' },
  { id: '100008', week: '2025-01-09 to 2025-01-15', status: 'PENDING', remarks: 'Additional data needed for analysis', stamp: '2025-01-16 09:42:17' },
  { id: '100009', week: '2025-01-02 to 2025-01-08', status: 'REJECTED', remarks: 'Report formatting issues', stamp: '2025-01-09 16:18:55' },
  { id: '100010', week: '2024-12-26 to 2025-01-01', status: 'APPROVED', remarks: 'Achieved all key targets', stamp: '2025-01-02 11:59:34' },
  { id: '100011', week: '2024-12-19 to 2024-12-25', status: 'PENDING', remarks: 'Pending internal review', stamp: '2024-12-26 14:33:21' },
  { id: '100012', week: '2024-12-12 to 2024-12-18', status: 'REJECTED', remarks: 'Lack of supporting documentation', stamp: '2024-12-19 17:21:47' },
  { id: '100013', week: '2024-12-05 to 2024-12-11', status: 'APPROVED', remarks: 'Great use of data visualization', stamp: '2024-12-12 08:44:03' },
  { id: '100014', week: '2024-11-28 to 2024-12-04', status: 'PENDING', remarks: 'Revisions requested by management', stamp: '2024-12-05 10:15:39' },
  { id: '100015', week: '2024-11-21 to 2024-11-27', status: 'APPROVED', remarks: 'Strong team collaboration noted', stamp: '2024-11-28 13:27:56' }
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

function WeeklyReviewList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { reviews } = useContext(ReviewContext);
  const [filteredData, setFilteredData] = useState(reviews);
  const [filterStatus, setFilterStatus] = useState("All");

  // for addding the pagination means when we click on the next button then next page will be opened
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change this as needed

    // Calculate the paginated data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    // logic for handling the pagination
      const handleNextPage = () => {
          if (indexOfLastItem < filteredData.length) {
              setCurrentPage((prevPage) => prevPage + 1);
          }
      };
      
      const handlePreviousPage = () => {
          if (currentPage > 1) {
              setCurrentPage((prevPage) => prevPage - 1);
          }
      };
      

  // logic for handling the filtering when searching in the search bar
//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (!term.trim()) {
//         setFilteredData(reviews); // Reset to all reviews when search is cleared
//         return;
//     }

//     const filtered = reviews.filter(review => 
//       review.status && review.status.toLowerCase().includes(term)
//     );

//     setFilteredData(filtered);
// };
  
  //for search bar
  const handleSearch2 = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    let filtered = reviews.filter(review =>
        (filterStatus === "All" || review.status.toLowerCase() === filterStatus.toLowerCase()) &&
        (
            review.id.toLowerCase().includes(term) ||  // Search by ID
            review.week.toLowerCase().includes(term) ||
            review.remarks.toLowerCase().includes(term)
        )
    );

    setFilteredData(filtered);
};

//for approve,reject,pending button 
const handleFilterChange = (status) => {
  setFilterStatus(status);

  const filtered = reviews.filter(review =>
      status === "All" || review.status.toLowerCase() === status.toLowerCase()
  );

  setFilteredData(filtered);
};


  return (
    <div className="max-w-7xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6096BA] to-[#4E7A9A] bg-clip-text text-transparent">
        Weekly Reviews
      </h1>

        <button
          onClick={() => navigate('/upload')}
          className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-[#6096BA] text-white rounded-lg hover:bg-[#4E7A9A] focus:outline-none focus:ring-2 focus:ring-[#4E7A9A] focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg transform hover:-translate-y-0.5"
        >
        Upload Weekly Review
        </button>

      </div>
      

      {/* whole container */}
      <div class="bg-[#f7f8fa] px-10 py-6 ">
           

        <div className="mb-2 flex items-center justify-end space-x-2">
          <label className="text-gray-700 text-sm font-semibold">Search:</label>
            <div className="relative w-60 sm:w-48">
             <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch2}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-700 text-sm"
             />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>


      {/* buttons  */}
            <div className="flex justify-end">
              <button 
                  onClick={() => handleFilterChange("Approved")}
                  className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
                      filterStatus === "Approved" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
                  }`}
              >
                  Approved
              </button>
              <button 
                  onClick={() => handleFilterChange("Pending")}
                  className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
                      filterStatus === "Pending" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
                  }`}
              >
                  Pending
              </button>
              <button 
                  onClick={() => handleFilterChange("Rejected")}
                  className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
                      filterStatus === "Rejected" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
                  }`}
              >
                  Rejected
              </button>
              <button 
                  onClick={() => handleFilterChange("All")}
                  className={`border px-5 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
                      filterStatus === "All" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
                  }`}
              >
                  All
              </button>
          </div>



      <div className="bg-white shadow-lg overflow-hidden border border-indigo-50">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-indigo-100">
          <thead className="bg-[#e9ecef] from-indigo-600 to-purple-600">
              <tr>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    
                    <span className="text-sm font-bold text-black tracking-wider">ID</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    
                    <span className="text-sm font-bold text-black tracking-wider">Week</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    
                    <span className="text-sm font-bold text-black tracking-wider">Status</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <span className="text-sm font-bold text-black tracking-wider">Remarks</span>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center space-x-2">
                    
                    <span className="text-sm font-bold text-black tracking-wider">Stamp</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <span className="text-sm font-bold text-black tracking-wider">Actions</span>
                </th>
              </tr>
            </thead>





            <tbody className="bg-[#f7f8fa] divide-y divide-indigo-50">
              {paginatedData.map((review) => (
                <tr key={review.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">#{review.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.week}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={review.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">{review.remarks}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.stamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 font-medium transition-colors duration-150"
                      onClick={() => console.log('Edit review:', review.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* buttons */}
      
      <div className="flex justify-end space-x-2 mt-4">
          <button 
              onClick={handlePreviousPage} 
              disabled={currentPage === 1} 
              className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50"
          >
              Previous
          </button>
          <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md">
              {currentPage}
          </span>
          <button 
              onClick={handleNextPage} 
              disabled={indexOfLastItem >= filteredData.length} 
              className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50"
          >
              Next
          </button>
      </div>


      </div>




    </div>
  );
}

export default WeeklyReviewList;