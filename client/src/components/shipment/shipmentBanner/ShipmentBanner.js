import React from 'react'
import "../shipment.css"
import { useFormik } from 'formik'
import * as Yup from "yup"

const ShipmentBanner = () => {

    return (
        <div className="shipment-banner">
            <div className="shipment-banner-content">
                <div className="shipment-banner-content-group">
                    <h3 className="shipment-banner-h3">
                        Track your shipment
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ShipmentBanner
