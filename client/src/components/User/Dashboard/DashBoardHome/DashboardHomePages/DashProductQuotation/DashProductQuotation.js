import React from 'react'
import "./DashProductQuotation.css"
import DashProductQuotationBanner from './DashProductQuotationBanner/DashProductQuotationBanner'
import DashProductQuotationContent from './DashProductQuotationContent/DashProductQuotationContent'

const DashProductQuotation = () => {
    return (
        <div className="dash-product-quotation">
            <DashProductQuotationBanner/>
            <DashProductQuotationContent/>
        </div>
    )
}

export default DashProductQuotation
