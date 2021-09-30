import React from 'react'
import "./adminlogisticstable.css"
import AdminLogisticsTableContent from './AdminLogisticsTableContent'
import AdminLogisticsTableHeader from './AdminLogisticsTableHeader'

const AdminLogisticsContentTableCard = ({logistics}) => {
    const logisticsItems = logistics
    console.log("the items are", logisticsItems)

    // const lengthOf = logisticsItems.length
    console.log(logistics.date, "thats the date")

    return (
        <div className="admin-logistics-table-card">
            {
                logisticsItems ? (
                    <>
                        <AdminLogisticsTableHeader/>
                        {
                            logisticsItems ? logisticsItems.map((item, lengthOf) => (
                                <>
                                    <AdminLogisticsTableContent data = {item} length = {lengthOf}/> 
                                    {
                                        console.log("the dates are", item.date)
                                    }
                                </>
                            )) : <p>No items yet</p>
                        }
                    </>
                ) : <p> Items doesn't exist yet </p>
            }
        </div>
    )
}

export default AdminLogisticsContentTableCard
