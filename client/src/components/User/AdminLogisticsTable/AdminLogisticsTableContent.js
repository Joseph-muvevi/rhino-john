import React, {useState, useEffect} from 'react'
import "./adminlogisticstable.css"
import { HashLink } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'

const AdminLogisticsTableContent = ({data, length}) => {
	const [id, setId] = useState("")
	let info = data
	console.log(info)

	const handleSetId = () => {
		setId(info._id)

	}

	useEffect(() => {
		handleSetId()
	}, [])

	console.log(id)


	return (
		<div  className="logistics-content-table">
			<div className="logistics-content-table-content">
				   
					<div  className="logistics-content-table-content-info">
						<div className="logistics-content-table-content-topic-upper">
							<p className="logistics-content-table-content-topic-p-number">
								<span className="header-phone-only">
									No: 
								</span>
								{ length + 1 }
							</p>
							<p className="logistics-content-table-content-topic-p-track">
								<span className="header-phone-only">
									Track Number: 
								</span>
								{info ? info.trackno : null}
							</p>
							<p className="logistics-content-table-content-topic-p-fullnames">
								<span className="header-phone-only">
									Product name: 
								</span>
								{info ? info.fullnames : null}    
							</p>
							<p className="logistics-content-table-content-topic-p-product">
								<span className="header-phone-only">
									No: 
								</span>
								{info ? info.product : null}
							</p>
							<p className="logistics-content-table-content-topic-p-address">
								<span className="header-phone-only">
									Addess: 
								</span>
								{info ? info.shipaddress : null}
							</p>
							<p className="logistics-content-table-content-topic-p-weight">
								<span className="header-phone-only">
									Weight unit: 
								</span>
								{info ? info.weight : null} {info ? info.weightunit : null}
							</p>
							<p className="logistics-content-table-content-topic-departure-city">
								<span className="header-phone-only">
									City DExparted: 
								</span>
								 {info ? info.departurecity : null}
							</p>
							<p className="logistics-content-table-content-topic-departure-country">
								<span className="header-phone-only">
									Country Departed: 
								</span>
								{info ? info.departurecountry : null}
							</p>
							<p className="logistics-content-table-content-topic-arrival-city">
								<span className="header-phone-only">
									Arrival City: 
								</span>
								{info ? info.arrivalcity : null}
							</p>
							<p className="logistics-content-table-content-topic-arrival-country">
								<span className="header-phone-only">
									Arrival Country: 
								</span>
								{info ? info.arrivalcountry : null}
							</p>
							<p className="logistics-content-table-content-topic-status">
								<span className="header-phone-only">
									Status: 
								</span>
								{info ? info.status : null}
							</p>
						</div>
						<div className="logistics-content-table-content-topic-lower">
								
							<div className="logistics-content-table-content-topic-lower-observation">
								<p style={{marginLeft: "12px"}} className="logistics-content-table-content-topic-p">
								<span className="header-phone-only">
									Observations : 
								</span>
									{info ? info.notes : null}
								</p>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}

export default AdminLogisticsTableContent
