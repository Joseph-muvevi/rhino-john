import React from 'react'
import "./adminstoragetable.css"
import AdminStorageTableContent from './AdminStorageTableContent'
import AdminStorageTableHeaders from './AdminStorageTableHeaders'

const AdminStorageContentTableCard = ({storage}) => {
    const storageItems = storage
    const arrlength = storageItems.length
    console.log("The array length",arrlength)

    return (
        <div className="admin-storage-table-card">
            <AdminStorageTableHeaders/>
            {
                storageItems ? storageItems.map((object, arraylength) => (
                    <>
                        <AdminStorageTableContent length={arraylength} content = {object}/>
                    </>
                ) ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminStorageContentTableCard
