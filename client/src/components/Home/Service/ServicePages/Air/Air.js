import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import AirBanner from './AirBanner/AirBanner'
import AirContent from './AirContent/AirContent'
import AirFooter from './AirFooter/AirFooter'

const Air = () => {
    return (
        <div className="storage">
            <Navbar/>
            <AirBanner/>
            <AirContent/>
            <AirFooter/>
        </div>
    )
}

export default Air
