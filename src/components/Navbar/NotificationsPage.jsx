import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Bell } from "lucide-react";

const NotificationsPage = ({ notifications }) => {
  return (
    <div className="p-3 sm:p-6 w-full max-w-4xl mx-auto mt-5 bg-white shadow-lg rounded-lg pt-16 sm:pt-6">
      {/* Header */}
      <div className="sticky top-0 bg-white z-20 p-3 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <Bell size={20} className="text-blue-500" />
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Notifications</h2>
        </div>
        {notifications.length > 0 && (
          <button className="px-3 py-1 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
            Mark all as read
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="max-h-[400px] sm:max-h-[600px] overflow-y-auto space-y-3 sm:space-y-4 p-1 sm:p-2">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <Link
              key={notif.id}
              to={notif.link}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 border rounded-lg shadow-sm transition duration-200 hover:shadow-md ${
                !notif.read ? "bg-blue-50 border-blue-200" : "bg-white border-gray-200"
              }`}
            >
              <CheckCircle
                size={18}
                className={`${notif.read ? "text-green-500" : "text-gray-300"}`}
              />
              <div className="flex-1">
                <p className="text-gray-800 text-sm sm:text-base font-medium">{notif.message}</p>
                <span className="text-xs sm:text-sm text-gray-500">{notif.time}</span>
              </div>
              {!notif.read && (
                <span className="text-xs text-blue-600 font-medium">New</span>
              )}
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10 text-sm sm:text-base">
            No notifications to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

