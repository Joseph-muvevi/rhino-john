import React, {useState, useEffect} from 'react'
import "./adminstoragetable.css"

const AdminStorageTableContent = ({content, length}) => {

	const [specificStorageItem, setSpecificStorageItem] = useState([""])

	const detail = content
	console.log("this is the result from table detail", detail)
	console.log("this is the result from table length", length)

	return (
		<div className="admin-storage-table-content">
			<div className="admin-storage-unifier">
			{
				detail ? console.log("My uniques ID is", "http://localhost:8080/api/storageshipment" , detail._id): "No IDS yet"
			}
			
					<div className="admin-storage-table-content-content">
						<div className="admin-storage-table-content-upper">
							<p className="admin-storage-table-content-number">
								<span className="header-phone-only">
									No: 
								</span>
								  {length + 1}
							</p>
							<p className="admin-storage-table-content-tracking">
								<span className="header-phone-only">
									Track No: 
								</span>
								{ detail ? detail.trackno : null }
							</p>
							<p className="admin-storage-table-content-client">
								<span className="header-phone-only">
									Fullnames: 
								</span>
								{ detail ? detail.fullnames : null }
							</p>
							<p className="admin-storage-table-content-id">
							<span className="header-phone-only">
									ID/Passport: 
								</span>
								{ detail ? detail.idno : null }
							</p>
							<p className="admin-storage-table-content-address">
							<span className="header-phone-only">
									Storage city: 
								</span>
								{ detail ? detail.storagecity : null }
							</p>
							<p className="admin-storage-table-content-product">
							<span className="header-phone-only">
									Product: 
								</span>
								{ detail ? detail.product : null }
							</p>
							<p className="admin-storage-table-content-quality">
							<span className="header-phone-only">
									Quality: 
								</span>
								{ detail ? detail.quality : null }
							</p>
							<p className="admin-storage-table-content-unit">
							<span className="header-phone-only">
									Unit: 
								</span>
								{ detail ? detail.unit : null}
							</p>
							<p className="admin-storage-table-content-packaging">
								<span className="header-phone-only">
									Packaging Type: 
								</span>
								{detail ? detail.unit : null}
							</p>
							<p className="admin-storage-table-content-weight">
							<span className="header-phone-only">
									Weight
								</span>
								{ detail ? detail.weight : null } { detail ? detail.weightunit : null }
							</p>
							<p className="admin-storage-table-content-date">
							<span className="header-phone-only">
									Date in: 
								</span>
								{ detail ? detail.datein : null }
							</p>
							<p className="admin-storage-table-content-date">
								<span className="header-phone-only">
									Date out: 
								</span>
								{ detail ? detail.dateout : null }
							</p>
						</div>
						<div className="admin-storage-table-content-lower">
							<div className="admin-storage-table-content-observation-upper">
							<p className="admin-storage-table-content-observation">
								<span className="header-phone-only">
									Date out: 
								</span>
									 { detail ? detail.notes : null }
								</p>
							</div>
						</div>
					</div>
				
			</div>

		</div>
	)
}

export default AdminStorageTableContent
