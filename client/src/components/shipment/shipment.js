import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShipmentBanner from './shipmentBanner/ShipmentBanner'
import TrackType from './shipmentTable/trackType'

const Shipment = () => {
    return (
        <div className="shipment">
            <Navbar/>
            <ShipmentBanner/>
            <TrackType/>
        </div>
    )
}

export default Shipment
