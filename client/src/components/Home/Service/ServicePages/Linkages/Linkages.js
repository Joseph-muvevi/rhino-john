import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import LinkagesBanner from './LinkagesBanner/LinkagesBanner'
import LinkagesContent from './LinkagesContent/LinkagesContent'
import LinkagesFooter from './LinkagesFooter/LinkagesFooter'

const Linkages = () => {
    return (
        <div className="storage">
            <Navbar/>
            <LinkagesBanner/>
            <LinkagesContent/>
            <LinkagesFooter/>
        </div>
    )
}

export default Linkages
