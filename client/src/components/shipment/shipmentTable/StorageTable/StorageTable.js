import React, { useState } from "react";
import "../../shipment.css";
import axios from "axios";
import Navbar from "../../../Navbar/Navbar";
import StorageCard from "./StorageCard";

const StorageTable = () => {;
  const [trackNumber, setTrackNumber] = useState("")
  const [storage, setStorage] = useState([])

  const handleTrackno = (e) => {
    setTrackNumber(e.target.value)
  }

  const trackItem = (e) => {
    e.preventDefault()
        axios.get(`http://localhost:8080/api/storageshipment`)
        .then(res => {
          setStorage(res.data)
        })
        .catch(err => console.log(err))
  }

  const result = storage.find( ({ trackno }) => trackno === trackNumber)
  console.log("testing the storage", result)


  return (
    <div className="shipping">
        <Navbar/>
        <div className="shipping-input-groups">
          <div style={{height: "50px", marginBottom: "30px"}} className="storage-table">
            <form onSubmit={trackItem} className="shipping-table-form" >
                <input type="text" placeholder="Insert Track number" name="tracknumber" 
                        onChange={handleTrackno} value={trackNumber} required/>
                <button type="submit"> Track </button>
            </form>
          </div>

        {storage || storage !== undefined ? (
          <StorageCard  result={result} />
        ) : (
          <div className="storage-table-content">
            <h1 className="storage-table-header">Nothin here yet</h1>
            <p className="storage-table-p"></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorageTable;
