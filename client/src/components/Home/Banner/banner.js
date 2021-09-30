import React from "react";
import "./banner.css";
import video from "../../../assets/Rhinojon background Laptop compressed.mp4";
import phonevideo from "../../../assets/Rhinojon background Laptop compressed.mp4"

const Banner = () => {
	return (
		<div className="the-homepage-banner" id="home-banner">
			<div className="the-homepage-banner">

				<video autoPlay loop  className="banner-video">
					<source className="the-banner-video" type="video/mp4" src={video} />
				</video>

				<div className="banner-phone-display">
					<video autoPlay loop  className="banner-video-phone">
						<source className="the-banner-video" type="video/mp4" src={phonevideo} />
					</video>
					<div className="banner-content">
						<p className="banner-content-p">
							Rhinojohn Prime Metal International Limited is a global company that has grown 
							to become one of the leading players in precious metals and stones value chain.
							We focus on trading, safekeeping, logistics and delivery of these valuable products.
						</p>
						<p className="banner-content-p">
							Our team of globally exposed experts have combined experiece of more than 20 years 
							in this trade and guarantee continous and flawless transactions. They will link you 
							to the right actors and dealers in the trade; from Miners (Artisanal and Industrial), 
							Buyers, Sellers, Intermediaries, Refiners and Gemologist
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
