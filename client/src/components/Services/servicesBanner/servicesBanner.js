import React from "react";
import "../service.css";

const ServicesBanner = () => {
	return (
		<div className="services-banner" id="services-banner">
			<div className="services-banner-content">
				<h3 className="services-banner-h3">Our Services</h3>
				<p className="services-banner-p">
					Kenya being the center hub in Africa with several connections to the
					rest of the world through accessible entry and exit points by air, sea
					and road, the existing infrastructures contribute to put Kenya the
					busiest transit point handling consignments from a multitude of
					origins to a multiple of destinations across the world.
				</p>
				<p className="services-banner-p">
					We are offering transport, logistics and customs clearance/handling
					services for local and international shipments providing full
					logistics activities of shipping, storage and security of consignment.
					We are operational in Kenya, with offices in big cities of Nairobi,
					Mombasa, Nakuru, Kisumu, Eldoret and in the main borders of Namanga,
					Busia and Malaba.
				</p>
			</div>
		</div>
	);
};

export default ServicesBanner;
