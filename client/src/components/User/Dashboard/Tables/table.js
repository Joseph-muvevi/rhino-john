import React from 'react'
import AdminLogisticsTable from '../../AdminLogisticsTable/AdminLogisticsTable'
import EnquiriesTable from './EnquiriesTable/EnquiriesTable'
import LogisticsTable from './LogisticsTable/LogisticsTable'
import { StorageTable } from './StorageTable/StorageTable'
import UsersTable from './UsersTable/UsersTable'

const DashTable = () => {
    return (
        <div className="dash-table">
            <StorageTable/>
            <LogisticsTable/>
            <EnquiriesTable/>
            <UsersTable/>
        </div>
    )
}

export default DashTable
