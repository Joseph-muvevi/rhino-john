import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ServiceQuotationBanner from './ServiceQuotationBanner/ServiceQuotationBanner'
import StorageQuotationForm from './StorageQuotationForm/StorageQuotationForm'

const ServiceQuotation = () => {
    return (
        <div>
            <Navbar/>
            <ServiceQuotationBanner/>
            <StorageQuotationForm/>
        </div>
    )
}

export default ServiceQuotation
