import React from 'react'
import "./adminstoragetable.css"

const AdminStorageTableHeaders = () => {
    return (
        <div className="admin-storage-table-header">
            <div className="admin-storage-table-header-content">
                <p className="admin-storage-table-header-number">
                    #
                </p>
                <p className="admin-storage-table-header-tracking">
                    Track 
                </p>
                <p className="admin-storage-table-header-client">
                    Client
                </p>
                <p className="admin-storage-table-header-id">
                    ID
                </p>
                <p className="admin-storage-table-header-address">
                    Address
                </p>
                <p className="admin-storage-table-header-product">
                    Product
                </p>
                <p className="admin-storage-table-header-quality">
                    Quality
                </p>
                <p className="admin-storage-table-header-unit">
                    Unit
                </p>
                <p className="admin-storage-table-header-packaging">
                    Pack
                </p>
                <p className="admin-storage-table-header-weight">
                    Weight
                </p>
                <p className="admin-storage-table-header-date">
                    Date in
                </p>
                <p className="admin-storage-table-header-date">
                    Date out
                </p>
            </div>
        </div>
    )
}

export default AdminStorageTableHeaders
