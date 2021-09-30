import React from 'react'
import StorageTableContent from './StorageTableContent'
import StorageTableHeader from './StorageTableHeader'
import "../../shipment"

const StorageCard = ({result}) => {

    let results = result


    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                {
                    results ? (
                        <>
                            <StorageTableHeader headers = {results}/>
                            <StorageTableContent content = {results}/> 
                        </>
                        ): <p className="terniary-condition-p">
                                Track your storage
                            </p>
                }
            </div>
        </div>
    )
}

export default StorageCard
