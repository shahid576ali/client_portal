import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Home/Hero";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./Pages/Profile/Profile";
import PageNotFound from "./Pages/NotFound/PageNotFound";
import Activity from "./Pages/Activity/Activity";
import Uploadjournal from "./Pages/Uploadjournal";
import DailyJournal from "./Pages/DailyJournal/Dailyjournal";
// import DailyJournal from "./Pages/DailyJournal/Dailyjournal";

function App() {
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

  return (
    <BrowserRouter>
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
          />

          <main className="content-area">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/journal" element={<Uploadjournal />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/dailyjournal" element={<DailyJournal />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
