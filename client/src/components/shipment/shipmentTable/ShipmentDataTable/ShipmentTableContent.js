import React, { useState, useEffect } from "react";
import "../../shipment.css";
import moment from "moment";

const ShipmentTableContent = ({ array, dates }) => {
	const content = array;
	console.log(content, "this is the tablecontent data");

	const [list, setList] = useState([])
	const [date, setDate] = useState("")

	const datelists = [];

	// console.log(typeof(content.createdAt), "i am the content date")

	// let mydate = content.createdAt.split("T")

	// let theDate = mydate[0]

	// let momentDate = moment(theDate).format("dddd MMMM Do YYYY")
	// // console.log(momentDate, "This is split date only")

	// const currentDateNow = array.currentdate
	// const formated = moment(currentDateNow).format("dddd MMMM Do YYYY")
	// console.log("i am the input date", formated)
	// console.log("i am the created at date", momentDate)


	const listItem = [1]

	useEffect(() => {
		setDate(content.currentdate)
		setDate(content._id)
	}, []);



	const dateString = moment(date).format("dddd MMMM Do YYYY");
	console.log(dateString)
	// console.log(dateString, "the date string")

	return (
		<div key={content ? content._id : null} className="shipment-content-table">
			<div className="shipment-content-table-content">
				{/* {
			content.createdAt !== content.date ? (
				): <p>There is nothin here</p>
			} */}
				{console.log("And the date is", date)	}

				{	
					listItem.length === 1? listItem.map ( 
						el => 
						<div className="shipment-content-table-content-topic">
							<p className="shipment-content-table-content-topic-hash">#</p>
							<p className="shipment-content-table-content-topic-date">
								{/* {content ? dateString.toString()  : null} */}
								{content ? content._id  : null}
							</p>
							<p className="shipment-content-table-content-topic-location">
								Location
							</p>
							<p className="shipment-content-table-content-topic-time">Time</p>
							<p className="shipment-content-table-content-topic-pieces">
								Pieces
							</p>
							{console.log(listItem)}
						</div>
					 ) : <p>D0nt print me</p>
				}

				{[content].map(() => (
					<>
						<div className="shipment-content-table-content-info">
							<p className="shipment-content-table-content-topic-hash">
								<span className="shipment-header-phone-only">
									No: 
								</span>
								{array ? array.length : null}
							</p>
							<p className="shipment-content-table-content-topic-date">
								<span className="shipment-header-phone-only">
									Observation: 
								</span>
								{content ? content.notes : null}
							</p>
							<p className="shipment-content-table-content-topic-location">
								<span className="shipment-header-phone-only">
									Location : 
								</span>
								{content ? content.currentlocation : null}
							</p>
							<p className="shipment-content-table-content-topic-time">
								<span className="shipment-header-phone-only">
									Time : 
								</span>
								{content ? content.timeevents : null}
							</p>
							<p className="shipment-content-table-content-topic-pieces">
								<span className="shipment-header-phone-only">
									Pieces: 
								</span>
								{content ? content.pieces : null} pieces
							</p>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default ShipmentTableContent;
