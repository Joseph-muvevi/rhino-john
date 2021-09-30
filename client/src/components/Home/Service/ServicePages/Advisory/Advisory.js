import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import AdvisoryBanner from './AdvisoryBanner/AdvisoryBanner'
import AdvisoryContent from './AdvisoryContent/AdvisoryContent'
import AdvisoryFooter from './AdvisoryFooter/AdvisoryFooter'

const Advisory = () => {
    return (
        <div className="storage">
            <Navbar/>
            <AdvisoryBanner/>
            <AdvisoryContent/>
            <AdvisoryFooter/>
        </div>
    )
}

export default Advisory
