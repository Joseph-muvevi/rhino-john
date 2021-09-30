import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Air.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faFileAlt,
  faPlaneDeparture,
  faShip,
  faShippingFast,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const AirContent = () => {
  return (
    <div className="air-content">
      <div className="air-content-content">
        <div className="air-content-content-content">
          <div className="air-content-content-left">
            <div className="air-content-content-left-txt"></div>
          </div>
          <div className="air-content-content-right">
            <div className="air-content-right-cards">
              <p className="air-content-right-cards-row">
                We provide air transport services for international deliveries
                by cargo freight and chartered aircraft with major destinations
                around the world. Very often, in order to ensure secure
                deliveries by avoiding countless transshipments for deliveries
                to distant destinations, we offer charter flights for direct
                transport.
              </p>
              <p className="air-content-right-cards-row">
                Thanks to the development of our network we can offer you a full
                range of services to and from anywhere in the world. By
                referring to blue chip airlines, we are able to control transit
                times, space allocation and offer greater flexibility allowing
                us to provide premium service to you and your customers. Our
                international network and our extensive international agency
                will always find the right solution to get your product where it
                needs to be.
              </p>
              <br />
              <div className="about-welcome-content-values-h3">
                <div className="about-welcome-start"></div>
                <h5 className="about-welcome-content-values-header">
                  Air freight services
                </h5>
              </div>
              <p className="air-content-right-cards-row">
                To make the air cargo transport operations easy, we work with
                providers who have air cargo facilities conveniently located
                near airports, thereby streamlining the movement of urgent air
                cargo shipments. With their support, we are ensuring a smooth
                transition on the ground for all last mile delivery
                requirements. As a chain service for picking up cargo from the
                place of departure to the final destination, we offer:
              </p>
              <ul className="air-content-right-cards-ul">
                <li className="air-content-right-cards-list">
                  Airport to airport services
                </li>
                <li className="air-content-right-cards-list">
                  Door to airport services
                </li>
                <li className="air-content-right-cards-list">
                  Airport to door services
                </li>
                <li className="air-content-right-cards-list">
                  Tailored solutions taking into account the particularity of
                  the cargo and the wishes of the customer.
                </li>
              </ul>
              <br />
              <div className="about-welcome-content-values-h3">
                <div className="about-welcome-start"></div>
                <h5 className="about-welcome-content-values-header">
                  Shipment tracking
                </h5>
              </div>
              <p className="air-content-right-cards-row">
                We understand that air freight is a service that must meet
                deadlines. We therefore ensure through our online portal the
                visibility of the movement of our shipments with real-time data
                anywhere in the world.
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

export default AirContent;
