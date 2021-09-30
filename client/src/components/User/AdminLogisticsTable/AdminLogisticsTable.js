import React, {useState, useEffect} from 'react'
import "./adminlogisticstable.css"
import axios from "axios"
import AdminLogisticsContentTableCard from './AdminLogisticsTableCard'

const AdminLogisticsTable = () => {

    const [adminLogistics, setAdminLogistics] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8080/api/logisticsrecords`)
        .then(res => {
            setAdminLogistics(res.data)
         
        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="admin-logistics-table">
            <div className="admin-logistics-table-content">
                
                {
                    adminLogistics ? <AdminLogisticsContentTableCard logistics={adminLogistics} /> : null
                }
                
            </div>
        </div>
    )
}

export default AdminLogisticsTable
