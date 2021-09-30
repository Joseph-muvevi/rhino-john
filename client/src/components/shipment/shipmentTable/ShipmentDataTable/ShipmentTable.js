import React, { useState } from "react";
import "../../shipment.css";
import axios from "axios";
import ShipmentCard from "./ShipmentCard.js";
import Navbar from "../../../Navbar/Navbar";

const ShipmentTable = () => {
  const [trackNumber, setTrackNumber] = useState("")
  const [shipment, setShipment] = useState([])



  const handleTrackno = (e) => {
	setTrackNumber(e.target.value)
  }

  const trackItem = (e) => {
	e.preventDefault()
		axios.get(`http://localhost:8080/api/logisticsrecords`)
		.then(res => {
		  setShipment(res.data)
		})
		.catch()
  }
  const result = shipment.find( ({ trackno }) => trackno === trackNumber)

//   const filterItems = shipment.filter(({trackno}) => trackno === trackNumber)
  const filterItems = shipment.filter(({trackno}) => trackno === trackNumber)



  console.log("shipment data array", shipment)
  return (
	<div className="shipping">
	  <Navbar/>
	  <div style={{height: "50px"}} className="shipment-table">
		<form onSubmit={trackItem} className="shipping-table-form" >
			<input type="text" placeholder="Insert Track number" name="tracknumber"
					onChange={handleTrackno} value={trackNumber} required/>
			<button type="submit"> Search </button>
		</form>
	  </div>
	  {shipment || shipment !== undefined ? (
		<ShipmentCard  result={result} shipment={shipment} filtered = {filterItems} />
	  ) : (
		<div className="shipment-table-content">
		  <h1 className="shipment-table-header">Nothin here yet</h1>
		  <p className="shipment-table-p"></p>
		</div>
	  )}
	</div>
  );
};

export default ShipmentTable;
