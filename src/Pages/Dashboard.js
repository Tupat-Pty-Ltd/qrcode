import React from 'react';
import DashboardStarts from "../Components/DashboardStarts";

function Dashboard(props) {
    return (
        <div>
            <p className="dashboard-label">Dashboard</p>
            <DashboardStarts/>
        </div>
    );
}

export default Dashboard;