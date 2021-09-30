import { faAddressBook, faGem, faHeadphones, faHome, faLock, faMarker, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from "react-router-hash-link"
import React from 'react'
import "./Navbar.css"
import logo from "../../assets/Rhino card logo - PNG.png"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content">
				<img src={logo} alt="Rhino Jon logo" className="navbar-logo"/>
				<ul className="navbar-ul">
					<HashLink className="navbar-li" to="/#home-banner">
						<FontAwesomeIcon icon={faHome}/>
						<div className="nav-trigger">
							Home
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/about#about-banner">
						<FontAwesomeIcon icon={faAddressBook}/>
						<div className="nav-trigger">
							About
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/products#product-banner">
						<FontAwesomeIcon icon={faGem}/>
						<div className="nav-trigger">
							Products
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/services#services-banner">
						<FontAwesomeIcon icon={faShippingFast}/>
						<div className="nav-trigger">
							Services
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/shipment#track-banner">
						<FontAwesomeIcon icon={faMarker}/>
						<div className="nav-trigger">
							Track
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/contact#contact-banner">
						<FontAwesomeIcon icon={faHeadphones}/>
						<div className="nav-trigger">
							Contact
						</div>
					</HashLink>
					<HashLink className="navbar-li" to="/auth">
						<FontAwesomeIcon icon={faLock}/>
						<div className="nav-trigger">
							Login
						</div>
					</HashLink>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
