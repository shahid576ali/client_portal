import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import StatusBadge from './StatusBadge';

function WeeklyReviewList({ reviews, addReview }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(reviews);
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("");

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle next page
  const handleNextPage = () => {
    if (indexOfLastItem < filteredData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Handle search
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    let filtered = reviews.filter(review =>
      (filterStatus === "All" || review.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (
        review.id.toLowerCase().includes(term) ||
        review.week.toLowerCase().includes(term) ||
        review.remarks.toLowerCase().includes(term)
      )
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Handle filter change
  const handleFilterChange = (status) => {
    setFilterStatus(status);

    const filtered = reviews.filter(review =>
      status === "All" || review.status.toLowerCase() === status.toLowerCase()
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);

    let sortedData = [...filteredData];

    switch (criteria) {
      case "ID":
        sortedData.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case "Week":
        sortedData.sort((a, b) => a.week.localeCompare(b.week));
        break;
      case "Stamp":
        sortedData.sort((a, b) => a.stamp.localeCompare(b.stamp));
        break;
      case "Status":
        sortedData.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }

    setFilteredData(sortedData);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between mt-8 mb-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6096BA] to-[#4E7A9A] bg-clip-text text-transparent">
          Weekly Reviews
        </h1>

        <button
          onClick={() => navigate('/weeklyreview/upload')}
          className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-[#6096BA] text-white rounded-lg hover:bg-[#4E7A9A] focus:outline-none focus:ring-2 focus:ring-[#4E7A9A] focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg transform hover:-translate-y-0.5"
        >
          Upload Weekly Review
        </button>
      </div>

      {/* form container */}
      <div className="bg-[#f7f8fa] px-10 py-6 ">

        {/* Search bar */}
        <div className="mb-2 flex items-center justify-end space-x-2">
          <label className="text-gray-700 text-sm font-semibold">Search:</label>
          <div className="relative w-60 sm:w-48">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-700 text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>

        {/* Filter buttons */}
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
            Reset
          </button>
          <select 
            className="border px-3 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 bg-[#6096BA] hover:bg-[#3d6a8b] focus:outline-none cursor-pointer"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option className="bg-[#6096BA] cursor-pointer" value="">Sort by</option>
            <option className="bg-[#6096BA] cursor-pointer" value="ID">ID</option>
            <option className="bg-[#6096BA] cursor-pointer" value="Week">Week</option>
            <option className="bg-[#6096BA] cursor-pointer" value="Stamp">Stamp</option>
            <option className="bg-[#6096BA] cursor-pointer" value="Status">Status</option>
          </select>
        </div>

        {/* Table */}
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

        {/* Showing entries text */}
        <div className="text-sm text-[#4E7A9A] font-medium mt-2">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
        </div>

        {/* Pagination buttons */}
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
















































































// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import StatusBadge from './StatusBadge';

// function WeeklyReviewList({ reviews, addReview }) {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(reviews);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortCriteria, setSortCriteria] = useState(""); // Existing dropdown sorting state
//   const [sortKey, setSortKey] = useState(null); // New state for column header sorting
//   const [sortDirection, setSortDirection] = useState('asc'); // New state for column header sorting direction

//   // Pagination logic
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   // Handle dropdown sorting
//   const handleSortChange = (criteria) => {
//     setSortCriteria(criteria);
//     setSortKey(null); // Reset column header sorting when dropdown is used

//     let sortedData = [...filteredData];

//     switch (criteria) {
//       case "ID":
//         sortedData.sort((a, b) => a.id.localeCompare(b.id));
//         break;
//       case "Week":
//         sortedData.sort((a, b) => a.week.localeCompare(b.week));
//         break;
//       case "Stamp":
//         sortedData.sort((a, b) => a.stamp.localeCompare(b.stamp));
//         break;
//       case "Status":
//         sortedData.sort((a, b) => a.status.localeCompare(b.status));
//         break;
//       default:
//         // No sorting, keep the original order
//         break;
//     }

//     setFilteredData(sortedData);
//     setCurrentPage(1); // Reset to the first page after sorting
//   };

//   // Handle column header sorting
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortKey === key && sortDirection === 'asc') {
//       direction = 'desc';
//     }
//     setSortKey(key);
//     setSortDirection(direction);
//     setSortCriteria(""); // Reset dropdown sorting when column header is used
//   };

//   // Sort the data based on column header or dropdown
//   const sortedData = [...filteredData].sort((a, b) => {
//     if (sortKey) {
//       if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
//       if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
//     }
//     return 0; // No sorting if no key is selected
//   });

//   const paginatedData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle next page
//   const handleNextPage = () => {
//     if (indexOfLastItem < filteredData.length) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   // Handle previous page
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Handle search
//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);

//     let filtered = reviews.filter(review =>
//       (filterStatus === "All" || review.status.toLowerCase() === filterStatus.toLowerCase()) &&
//       (
//         review.id.toLowerCase().includes(term) ||
//         review.week.toLowerCase().includes(term) ||
//         review.remarks.toLowerCase().includes(term)
//       )
//     );

//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to the first page after search
//   };

//   // Handle filter change
//   const handleFilterChange = (status) => {
//     setFilterStatus(status);

//     const filtered = reviews.filter(review =>
//       status === "All" || review.status.toLowerCase() === status.toLowerCase()
//     );

//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to the first page after filter change
//   };

//   // Render sorting icons for column headers
//   const renderSortIcon = (key) => {
//     if (sortKey === key) {
//       return sortDirection === 'asc' ? '↑' : '↓';
//     }
//     return '↑↓'; // Default icon when no sorting is applied
//   };

//   return (
//     <div className="max-w-7xl mx-auto">

//       <div className="sm:flex sm:items-center sm:justify-between mt-8 mb-3">
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-[#6096BA] to-[#4E7A9A] bg-clip-text text-transparent">
//           Weekly Reviews
//         </h1>
      
      
//         <button
//           onClick={() => navigate('/weeklyreview/upload')}
//           className="mt-10 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-[#6096BA] text-white rounded-lg hover:bg-[#4E7A9A] focus:outline-none focus:ring-2 focus:ring-[#4E7A9A] focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg transform hover:-translate-y-0.5"
//         >
//           Upload Weekly Review
//         </button>

//       </div>

//       {/* form container */}
//       <div className="bg-[#f7f8fa] px-10 py-6">

//         {/* Search bar */}
//         <div className="mb-2 flex items-center justify-end space-x-2">
//           <label className="text-gray-700 text-sm font-semibold">Search:</label>
//           <div className="relative w-60 sm:w-48">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-gray-700 text-sm"
//             />
//             <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
//           </div>
//         </div>

//         {/* Filter buttons */}
//         <div className="flex justify-end">
//           <button
//             onClick={() => handleFilterChange("Approved")}
//             className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
//               filterStatus === "Approved" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
//             }`}
//           >
//             Approved
//           </button>
//           <button
//             onClick={() => handleFilterChange("Pending")}
//             className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
//               filterStatus === "Pending" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
//             }`}
//           >
//             Pending
//           </button>
//           <button
//             onClick={() => handleFilterChange("Rejected")}
//             className={`border px-2 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
//               filterStatus === "Rejected" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
//             }`}
//           >
//             Rejected
//           </button>
//           <button
//             onClick={() => handleFilterChange("All")}
//             className={`border px-5 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${
//               filterStatus === "All" ? "bg-[#4E7A9A]" : "bg-[#6096BA] hover:bg-[#4E7A9A]"
//             }`}
//           >
//             All
//           </button>

//           {/* Dropdown menu for sorting */}
//           <select
//             className="border px-3 py-2 mx-1 my-2 rounded-lg text-white font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 bg-[#6096BA] hover:bg-[#3d6a8b] focus:outline-none cursor-pointer"
//             onChange={(e) => handleSortChange(e.target.value)}
//           >
//             <option className="bg-[#6096BA] cursor-pointer" value="">Sort by</option>
//             <option className="bg-[#6096BA] cursor-pointer" value="ID">ID</option>
//             <option className="bg-[#6096BA] cursor-pointer" value="Week">Week</option>
//             <option className="bg-[#6096BA] cursor-pointer" value="Stamp">Stamp</option>
//             <option className="bg-[#6096BA] cursor-pointer" value="Status">Status</option>
//           </select>
//         </div>

//         {/* Table */}
//         <div className="bg-white shadow-lg overflow-hidden border border-indigo-50">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-indigo-100">
//               <thead className="bg-[#e9ecef] from-indigo-600 to-purple-600">
//                 <tr>
//                   {['id', 'week', 'status', 'remarks', 'stamp', 'actions'].map((header) => (
//                     <th
//                       key={header}
//                       className="px-6 py-4 text-left cursor-pointer"
//                       onClick={() => handleSort(header)}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-bold text-black tracking-wider">
//                           {header.charAt(0).toUpperCase() + header.slice(1)}
//                         </span>
//                         {/* Sorting icons */}
//                         <span className="ml-2 mb-1">
//                           {renderSortIcon(header)}
//                         </span>
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-[#f7f8fa] divide-y divide-indigo-50">
//                 {paginatedData.map((review) => (
//                   <tr key={review.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">#{review.id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.week}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <StatusBadge status={review.status} />
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">{review.remarks}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.stamp}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <button
//                         className="text-indigo-600 hover:text-indigo-900 font-medium transition-colors duration-150"
//                         onClick={() => console.log('Edit review:', review.id)}
//                       >
//                         Edit
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination buttons */}
//         <div className="flex justify-end space-x-2 mt-4">
//           <button
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md">
//             {currentPage}
//           </span>
//           <button
//             onClick={handleNextPage}
//             disabled={indexOfLastItem >= filteredData.length}
//             className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default WeeklyReviewList;





















































