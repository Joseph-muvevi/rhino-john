import {
  faChevronRight,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import "./shipmentdatatable.css";
import moment from "moment"

const ShipmentTableHeader = ({ headers }) => {
  const header = headers;
  console.log("This is from table header",header)

  const [date, setDate] = useState({})

  useEffect(() => {
	  if (headers){
		setDate(headers.currentdate)
	  }
  }, [])

  console.log("we are the headers", headers)

  const dateString = moment(date).format('MMMM Do YYYY') 
  console.log(dateString, "the date string")

  return (
	<>
		<div className="shipment-table-headers-client">
			<div className="font-awesome-sign-alt-icon">
				<FontAwesomeIcon icon={faSignOutAlt} color="white" size="2x" />
			</div>
			<div className="header-info-container">
				<div className="shipment-table-headers-left">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-flex">
							Tracking number :
							<span className="grey-item-container-shipment">
								{header ? header.trackno : null}
							</span>
						</h3>
						<h3 className="shipment-table-headers-p">
						<span className="grey-item-container-shipment-arrow">
							{header ? header.notes : null}
						</span>
						</h3>
						<h3 className="shipment-table-headers-h3">
							Shipper
						</h3>
						<p className="shipment-table-headers-p">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							
							{ header ? header.company : null }
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							{ header ? header.shipaddress : null }
						</p>
					</div>
				</div>
				<div className="shipment-tabe-headers-middle">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3">
						{ header ? dateString.toString() : null }
						</h3>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Origin Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="fontawesome-chrevron"
									color="white"
								/>
								{header ? header.departurecity : null}
							</p>
						</div>
						<div className="h3-p-enclosing">
							<h3 className="shipment-table-headers-h3">
								Destination Service Area :
							</h3>
							<p className="shipment-table-headers-p">
								<FontAwesomeIcon
									icon={faChevronRight}
									size="1x"
									className="fontawesome-chrevron"
									color="white"
								/>
								{header ? header.arrivalcity : null}
							</p>
						</div>
					</div>
				</div>
				<div className="shipment-tabe-headers-right">
					<div className="shipment-table-headers-body">
						<h3 className="shipment-table-headers-h3-estimated">
							Estimated delivery :
						</h3>
						<p className="shipment-table-headers-info">
							{header ? header.arrivaldate : null}
						</p>
						<p className="shipment-table-headers-info">
							By End of Day
						</p>
						<h3 className="shipment-table-headers-h3">
							Consignee
							{/* {header ? header.fullnames : null} */}
						</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							
							{ header ? header.consigncompany : null }
						</p>
						<h3 className="shipment-table-headers-h3">Address</h3>
						<p className="shipment-table-headers-p">
							{/* {header ? header.address : null} */}
							<FontAwesomeIcon
								icon={faChevronRight}
								className="fontawesome-chrevron"
								color="white"
							/>
							{ header ? header.consignaddress : null }
						</p>
						<div className="shipment-table-headers-h3-sign">
							<h3 className="shipment-table-headers-h3">Signed for by :</h3>
							<p className="shipment-table-headers-p-sign">
								{ header ? header.collectedby : null }
								{/*
									if collected enter [SINGED UP FOR BY NAME OF THE RECEIVER]
								*/}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  );
};

export default ShipmentTableHeader;
