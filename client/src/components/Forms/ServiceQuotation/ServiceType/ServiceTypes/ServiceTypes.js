import React from 'react'
import { Link } from "react-router-dom"
import "../ServiceTypes.css"

const ServiceTypes = () => {
    return (
        <div className="service-types">
            <div className="service-types-container">
                <div className="service-types-cards-row">
                    <div className="service-types-card">
                        <div className="service-types-card-image-one">

                        </div>
                        <div className="service-types-card-content">
                            <h3 className="service-types-card-h3">
                                Storage Services
                            </h3>
                            <p className="service-types-card-p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                            <Link to="/storage-quotation">
                                <button className="services-types-card-button">
                                    Request a quote
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="service-types-card">
                        <div className="service-types-card-image-two">

                        </div>
                        <div className="service-types-card-content">
                            <h3 className="service-types-card-h3">
                                Transport and Logistics Services
                            </h3>
                            <p className="service-types-card-p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                            <Link to="/logistics-quotation">
                                <button className="services-types-card-button">
                                    Request a quote
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTypes
