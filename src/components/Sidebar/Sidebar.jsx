import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaSignOutAlt,
  FaClipboardList,
  FaBook,
  FaCalendarCheck,
  FaChartPie,
  FaFileAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ onToggle, isOpen, isMobile, closeSidebar }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
      onToggle(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
      onToggle(false);
    }
  };

  const handleItemClick = (route, itemName) => {
    setActive(itemName);
    if (isMobile) {
      closeSidebar();
    }
    navigate(route);
  };

  return (
    <div
      className={`sidebar ${isExpanded || isMobile ? "expanded" : "collapsed"}${
        isOpen ? " show" : ""
      }${isMobile ? " mobile" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li
          className={active == "home" ? "active" : ""}
          onClick={() => handleItemClick("/", "home")}
        >
          <FaHome />
          {(isExpanded || isMobile) && <span>Home</span>}
        </li>
        <li
          className={active == "profile" ? "active" : ""}
          onClick={() => handleItemClick("/profile", "profile")}
        >
          <FaUsers />
          {(isExpanded || isMobile) && <span>Profile</span>}
        </li>
        <li
          className={active == "daily" ? "active" : ""}
          onClick={() => handleItemClick("/journal", "daily")}
        >
          <FaBook />
          {(isExpanded || isMobile) && <span>Daily Journal</span>}
        </li>
        <li
          className={active == "weekly" ? "active" : ""}
          onClick={() => handleItemClick("/*", "weekly")}
        >
          <FaClipboardList />
          {(isExpanded || isMobile) && <span>Weekly Review</span>}
        </li>
        <li
          className={active == "leave" ? "active" : ""}
          onClick={() => handleItemClick("/*", "leave")}
        >
          <FaCalendarCheck />
          {(isExpanded || isMobile) && <span>Apply Leave</span>}
        </li>
        <li
          className={active == "presentation" ? "active" : ""}
          onClick={() => handleItemClick("/*", "presentation")}
        >
          <FaChartPie />
          {(isExpanded || isMobile) && <span>Presentation</span>}
        </li>
        <li
          className={active == "report" ? "active" : ""}
          onClick={() => handleItemClick("/*", "report")}
        >
          <FaFileAlt />
          {(isExpanded || isMobile) && <span>Report</span>}
        </li>
        <li
          className={active == "logout" ? "active" : ""}
          onClick={() => handleItemClick("/login", "logout")}
        >
          <FaSignOutAlt />
          {(isExpanded || isMobile) && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
