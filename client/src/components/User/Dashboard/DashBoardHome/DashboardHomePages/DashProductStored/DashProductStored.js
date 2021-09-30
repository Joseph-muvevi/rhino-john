import React from 'react'
import DashProductStoredBanner from './DashProductStoredBanner/DashProductStoredBanner'
import DashProductStoredContent from './DashProductStoredContent/DashProductStoredContent'

const DashProductStored = () => {
    return (
        <div className="dash-general">
            <DashProductStoredBanner/>
            <DashProductStoredContent/>
        </div>
    )
}

export default DashProductStored
