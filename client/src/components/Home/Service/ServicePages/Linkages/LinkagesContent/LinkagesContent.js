import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Linkages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileAlt,
  faPlaneDeparture,
  faShip,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const LinkagesContent = () => {
  return (
    <div className="linkages-content">
      <div className="linkages-content-content">
        <div className="linkages-content-content-content">
          <div className="linkages-content-content-left">
            <div className="linkages-content-content-left-txt"></div>
          </div>
          <div className="linkages-content-content-right">
            <div className="linkages-content-right-cards">
              <p className="linkages-content-right-cards-row">
                We have teams of freight forwarders and road transport service
                providers experienced with good knowledge and experience.
              </p>
              <p className="linkages-content-right-cards-row">
                Through our strong partnership network in Africa, we provide
                sustainable road and rail transport solutions for mining
                products from their places of extraction and production to
                places of transit and their final destinations. Our coverage
                extend from West Africa to South Africa through East and Central
                Africa.
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

export default LinkagesContent;
