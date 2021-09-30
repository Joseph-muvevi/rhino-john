import { faAddressBook, faGem, faShippingFast,faSearchLocation, faHeadset, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import "./LowerNavs.css"
import { NavLink} from "react-router-dom"

const LowerNavs = () => {
	return (
		<div className="lower-nav">
			<div className="lower-nav-items">
				<NavLink to="/about" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faAddressBook} size="2x" />
						About
				</NavLink>
				<NavLink to="/products" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faGem} size="2x"/>
					Product
				</NavLink>
				<NavLink to="/services" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faShippingFast} size="2x"/>
					Services
				</NavLink>
				<NavLink to="/shipment" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faSearchLocation} size="2x"/>
					Track
				</NavLink>
				<NavLink to="/contact" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faHeadset} size="2x"/>
					Contact
				</NavLink>
				<NavLink to="/auth" className="lower-nav-single-item">
					<FontAwesomeIcon icon={faLock} size="2x"/>
					Login
				</NavLink>
			</div>
		</div>
	)
}

export default LowerNavs
