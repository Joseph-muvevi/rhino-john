import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import StorageBanner from './StorageBanner/StorageBanner'
import StorageContent from './StorageContent/StorageContent'
import StorageFooter from './StorageFooter/StorageFooter'

const Storage = () => {
    return (
        <div className="Storage">
            <Navbar/>
            <StorageBanner/>
            <StorageContent/>
            <StorageFooter/>
        </div>
    )
}

export default Storage
