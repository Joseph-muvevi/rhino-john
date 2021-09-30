import React from 'react'
import DashShipmentQuotationBanner from './DashShipmentQuotationBanner/DashShipmentQuotationBanner'
import DashShipmentQuotationContent from './DashShipmentQuotationContent/DashShipmentQuotationContent'
import "./DashShipmentQuotation.css"

const DashShipmentQuotation = () => {
	return (
		<div className="dash-shipment-quotation">
			<DashShipmentQuotationBanner/>
			<DashShipmentQuotationContent/>
		</div>
	)
}

export default DashShipmentQuotation
