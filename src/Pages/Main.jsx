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
import WeeklyReviewList from "./WeeklyReview/WeeklyReviewList"; 
import WeeklyReportForm from "./WeeklyReview/WeeklyReportForm";
import SuccessPage from "./WeeklyReview/SuccessPage";
import { Toaster } from "react-hot-toast";


const Main = () => {

//add the records of weekly review
const [reviews, setReviews] = useState([
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
  { id: '100015', week: '2024-11-21 to 2024-11-27', status: 'APPROVED', remarks: 'Strong team collaboration noted', stamp: '2024-11-28 13:27:56' },
  { id: '100016', week: '2024-11-14 to 2024-11-20', status: 'REJECTED', remarks: 'Incomplete task submissions', stamp: '2024-11-21 09:45:12' },
  { id: '100017', week: '2024-11-07 to 2024-11-13', status: 'APPROVED', remarks: 'Met all project deadlines', stamp: '2024-11-14 16:30:45' },
  { id: '100018', week: '2024-10-31 to 2024-11-06', status: 'PENDING', remarks: 'Awaiting client approval', stamp: '2024-11-07 12:10:22' },
  { id: '100019', week: '2024-10-24 to 2024-10-30', status: 'REJECTED', remarks: 'Incorrect data entries', stamp: '2024-10-31 18:55:33' },
  { id: '100020', week: '2024-10-17 to 2024-10-23', status: 'APPROVED', remarks: 'Exceeded performance expectations', stamp: '2024-10-24 14:20:10' },
  { id: '100021', week: '2024-10-10 to 2024-10-16', status: 'PENDING', remarks: 'Pending quality assurance review', stamp: '2024-10-17 11:05:44' },
  { id: '100022', week: '2024-10-03 to 2024-10-09', status: 'REJECTED', remarks: 'Missed key milestones', stamp: '2024-10-10 09:15:29' },
  { id: '100023', week: '2024-09-26 to 2024-10-02', status: 'APPROVED', remarks: 'Delivered ahead of schedule', stamp: '2024-10-03 17:40:18' },
  { id: '100024', week: '2024-09-19 to 2024-09-25', status: 'PENDING', remarks: 'Awaiting final report submission', stamp: '2024-09-26 13:25:37' },
  { id: '100025', week: '2024-09-12 to 2024-09-18', status: 'REJECTED', remarks: 'Insufficient documentation provided', stamp: '2024-09-19 10:50:26' }
]);
 
  // Function to add a new review (previously in ReviewProvider)
  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };


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
              
              <Route path="/weeklyreview" element={<WeeklyReviewList reviews={reviews} addReview={addReview} />} />
              <Route path="/weeklyreview/upload" element={<WeeklyReportForm addReview={addReview} />} />
              <Route path="/weeklyreview/success" element={<SuccessPage />} />

             </Routes>

             
          </main>
        </div>
        <Toaster position="top-right" />
      </div>
  )
}

export default Main
