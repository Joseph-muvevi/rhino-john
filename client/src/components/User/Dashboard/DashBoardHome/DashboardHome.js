import React from 'react'
import DashboardBanner from './dashboardBanner'
import DashboardCards from './dashboardCards'
import "../dashboard.css"


const DashboardHome = () => {

    return (
        <div className="dashboard-home" i>
            <DashboardBanner/>
            <DashboardCards/>
        </div>
    )
}

export default DashboardHome
