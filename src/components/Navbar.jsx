
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessagesSquare, Bell, UserCircle, Menu, X } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 md:relative">
      {/* Left Section - Sidebar Toggle & Logo */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none text-2xl md:hidden"
        >
          <Menu size={28} />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/07/simtrak-removebg-preview.png?fit=300%2C95&ssl=1"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Icons (Visible on all screen sizes) */}
      <div className="flex items-center gap-6">
        {/* Message Icon */}
        <button className="relative p-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <MessagesSquare size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </button>

        {/* Profile Icon */}
        <Link to="/profile">
          <UserCircle size={32} className="text-gray-700 hover:text-blue-500 cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center p-4 md:hidden z-50">
          <Link to="/" className="py-2 text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/messages" className="py-2 text-gray-700 hover:text-blue-500">
            Messages
          </Link>
          <Link to="/notifications" className="py-2 text-gray-700 hover:text-blue-500">
            Notifications
          </Link>
          <Link to="/profile" className="py-2 text-gray-700 hover:text-blue-500">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




