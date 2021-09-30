import React from 'react'
import {StorageTable} from "./StorageTable"

export const StorageTableParent = () => {

   
   

    return (
       <div className="dash-tables-parent">
       {
          [1, 2, 3, 4].map(item => <StorageTable/>)
       }
          
       </div>
    )
}
