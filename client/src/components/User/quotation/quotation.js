import React from 'react'
import Navbar from '../../Navbar/Navbar'
import QuotationBanner from './quotationBanner/quotationBanner'
import QuotationForm from './quotationForm/quotationForm'

const Quotation = () => {
    return (
        <div className="quotation">
            <Navbar/>
            <QuotationBanner/>
            <QuotationForm/>
        </div>
    )
}

export default Quotation
