import React from 'react'
import DashStorageTableAdminBanner from './DashStorageTableAdminBanner/DashStorageTableAdminBanner'
import DashStorageTableAdminContent from './DashStorageTableAdminContent/DashStorageTableAdminContent'

const DashStorageTableAdmin = () => {
	return (
		<div className="dash-storage-table-admin">
			<DashStorageTableAdminBanner/>
			<DashStorageTableAdminContent/>
		</div>
	)
}

export default DashStorageTableAdmin
