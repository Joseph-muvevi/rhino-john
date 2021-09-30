import React from "react";
import { Link } from "react-router-dom";
import "../Refining.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileAlt,
  faPlaneDeparture,
  faShip,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const RefineryContent = () => {
  return (
    <div className="refinery-content">
      <div className="refinery-content-content">
        <div className="refinery-content-content-content">
          <div className="refinery-content-content-left"></div>
          <div className="refinery-content-content-right">
            <div className="refinery-content-right-cards">
              <p className="refinery-content-right-cards-row">
                Gold refinery is set to be constructed in Nairobi, Kenya, by end
                of year 2023, to offer small-scale and artisanal miners the
                means to add value from gold extracted from mines across the
                East and Central Africa region and get substantial incomes while
                trading for the international market with the gold increased
                purity to 99.99%.
              </p>
              <p className="refinery-content-right-cards-row">
                This facility will provide additional services including but not
                limited to recycling of scrap precious metals, melting and
                conversion of gold from dusts, nuggets into gold bars, precious
                metals quality assay and minting.
              </p>
              <p className="refinery-content-right-cards-row">
                Currently, for the purpose of easy trade, we are operating a
                melting facility for form conversion, recycling and assaying of
                precious metals mainly for exports.
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
              <Link
                to="/services-trade"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Trade</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faCommentsDollar}
                />
              </Link>
              <Link
                to="/services-air"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Air</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faPlaneDeparture}
                />
              </Link>
              <Link
                to="/services-refinery"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Sea</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faShip}
                />
              </Link>
              <Link
                to="/services-land"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Land</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faShippingFast}
                />
              </Link>
              <Link
                to="/services-customs#brokerage-banner"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Customs</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faFileAlt}
                />
              </Link>
              <Link
                to="/services-storage"
                className="service-fontawesome-icon-card"
              >
                <p className="service-font-awesome-card-p">Warehouse</p>
                <FontAwesomeIcon
                  className="the-service-fontawesome-icon"
                  icon={faWarehouse}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefineryContent;
