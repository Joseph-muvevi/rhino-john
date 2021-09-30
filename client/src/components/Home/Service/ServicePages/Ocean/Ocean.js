import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import OceanBanner from './OceanBanner/OceanBanner'
import OceanContent from './OceanContent/OceanContent'
import OceanFooter from './OceanFooter/OceanFooter'

const Ocean = () => {
	return (
		<div className="storage">
			<Navbar/>
			<OceanBanner/>
			<OceanContent/>
			<OceanFooter/>
		</div>
	)
}

export default Ocean
