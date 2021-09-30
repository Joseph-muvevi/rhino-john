import React from 'react'
import "./adminlogisticstable.css"

const AdminLogisticsTableHeaders = () => {
    return (
        <div className="admin-logistics-table-header">
            <div className="admin-logistics-table-header-content">
                <p className="logistics-content-table-content-topic-p-number">
                    #
                </p>
                <p className="logistics-content-table-content-topic-p-track">
                    Tracking No
                </p>
                <p className="logistics-content-table-content-topic-p-fullnames">
                    Names
                </p>
                <p className="logistics-content-table-content-topic-p-product">
                    Products
                </p>
                <p className="logistics-content-table-content-topic-p-address">
                    Address
                </p>
                <p className="logistics-content-table-content-topic-p-weight">
                    Weight
                </p>
                <p className="logistics-content-table-content-topic-departure-city">
                    City departed
                </p>
                <p className="logistics-content-table-content-topic-departure-country">
                    Country departed
                </p>
                <p className="logistics-content-table-content-topic-arrival-city">
                    Destination city
                </p>
                <p className="logistics-content-table-content-topic-arrival-country">
                    Destination country
                </p>
                <p className="logistics-content-table-content-topic-status">
                    Status
                </p>
            </div>
        </div>
    )
}

export default AdminLogisticsTableHeaders
