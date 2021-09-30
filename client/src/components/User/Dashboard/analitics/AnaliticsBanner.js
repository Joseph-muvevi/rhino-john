import { faShippingFast, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../dashboard.css"
import AnaliticsBannerLineChart from './AnaliticsBannerLineChart'
import AnaliticsBannerRadarChart from './AnaliticsBannerRadarChart'

export const AnaliticsBanner = () => {
    return (
        <div className="analitics-banner">
            <div className="analitics-banner-left">
                <div className="analitics-banner-left-grids-long">
                    <AnaliticsBannerLineChart/>
                </div>
                {/* <div className="analitics-banner-left-grids-one">
                    <div className="dashboard-card-circle">
                        <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faShippingFast}/>
                    </div>
                    <h3 className="analitics-banner-left-grids-h3">
                        Total Shipment
                    </h3>
                    <h4 className="analitics-banner-left-grids-h4">
                        603kg
                    </h4>
                </div>
                <div className="analitics-banner-left-grids-two">
                    <div className="dashboard-card-circle">
                        <FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWeightHanging}/>
                    </div>
                    <h3 className="analitics-banner-left-grids-h3">
                        Net storage weight
                    </h3>
                    <h4 className="analitics-banner-left-grids-h4">
                        603kg
                    </h4>
                </div> */}
            </div>
            <div className="analitics-banner-right">
                <AnaliticsBannerRadarChart/>
            </div>
        </div>
    )
}
