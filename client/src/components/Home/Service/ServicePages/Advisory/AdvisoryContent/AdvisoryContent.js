import React from "react";
import "../Advisory.css";
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

const AdvisoryContent = () => {
  return (
    <div className="advisory-content">
      <div className="advisory-content-content">
        <div className="advisory-content-content-content">
          <div className="advisory-content-content-left">
            <div className="advisory-content-content-left-txt"></div>
          </div>
          <div className="advisory-content-content-right">
            <div className="advisory-content-right-cards">
              <p className="advisory-content-right-cards-row">
                We have succeeded in establishing, over the years, a system of
                partnership with the various actors and stakeholders in the
                mining sector in Africa, mainly those operating in countries
                with significant mining reserves and operating mines. Among
                these actors, we find artisanal miners, small and medium scale
                production mines and mining cooperatives. The other players are
                traders and commission agents.
              </p>
              <p className="advisory-content-right-cards-row">
                We organized ourselves and gained notoriety as an agency for
                facilitating commercial contracts between sellers and buyers of
                mining products.
              </p>
              <p className="advisory-content-right-cards-row">
                At a reasonable pre-negotiated fee we source, inspect, transport
                and refine precious stones on behalf of private investors.
              </p>
              <HashLink to="/service-type">
                <button className="advisory-content-button">
                  Request a quote
                </button>
              </HashLink>
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

export default AdvisoryContent;
