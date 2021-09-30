import React from 'react'
import "./DashboardShipmentIndividual.css"
import DashboardShipmentIndividualBanner from './DashboardShipmentIndividualBanner/DashboardShipmentIndividualBanner'
import DashboardShipmentIndividualContent from './DashboardShipmentIndividualContent/DashboardShipmentIndividualContent'

const DashboardShipmentIndividual = () => {
    return (
        <div className="dash-shipment-individual" id="dash-shipment-item">
            <DashboardShipmentIndividualBanner/>
            <DashboardShipmentIndividualContent/>
        </div>
    )
}

export default DashboardShipmentIndividual
