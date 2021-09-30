import React, {useState, useEffect} from 'react'
import "./dashboard.css"
import Analitics from './analitics/analitics'
import LogisticsForms from "../../User/UserForms/LogisticsForms/LogisticsForms"
import StorageForms from "../../User/UserForms/StorageForms/StorageForms"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DashNav from './DashNav/DashNav'
import DashboardHome from './DashBoardHome/DashboardHome'
import DashTable from './Tables/table'
import DashForms from "./DashForms/DashForms"
import Home from '../../Home/home'
import { Redirect } from 'react-router'
import AdminLogisticsTable from '../AdminLogisticsTable/AdminLogisticsTable'
import AdminStorageTable from '../AdminStorageTable/AdminStorageTable'
import LogisticsEditForms from '../UserForms/LogisticsEditForm/LogisticsEditForms'
import StorageEditForms from '../UserForms/StorageEditForms/StorageEditForms'
import DashboardShipmentIndividual from "../AdminLogisticsTable/DashboardShipmentIndividual/DashboardShipmentIndividual"
// import DashboardShipmentIndividual from './DashBoardHome/DashboardHomePages/DashShipmentTableAdmin/DashboardShipmentIndividual/DashboardShipmentIndividual'
import DashGeneralEnquiries from './DashBoardHome/DashboardHomePages/DashGeneralEnquiries/DashGeneralEnquiries'
import DashProductQuotation from './DashBoardHome/DashboardHomePages/DashProductQuotation/DashProductQuotation'
import DashProductShipment from './DashBoardHome/DashboardHomePages/DashProductShipped/DashProductShipped'
import DashShipmentQuotation from './DashBoardHome/DashboardHomePages/DashShipmentQuotation/DashShipmentQuotation'
import DashShipmentTableAdmin from './DashBoardHome/DashboardHomePages/DashShipmentTableAdmin/DashShipmentTableAdmin'
import DashStorageQuotation from './DashBoardHome/DashboardHomePages/DashStorageQuotation/DashStorageQuotation'
import DashStorageTableAdmin from './DashBoardHome/DashboardHomePages/DashStorageTableAdmin/DashStorageTableAdmin'
import DashProductStored from './DashBoardHome/DashboardHomePages/DashProductStored/DashProductStored'
import Users from './Users/Users'
import Adduser from './AddUser/Adduser'
import DashNavMobile from './DashNavMobile/DashNavMobile'


const Dashboard = () => {

	// =============DONT DELETE=============
	const tkt = localStorage.getItem("token")
	console.log("my tkt of the dashboard is", tkt)



	if (!tkt) {
	    return <Redirect to="/auth"/>
	}

	
	return (
		<Router  className="dashboard">
			<div className="dashboard-nav">
				<DashNav/>
			</div>
			<dash className="dashboard-nav-phone">
				<DashNavMobile/>
			</dash>
			<div className="dont-display">
				<DashboardHome/>
			</div>
			<Switch className="dashboard-main">
				<Route path="/" exact component={Home}/>
				<Route path="/register" component={Adduser}/>
				<Route path="/dashboard" exact component={DashboardHome}/>
				<Route path="/dashboard/analitics" component={Analitics}/>
				<Route path="/dashboard/users" component={Users}/>
				<Route path="/dashboard/add-user" component={Adduser}/>
				<Route path="/dashboard/tables" component={DashTable}/>
				<Route path="/dashboard/forms" component={DashForms}/>
				<Route path="/dashboard/logistics-form" component={LogisticsForms}/>
				<Route path="/dashboard/logistics/edit/logisticsform" component={LogisticsEditForms}/>
				<Route path="/dashboard/storage-form" component={StorageForms}/>
				<Route path="/dashboard/storage/edit/storageform" component={StorageEditForms}/>
				<Route path="/dashboard/admin/logistics-records" component={AdminLogisticsTable}/>
				<Route path="/dashboard/admin/storage-records" component={AdminStorageTable}/>
				<Route path="/dashboard/generalenquiries" component={DashGeneralEnquiries}/>
				<Route path="/dashboard/productquotation" component={DashProductQuotation}/>
				<Route path="/dashboard/productshipped" component={DashProductShipment}/>
				<Route path="/dashboard/shipmentquotation" component={DashShipmentQuotation}/>
				<Route path="/dashboard/shipmenttable" component={DashShipmentTableAdmin}/>
				<Route path="/dashboard/storagequotation" component={DashStorageQuotation}/>
				<Route path="/dashboard/storagetable" component={DashStorageTableAdmin}/>
				<Route path="/dashboard/productstored" component={DashProductStored}/>
				<Route path="/dashboard-shipmenttable-individual" component={DashboardShipmentIndividual}/>
				<Route path="/dashboard-shipmenttable-individual" component={DashboardShipmentIndividual}/>
			</Switch>
		</Router>
	)
}

export default Dashboard
