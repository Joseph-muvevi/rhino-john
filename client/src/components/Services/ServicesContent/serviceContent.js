import React from "react";
import { HashLink } from "react-router-hash-link";
import "../service.css";

const ServiceContent = () => {
  return (
    <div className="services">
      <div className="service-content">
        <div className="service-content-bottom">
          <div className="service-content-values">
            <div className="service-content-values-row">
              <HashLink
                to="/services-trade#trade-banner"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-one"></div>
                <h4 className="service-content-values-h3">Trading</h4>
                <p className="service-content-values-p">
                  We have succeeded in establishing, over the years, a system of
                  partnership with the various actors and stakeholders in the
                  mining sector in Africa...
                </p>
              </HashLink>
              <HashLink
                to="/services-air#air-banner"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-two"></div>
                <h4 className="service-content-values-h3">Air Logistics</h4>
                <p className="service-content-values-p">
                  We provide air transport services for international deliveries
                  by cargo freight and chartered aircraft with major
                  destinations around the world...
                </p>
              </HashLink>
              <HashLink
                to="/services-ocean#ocean-banner"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-three"></div>
                <h4 className="service-content-values-h3">Ocean Logistics</h4>
                <p className="service-content-values-p">
                  We offer ocean freight services for several destinations in
                  the world and for each volume, both LCL (Less Than Container
                  Load) as FCL (Full Container Load)...
                </p>
              </HashLink>
              <HashLink
                to="/services-land#land-banner"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-four"></div>
                <h4 className="service-content-values-h3">Land logistics</h4>
                <p className="service-content-values-p">
                  We have teams of freight forwarders and road transport service
                  providers experienced with good knowledge and experience...
                </p>
              </HashLink>
            </div>

            <div className="service-content-values-row">
              <HashLink
                to="/services-customs#brokerage-banner"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-five"></div>
                <h4 className="service-content-values-h3">Customs Clearance</h4>
                <p className="service-content-values-p">
                  From our vast connection with fully licensed customs brokerage
                  companies, we provide clients with the best services with
                  regard to clearance of...
                </p>
              </HashLink>
              <HashLink
                to="/services-storage"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-six"></div>
                <h4 className="service-content-values-h3">Storage</h4>
                <p className="service-content-values-p">
                  Rhinojohn Prime Metal also offers warehousing and storage
                  services for minerals through available customs bonded
                  warehouses and vaults...
                </p>
              </HashLink>
              <HashLink
                to="/services-refinery"
                className="service-content-values-item"
              >
                <div className="service-content-card-image-seven"></div>
                <h4 className="service-content-values-h3">Refinery</h4>
                <p className="service-content-values-p">
                  Gold refinery is set to be constructed in Nairobi in Kenya, by
                  end of year 2023, to offer small-scale and artisanal miners
                  the means to add value from gold extracted ...
                </p>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
