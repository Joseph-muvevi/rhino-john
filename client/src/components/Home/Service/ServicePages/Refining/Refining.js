import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import RefineryBanner from './RefiningBanner/RefiningBanner'
import RefineryContent from './RefiningContent/RefiningContact'
import RefineryFooter from './RefiningFooter/RefiningFooter'

const Refining = () => {
    return (
		<div className="storage">
			<Navbar/>
			<RefineryBanner/>
            <RefineryContent/>
			<RefineryFooter/>
		</div>
    )
}

export default Refining
