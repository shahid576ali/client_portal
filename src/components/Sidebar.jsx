import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaSignOutAlt,
  FaClipboardList,
  FaBook,
  FaCalendarCheck,
  FaChartPie,
} from "react-icons/fa";
import "./CSS Files/Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
<<<<<<< HEAD
        <ul>
          <li>
            <Link to="./">
              <FaHome />
              {isExpanded && <span>Home</span>}
            </Link>
          </li>
          <li>
            <FaTasks />
            {isExpanded && <span>Task</span>}
          </li>
          <li>
            <Link to="/profile">
              <FaUsers />
              {isExpanded && <span>All Users</span>}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaBook />
              {isExpanded && <span>Daily Journal</span>}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaClipboardList />
              {isExpanded && <span>Weekly Review</span>}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaCalendarCheck />
              {isExpanded && <span>Apply Leave</span>}
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaChartPie />
              {isExpanded && <span>Presentation</span>}
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <FaSignOutAlt />
              {isExpanded && <span>Logout</span>}
            </Link>
          </li>
=======
        <div className="p-4 flex justify-between items-center md:hidden">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            ✖
          </button>
        </div>

        <ul className="mt-4">
          {[
            { to: "/", icon: <FaHome />, label: "Home" },
            { to: "/form", icon: <FaWpforms />, label: "Form" },
            { to: "/table", icon: <FaTable />, label: "Table" },
            { to: "/chart", icon: <FaChartBar />, label: "Chart" },
            { to: "/widget", icon: <FaThLarge />, label: "Widget" },
            { to: "/users", icon: <FaUsers />, label: "Users" },
            { to: "/pricing", icon: <FaDollarSign />, label: "Pricing" },
            { to: "/blog", icon: <FaBlog />, label: "Blog" },
            { to: "/settings", icon: <FaCog />, label: "Settings" },
            { to: "/profile", icon: <FaUser />, label: "Profile" },
          ].map(({ to, icon, label }) => (
            <Link key={to} to={to} onClick={handleMenuClick}>
              <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
                {icon} <span className="ml-2">{label}</span>
              </li>
            </Link>
          ))}
>>>>>>> 9fcb7610317abcd49fef7153fee22c7c1f584d51
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
