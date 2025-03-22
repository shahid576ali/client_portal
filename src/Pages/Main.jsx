import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from "./Home/Hero";
import Profile from "./Profile/Profile";
import Uploadjournal from "./Uploadjournal";
import PageNotFound from "./NotFound/PageNotFound";
import DailyJournal from "./DailyJournal/Dailyjournal";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import NotificationsPage from "../components/Navbar/NotificationsPage";
import AllTasks from './Profile/AllTasks';
import WeeklyReview from "./WeeklyReview/WeeklyReviewList"


const Main = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSidebarToggle = (expanded) => {
    if (!isMobile) {
      setIsSidebarExpanded(expanded);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const notifications = [
    {
      id: 1,
      message: "New message from John Doe",
      link: "/messages",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      message: "Your profile was viewed",
      link: "/profile",
      time: "10 min ago",
      read: true,
    },
    {
      id: 3,
      message: "Reminder: Meeting at 3 PM",
      link: "/meetings",
      time: "1 hour ago",
      read: false,
    },
    // { id: 4, message: "Project deadline tomorrow", link: "/projects", time: "3 hours ago", read: false },
  ];
  return (

    <div className="app-container">
        {isMobile && isSidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
        )}
        <div
          className={`sidebar-container ${isSidebarExpanded ? "expanded" : ""}
           ${isSidebarOpen ? "show" : ""} ${isMobile ? "mobile" : ""}`}
        >
          <Sidebar
            onToggle={handleSidebarToggle}
            isOpen={isSidebarOpen}
            isMobile={isMobile}
            closeSidebar={closeSidebar}
          />
        </div>
        <div
          className={`main-content ${isSidebarExpanded ? "shifted" : ""} ${
            isSidebarOpen ? "mobile-shifted" : ""
          }`}
        >
          <Navbar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            closeSidebar={closeSidebar}
            isSidebarOpen={isSidebarOpen}
            isMobile={isMobile}
            notifications={notifications}
          />

          <main className="content-area">
           
             <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/journal" element={<Uploadjournal />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/dailyjournal" element={<DailyJournal />} />
              <Route path="/tasks" element={<AllTasks />} />
              <Route
                path="/notifications"
                element={<NotificationsPage notifications={notifications} />}
              />
             </Routes>
           
          </main>
        </div>
      </div>
  )
}

export default Main
