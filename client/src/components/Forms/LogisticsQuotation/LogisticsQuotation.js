import React from 'react'
import Navbar from '../../Navbar/Navbar'
import LogisticsQuotationBanner from "./LogisticsQuotationBanner/LogisticsQuotationBanner"
import LogisticsQuotationForm from "./LogisticsQuotationForm/LogisticsQuotationForm"

const LogisticsQuotation = () => {
    return (
        <div>
            <Navbar/>
            <LogisticsQuotationBanner/>
            <LogisticsQuotationForm/>
        </div>
    )
}

export default LogisticsQuotation
