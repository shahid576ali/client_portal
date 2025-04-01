
import "react";
import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < tasks.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  

  const tasks = [
    {
      id: "TSK-7479",
      date: "2023/03/06",
      name: "Client Portal",
      status: "Ongoing",
      deadline: "2023/03/10",
      assignedBy: "Self",
    },
    {
      id: "TSK-7480",
      date: "2023/03/07",
      name: "Dashboard Update",
      status: "Completed",
      deadline: "2023/03/15",
      assignedBy: "Manager",
    },
    {
      id: "TSK-7481",
      date: "2023/02/10",
      name: "API Development",
      status: "Completed",
      deadline: "2023/02/20",
      assignedBy: "Team Leader",
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
      status: "Completed",
      deadline: "2023/03/30",
      assignedBy: "Team Leader",
    },
    {
      id: "TSK-7484",
      date: "2023/03/25",
      name: "Redux setup",
      status: "Completed",
      deadline: "2023/03/30",
      assignedBy: "Team Leader",
    },
    {
      id: "TSK-7484",
      date: "2023/03/25",
      name: "Redux setup",
      status: "Completed",
      deadline: "2023/03/30",
      assignedBy: "Team Leader",
    },
    {
      id: "TSK-7484",
      date: "2023/03/25",
      name: "Redux setup",
      status: "Completed",
      deadline: "2023/03/30",
      assignedBy: "Team Leader",
    },
    {
      id: "TSK-7484",
      date: "2023/03/25",
      name: "Redux setup",
      status: "Completed",
      deadline: "2023/03/30",
      assignedBy: "Team Leader",
    }
  ];

  const displayedTasks = tasks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const sortedTasks = [...tasks].sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  const filteredTasks = sortedTasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || task.status.toLowerCase() === filter)
  );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const activities = [
    {
      name: 'John Miller',
      action: 'last login on',
      date: 'Jul 13, 2024',
      time: '05:36 PM',
      imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid',
    },
    {
      name: 'Merva Sahin',
      action: 'date created on',
      date: 'Sep 08, 2024',
      time: '03:12 PM',
      imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg',
    },
    {
      name: 'Tammy Collier',
      action: 'updated on',
      date: 'Aug 15, 2023',
      time: '05:36 PM',
      imageUrl: 'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',
    },
    {
      name: 'Jasper Jean',
      action: 'logged out at',
      date: 'July 15, 2023',
      time: '04:36 AM',
      imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid',
    },
    {
      name: 'Shiny Dutta',
      action: 'created on',
      date: 'Feb 20, 2024',
      time: '03:40 PM',
      imageUrl: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg',
    }
  ];

  return (
    <div className="p-4 flex flex-col gap-6 w-full">

<div className="bg-white shadow-lg rounded-lg p-4 w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">User Data</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <button className="bg-[#2f9ce4] text-white px-4 py-2 rounded w-full md:w-auto cursor-pointer">
          Add Task
        </button>
        <Link to='/tasks' className="bg-[#2f9ce4] text-white text-center px-4 py-2 rounded w-full md:w-auto cursor-pointer">
          All Tasks
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
          <thead className="text-[16px]">
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-2 md:px-4 py-2 text-left">Task ID</th>
              <th className="px-2 md:px-4 py-2 text-left">Task Date</th>
              <th className="px-2 md:px-4 py-2 text-left">Task Name</th>
              <th className="px-2 md:px-4 py-2 text-left">Status</th>
              <th className="px-2 md:px-4 py-2 text-left">Actions</th>
              <th className="px-2 md:px-4 py-2 text-left">Deadline</th>
              <th className="px-2 md:px-4 py-2 text-left">Assigned By</th>
            </tr>
          </thead>
          <tbody>
            {displayedTasks.map((task, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-2 md:px-4 py-2">{task.id}</td>
                <td className="px-2 md:px-4 py-2">{task.date}</td>
                <td className="px-2 md:px-4 py-2 cursor-pointer">{task.name}</td>
                <td className="px-2 md:px-4 py-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${task.status === "Ongoing" ? "bg-yellow-100 text-yellow-800 border border-yellow-400" : "bg-green-100 text-green-800 border border-green-400"}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-2 md:px-4 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <FaEye className="text-[#2a8252] cursor-pointer text-lg" />
                    <FaEdit className="text-[#6096ba] cursor-pointer text-lg" />
                    <FaTrash className="text-[#EA6C6C] cursor-pointer text-lg" />
                  </div>
                </td>
                <td className="px-2 md:px-4 py-2">{task.deadline}</td>
                <td className="px-2 md:px-4 py-2">{task.assignedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <button onClick={handlePrev} disabled={currentPage === 0} className="bg-[#d1d5dc] text-black px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer">
          Prev
        </button>
        {/* <span className="font-semibold text-lg text-[#676767]">
            Page {currentPage} of {totalPages}
          </span> */}
        <button onClick={handleNext} disabled={(currentPage + 1) * itemsPerPage >= tasks.length} className="bg-[#d1d5dc] text-black px-4 py-2 rounded-full flex items-center gap-2 disabled:opacity-50 cursor-pointer">
          Next
        </button>
      </div>
    </div>

      {/* Activity Section */}
      <div className="bg-white shadow-2xl rounded-xl mt-2 p-5 w-full">
        <h2 className="text-lg font-semibold mb-4">Activity</h2>
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center mb-3">
            <img src={activity.imageUrl} alt={`${activity.name} profile`} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <div className="font-bold text-gray-700">{activity.name} {activity.action} {activity.date}</div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          </div>
        ))}
        <div className="text-left mt-4 text-blue-500 cursor-pointer">View all</div>
      </div>
    </div>
  );
};

export default Task;
