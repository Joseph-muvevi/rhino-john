import React from 'react'
import DashStorageQuotationBanner from './DashStorageQuotationBanner/DashStorageQuotationBanner'
import DashStorageQuotationContent from './DashStorageQuotationContent/DashStorageQuotationContent'
import "./DashStorageQuotation.css"

const DashStorageQuotation = () => {
	return (
		<div className="dash-storage-quotation">
			<DashStorageQuotationBanner/>
			<DashStorageQuotationContent/>
		</div>
	)
}

export default DashStorageQuotation
