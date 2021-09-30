import React from 'react'
import Navbar from '../Navbar/Navbar'
import ServicesBanner from './servicesBanner/servicesBanner'
import ServiceContent from './ServicesContent/serviceContent'
import ServiceFooter from './ServicesFooter/ServiceFooter'

const Service = () => {
    return (
        <div className="service">
            <Navbar/>
            <ServicesBanner/>
            <ServiceContent/>
            <ServiceFooter/>
        </div>
    )
}

export default Service
