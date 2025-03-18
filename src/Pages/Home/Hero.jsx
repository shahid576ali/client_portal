import React from "react";
import Card from "./Card";
import Charts from "./Chart";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto">
          <div className="pt-16 md:pt-0 mb-5">
            <Card />
          </div>
          <Charts />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
