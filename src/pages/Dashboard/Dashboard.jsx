import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      {/* Container */}
      <div className="dashboard-container">
        {/* Layout */}
        <div className="dashboard-layout">
          {/* Top-section */}
          <div className="dashboard-topSection">
            <p className="dashboard-tilte">Overview</p>
          </div>
          {/* Content */}
          <div className="dashboard-content">
            <div className="dashboard-items">
              <h4>Unresolved</h4>
              <p>60</p>
            </div>
            <div className="dashboard-items">
              <h4>Overdue</h4>
              <p>16</p>
            </div>
            <div className="dashboard-items">
              <h4>Open</h4>
              <p>43</p>
            </div>
            <div className="dashboard-items">
              <h4>On hold</h4>
              <p>64</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
