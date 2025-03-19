import React from "react";
import Data from "./Data";
import IntroMessage from "./Intro";
import Tasks from "./Tasks";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <IntroMessage userName="user_name" />
        <main className="flex-1 overflow-auto"></main>
        <Tasks />
        <Data />
      </div>
    </div>
  );
};

export default AdminDashboard;
