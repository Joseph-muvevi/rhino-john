import { faGem, faInfoCircle, faPlaneDeparture, faShippingFast, faTable, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import React, {useState, useEffect} from "react";
import "../dashboard.css";
import axios from "axios"
import LogisticsQuotation from "../../../Forms/LogisticsQuotation/LogisticsQuotation";

const DashboardCards = () => {

	const [logdata, setLogData] = useState([])
	const [storageData, setStorageData] = useState([])
	const [quotation, setQuotation] = useState([])
	const [logquotation, setLogQuotation] = useState([])
	const [storageQuotation, setStorageQuotation] = useState([])
	const [productQuotation, setProductQuotation] = useState([])

	
	const getLogData = () => {
		axios.get("http://localhost:8080/api/logisticsrecords")
		.then(res => {
			setLogData(res.data)
			console.log(res)
		})
		.catch(err => console.log(err))
	}
	
	const getQuotationData = () => {
		axios.get("http://localhost:8080/api/quotation")
		.then(res => {
			setQuotation(res.data)
			console.log(res)
		})
		.catch(err => console.log(err))
	}
	
	const getStorageData = () => {
		axios.get("http://localhost:8080/api/storageshipment")
		.then(res =>{
			setStorageData(res.data)
		})
		.catch(err => console.log(err))
	}
	
	const getLogisticsQuotation = () => {
		axios.get("http://localhost:8080/api/logisticsquotation")
		.then(res =>{
			setLogQuotation(res.data)
		})
		.catch(err => console.log(err))
	}
	
	const getStorageQuotation = () => {
		axios.get("http://localhost:8080/api/storagequotation")
		.then(res =>{
			setStorageQuotation(res.data)
		})
		.catch(err => console.log(err))
	}
	
	const getProductQuotation = () => {
		axios.get("http://localhost:8080/api/productquotation")
		.then(res =>{
			setProductQuotation(res.data)
		})
		.catch(err => console.log(err))
	}

	useEffect(() => {
		getLogData()
		getStorageData()
		getQuotationData()
		getLogisticsQuotation()
		getStorageQuotation()
		getProductQuotation()
	}, [])

  return (
		<div className="dashboard-cards">
			<div className="dashboard-cards-container">

				<HashLink to="/dashboard/productquotation#product-quotation"className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faGem}/>
					</div>
					<h3 className="dashboard-card-h3">
						{ productQuotation ? productQuotation.length : "No product quotation yer"}
					</h3>
					<p className="dashboard-card-p">
						Product quotations
					</p>
				</HashLink>
			
				<HashLink to ="/dashboard/generalenquiries#product-enquiries"  className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faInfoCircle}/>
					</div>
					<h3 className="dashboard-card-h3">
						{quotation ? quotation.length : "No general enquiries yet"}
					</h3>
					<p className="dashboard-card-p">
						General Enquiries
					</p>
				</HashLink>
			
				<HashLink to="/dashboard/storagequotation#storage-quotation"className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faWarehouse}/>
					</div>
					<h3 className="dashboard-card-h3">
						{ storageQuotation ? storageQuotation.length : "No storage quotations yet" }
					</h3>
					<p className="dashboard-card-p">
						Storage quotation
					</p>
				</HashLink>
			</div>
			<div className="dashboard-cards-container">
			
				<HashLink to="/dashboard/shipmentquotation#shipment-quotation" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faShippingFast}/>
					</div>
					<h3 className="dashboard-card-h3">
						{ logquotation ? logquotation.length : "No storage quotation data yet" }
					</h3>
					<p className="dashboard-card-p">
						Shipment quotation
					</p>
				</HashLink>
			
				<HashLink to="/dashboard/shipmenttable#shipment-table"className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faTable}/>
					</div>
					<h3 className="dashboard-card-h3">
						{ logdata ? logdata.length : "No shipments yet" }
					</h3>
					<p className="dashboard-card-p">
						Shipment table
					</p>
				</HashLink>
			
				<HashLink to="/dashboard/storagetable#storage-table" className="dashboard-card">
					<div className="dashboard-card-circle">
						<FontAwesomeIcon className="dashboard-card-icon" color="white" size="4x" icon={faTable}/>
					</div>
					<h3 className="dashboard-card-h3">
						{ storageData ?  storageData.length : "No storage data available yet"}
					</h3>
					<p className="dashboard-card-p">
						Storage table
					</p>
				</HashLink>
			
			</div>
		</div>
  );
};

export default DashboardCards;
