import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTable,
	faUserTie,
	faUsers,
	faUserPlus,
	faHouseUser,
	faSignOutAlt,
	faHome,
} from "@fortawesome/free-solid-svg-icons";
import "../dashboard.css";
import logo from "../../../../assets/Rhino card logo - PNG.png";

const DashNav = () => {

	const signout = () => {
		localStorage.removeItem("token")
		window.location.replace("http://localhost:3000/auth"); 
	}

	// const takemehome = () => {
	// 	return <Redirect to="/"/>
	// }

	return (
		<div className="dash-nav">
			<div className="dash-nav-user-info">
				<div className="dash-nav-user-logo">
					<img
						src={logo}
						alt="Rhino john logo"
						title="Rhino john logo"
						className="dash-nav-logo"
					/>
				</div>
				<div className="dash-nav-user-info-card">
					<FontAwesomeIcon icon={faUserTie} size="2x" />
					<h3 className="dash-nav-user-h3">User's name</h3>
				</div>
			</div>
			<div className="dash-nav-ul">
				<HashLink to="/dashboard#dashboard" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faHouseUser} />
						<p className="dash-nav-li-items-p">Dashboard</p>
					</div>
				</HashLink>
				<HashLink to="/dashboard/users#users" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faUsers} />
						<p className="dash-nav-li-items-p">Users</p>
					</div>
				</HashLink>
				<HashLink to="/dashboard/add-user" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faUserPlus} />
						<p className="dash-nav-li-items-p">Register a User</p>
					</div>
				</HashLink>
				{/* <HashLink onCLick={() => takemehome()} to="/"  className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faHome} />
						<p className="dash-nav-li-items-p">Return Home</p>
					</div>
				</HashLink> */}
				<HashLink onClick={() => signout()} to="/auth" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<p className="dash-nav-li-items-p">Sign out</p>
					</div>
				</HashLink>
			</div>
		</div>
	);
};

export default DashNav;
