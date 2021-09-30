import React from "react";
import "../Storage.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileAlt,
  faPlaneDeparture,
  faShip,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const StorageContent = () => {
  return (
    <div className="storage-content">
      <div className="storage-content-content">
        <div className="storage-content-content-content">
          <div className="storage-content-content-left"></div>
          <div className="storage-content-content-right">
            <div className="storage-content-right-cards">
              <p className="storage-content-right-cards-row">
                Rhinojohn Prime Metal also offers warehousing and storage
                services for minerals through available customs bonded
                warehouses and vaults at our facilities. The safety of mining
                products stored in our custody is guaranteed with the support of
                both government and private security services.
              </p>
              <div className="lower-button-group">
                <Link to="/service-type">
                  <button className="storage-content-button">
                    Request a quote
                  </button>
                </Link>
                <Link to="/quotation">
                  <button className="storage-content-button">
                    Make enquiry
                  </button>
                </Link>
              </div>
            </div>
            <div className="service-fontawesome-div">
              <HashLink
                to="/services-trade#trading-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Trade</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faCommentsDollar}
                />
              </HashLink>
              <HashLink
                to="/services-air#air-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Air</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faPlaneDeparture}
                />
              </HashLink>
              <HashLink
                to="/services-ocean#ocean-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Sea</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faShip}
                />
              </HashLink>
              <HashLink
                to="/services-land#land-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Land</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faShippingFast}
                />
              </HashLink>
              <HashLink
                to="/services-customs#brokerage-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Customs</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faFileAlt}
                />
              </HashLink>
              <HashLink
                to="/services-storage#storage-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Warehouse</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faWarehouse}
                />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageContent;
