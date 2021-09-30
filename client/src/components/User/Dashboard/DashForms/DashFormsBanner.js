import React from "react";
import { Link } from "react-router-dom";

const DashFormsBanner = () => {
	return (
		<div className="dash-forms-banner">
			<div className="dash-forms-banner-content">
				<h3 className="dash-forms-banner-content-h3">Add form</h3>
				<div className="dash-forms-banner-content-btn">
					<Link to="/dashboard">
						<button className="dash-forms-btn" type="button">
							Add Shipment
						</button>
					</Link>

					<Link to="/dashboard">
						<button className="dash-forms-btn" type="button">
							Add Storage
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DashFormsBanner;
