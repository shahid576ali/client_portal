import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessagesSquare, Bell, UserCircle, Menu, X, CheckCircle } from "lucide-react";

const Navbar = ({ toggleSidebar, isSidebarOpen, closeSidebar }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);

  const user = {
    name: "Nicholas Swatz",
    profileImage:
      "https://globalventuring.com//content/uploads/2023/03/Sonam-Jain-landscape.png",
  };

  const notifications = [
    { id: 1, message: "New message from John Doe", link: "/messages", time: "2 min ago", read: false },
    { id: 2, message: "Your profile was viewed", link: "/profile", time: "10 min ago", read: true },
    { id: 3, message: "Reminder: Meeting at 3 PM", link: "/meetings", time: "1 hour ago", read: false },
    // { id: 4, message: "Project deadline tomorrow", link: "/projects", time: "3 hours ago", read: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 md:relative">
        {/* Left Section - Sidebar Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none text-2xl md:hidden"
          >
            <Menu size={20} />
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
        <div className="flex items-center gap-6 relative">
          {/* Messages Icon */}
          <button className="relative p-2 text-gray-700 hover:text-blue-500 cursor-pointer">
            <MessagesSquare size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          {/* Notification Icon with Dropdown */}
          <div className="relative" ref={notificationMenuRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            </button>

            {/* Notification Dropdown Menu - Fixed positioning on mobile */}
            {isNotificationOpen && (
              <div className="fixed sm:absolute right-0 left-0 sm:left-auto top-16 sm:top-auto sm:mt-2 mx-2 sm:mx-0 w-auto sm:w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50 max-h-[80vh] overflow-auto">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2 border-b pb-3">
                  <Bell size={18} className="text-blue-500" /> Notifications
                </h3>

                <div className="max-h-60 overflow-y-auto mt-2">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <Link
                        key={notif.id}
                        to={notif.link}
                        className={`flex items-start gap-3 p-3 rounded-md hover:bg-gray-100 transition duration-200 ${!notif.read ? "bg-gray-50" : ""
                          }`}
                      >
                        <div className="relative">
                          <CheckCircle
                            size={16}
                            className={`absolute top-2 -right-1 ${notif.read ? "text-green-500" : "text-gray-300"
                              }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-700 text-sm break-words">{notif.message}</p>
                          <span className="text-xs text-gray-500">{notif.time}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm text-center mt-3">
                      No new notifications
                    </p>
                  )}
                </div>

                <button onClick={() => {setIsNotificationOpen(false); // Close dropdown
                  }}
                className="w-full text-center mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  <Link to="/notifications">View All</Link>
                </button>
              </div>
            )}
          </div>

          {/* Profile Icon with Dropdown */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="focus:outline-none"
            >
              <UserCircle
                size={32}
                className="text-gray-700 hover:text-blue-500 cursor-pointer"
              />
            </button>

            {/* Profile Dropdown Menu - Also fixed positioning on mobile */}
            {isProfileMenuOpen && (
              <div className="fixed sm:absolute right-0 left-0 sm:left-auto top-16 sm:top-auto sm:mt-2 mx-2 sm:mx-0 w-auto sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                <div className="flex items-center gap-3 border-b pb-3">
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="block text-gray-800 font-semibold truncate">
                      {user.name}
                    </span>
                    <span className="text-sm text-gray-500 truncate block">
                      nicholasswatz@gmail.com
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-col">
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => alert("Logging out...")}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




