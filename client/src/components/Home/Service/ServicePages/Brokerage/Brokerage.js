import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import BrokerageBanner from './BrokerageBanner/BrokerageBanner'
import BrokerageContent from './BrokerageContent/BrokerageContent'
import BrokerageFooter from './BrokerageFooter/BrokerageFooter'

const Brokerage = () => {
    return (
        <div className="storage">
            <Navbar/>
            <BrokerageBanner/>
            <BrokerageContent/>
            <BrokerageFooter/>
        </div>
    )
}

export default Brokerage
