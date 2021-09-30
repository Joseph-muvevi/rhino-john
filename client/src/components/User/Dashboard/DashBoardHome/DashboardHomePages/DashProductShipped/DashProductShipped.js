import React from 'react'
import DashProductShippedBanner from './DashProductShippedBanner/DashProductShippedBanner'
import DashProductShippedContent from './DashProductShippedContent/DashProductShippedContent'
import "./DashProductShipped.css"

const DashProductShipment = () => {
	return (
		<div className="dash-product-shipped">
			<DashProductShippedBanner/>
			<DashProductShippedContent/>
		</div>
	)
}

export default DashProductShipment
