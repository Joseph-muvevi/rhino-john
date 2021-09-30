import React from "react";
import { Link } from "react-router-dom";
import "../Brokerage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileAlt,
  faPlaneDeparture,
  faShip,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const BrokerageContent = () => {
  return (
    <div className="brokerage-content">
      <div className="brokerage-content-content">
        <div className="brokerage-content-content-content">
          <div className="brokerage-content-content-left">
            <div className="brokerage-content-content-left-txt"></div>
          </div>
          <div className="brokerage-content-content-right">
            <div className="brokerage-content-right-cards">
              <p className="brokerage-content-right-cards-row">
                From our vast connection with fully licensed customs brokerage
                companies, we provide clients with the best services with regard
                to clearance of shipments with customs
              </p>
              <p className="brokerage-content-right-cards-row">
                Rhinojohn Prime Metal offers customs clearance services with the
                preparation and submission of documentation required for import,
                export and transit. Our team will guide you through any complex
                documentation process.
              </p>
              <p className="brokerage-content-right-cards-row"></p>
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
                <br />
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

export default BrokerageContent;
