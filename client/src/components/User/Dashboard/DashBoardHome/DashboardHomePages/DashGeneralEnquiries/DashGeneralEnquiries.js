import React from 'react'
import DashGeneralEnquiriesBanner from './DashGeneralEnquiriesBanner/DashGeneralEnquiriesBanner'
import DashGeneralEnquiriesContent from './DashGeneralEnquiriesContent/DashGeneralEnquiriesContent'
import "./DashGeneralEnquiries.css"

const DashGeneralEnquiries = () => {
    return (
        <div className="dash-general-enquiries">
           <DashGeneralEnquiriesBanner/>
           <DashGeneralEnquiriesContent/>
        </div>
    )
}

export default DashGeneralEnquiries
