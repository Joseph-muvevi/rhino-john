import React from 'react'
import "../../shipment.css"

const StorageTableHeader = ({headers}) => {
    let header = headers
    console.log("Information from storage table header",header)
    return (
        <div className="storage-table-headers-client">
           <div className="storage-tabe-headers-left">
                <div className="storage-table-headers-body-head">
                    <h3 className="storage-table-headers-body-heading">
                        Ownership Details
                    </h3>
                    <div className="storage-table-headers-body">
                        <p className="storage-table-headers-p">
                            Name: {header? header.fullnames: null}
                        </p>
                        <p className="storage-table-headers-p">
                            ID NO: {header? header.idno: null}
                        </p>
                        <p className="storage-table-headers-p">
                            Address: {header? header.email: null}
                        </p>
                    </div>
                </div>
           </div>
           <div className="storage-table-headers-middle">
                <div className="storage-table-headers-body">
                    <h3 className="storage-table-headers-body-heading">
                        
                    </h3>
                    <div className="storage-table-headers-body">
                        <p className="storage-table-headers-p">
                            Tracking number: <span className="track-number-background"> 
                            {header? header.trackno: null}</span>
                        </p>
                        <p className="storage-table-headers-p">
                            Date in: {header? header.datein: null}<span style={{marginLeft: "35px"}}>Time: {header? header.intime: null}</span> 
                        </p>
                        <p className="storage-table-headers-p">
                            Date out: {header? header.dateout: null} <span style={{marginLeft: "23px"}}>Time: {header? header.outtime: null}</span> 
                        </p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default StorageTableHeader
