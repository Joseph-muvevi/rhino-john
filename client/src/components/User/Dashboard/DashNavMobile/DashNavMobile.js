import { faAddressBook, faGem, faHome, faHouseUser, faLock, faMarker, faShippingFast, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from "react-router-hash-link"
import React from 'react'
import "./DashNavMobile.css"

const DashNavMobile = () => {
	
	const signout = () => {
		localStorage.removeItem("token")
		window.location.replace("http://localhost:3000/auth"); 
	}

	return (
		<div className="dash-mobile-navbar">
			<div className="dash-mobile-navbar-content">
				<ul className="dash-mobile-navbar-ul">
					<HashLink className="dash-mobile-navbar-li" to="/dashboard#dashboard">
						<FontAwesomeIcon className="dash-mobile-navbar-fonts" icon={faHouseUser}/>
						
					</HashLink>
					<HashLink className="dash-mobile-navbar-li" to="/dashboard/users#users">
						<FontAwesomeIcon className="dash-mobile-navbar-fonts" icon={faUsers}/>
						
					</HashLink>
					<HashLink className="dash-mobile-navbar-li" to="/dashboard/add-user">
						<FontAwesomeIcon className="dash-mobile-navbar-fonts" icon={faUserPlus}/>
						
					</HashLink>
					<HashLink className="dash-mobile-navbar-li"  onClick={() => signout()} to="/auth" >
						<FontAwesomeIcon className="dash-mobile-navbar-fonts" icon={faSignOutAlt}/>
						
					</HashLink>
				</ul>
			</div>
		</div>
	)
}

export default DashNavMobile
