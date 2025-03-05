import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
// import  from "./components/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Activity from "./components/Activity";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100 flex-col md:flex-row">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col w-full md:w-auto">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4 overflow-auto w-full">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/profile" element={<Activity />} /> */}
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
//Profilecard

// Profilenavbar


export default App;

