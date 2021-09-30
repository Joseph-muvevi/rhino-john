import React from 'react'
import { Link } from 'react-router-dom'
import "../dashboard.css"

const DashboardBanner = () => {
	return (
		<div className="dashboard-banner" id="dashboard">
			<div className="dashboard-banner-long">
				<div className="dashboard-banner-long-content">
					<h3 className="dashboard-banner-long-content-h3">
						Welcome 
					</h3>
					<p className="dashboard-banner-long-content-p">
						Have a look at your dashboard
					</p>
				   <div className="dashboard-banner-buttons">
						<Link to="/dashboard/logistics-form">
							<button>Add shipment</button>
						</Link>
						<Link to="/dashboard/logistics/edit/logisticsform">
							<button>Update shipment</button>
						</Link>
						<Link to="/dashboard/logistics-form">
							<button>Add storage</button>
						</Link>
						<Link to="/dashboard/storage/edit/storageform">
							<button>Update storage</button>
						</Link>
				   </div>
				</div>
			</div>
		</div>
	)
}

export default DashboardBanner
