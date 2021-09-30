import React from 'react'

export const DashboardHomeFilter = ({filter, setFilter}) => {
    return (
        <span className="dashboard-home-filter">
            <input value={filter || ""} onChange={e => setFilter(e.target.value)} placeholder="Search"/>
        </span>
    )
}
