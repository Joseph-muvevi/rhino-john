import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import ServiceTypesBanner from './ServiceTypeBanner/ServiceTypeBanner'
import ServiceTypes from './ServiceTypes/ServiceTypes'

const ServiceType = () => {
    return (
        <div className="service-type">
            <Navbar/>
            <ServiceTypesBanner/>
            <ServiceTypes/>
        </div>
    )
}

export default ServiceType
