import React from "react";
import { Link } from "react-router-dom";
import "../product.css";

const productContent = () => {
	return (
		<div className="products">
			<div className="product-content">
				<div className="product-content-bottom">
					<div className="product-content-values">
						<div className="product-content-values-row">
							<div className="product-content-values-item">
								<div className="product-content-card-image-one"></div>
								<h5 className="product-content-values-h3">Gold</h5>
								<p className="product-content-values-p">
									Gold is one of all the minerals mined from the Earth, none is
									more useful than gold. Its usefulness is derived from a
									diversity of special properties. It can be found in the form
									of dust, nugget and bar when processed.
								</p>
							</div>
							<div className="product-content-values-item">
								<div className="product-content-card-image-seven"></div>
								<h5 className="product-content-values-h3">Silver</h5>
								<p className="product-content-values-p">
									Silver is known as a "precious metal" because it is rare and
									because it has a high economic value. It is valuable because
									it has a number of physical properties that make it the best
									possible metal for many different uses in Jewelry, tableware,
									coins, electronics, photographic films, ornaments.
								</p>
							</div>
							<div to="/services-ocean" className="product-content-values-item">
								<div className="product-content-card-image-three"></div>
								<h5 className="product-content-values-h3">Copper cathode</h5>
								<p className="product-content-values-p">
									Copper cathode is the primary raw material input for the
									automotive, electronics and constructions industries and found
									in over 450 alloys. Copper marketing business supplies a range
									of customers in the automotive, electronics and constructions
									industries.
								</p>
							</div>
						</div>

						<div className="product-content-values-row">
							<div
								to="/services-air"
								className="product-content-values-item-diamond"
							>
								<div className="product-content-card-image-two"></div>
								<h5 className="product-content-values-h3">Diamond</h5>
								<p className="product-content-values-p">
									Diamond is the world's most popular gemstone. Most diamonds
									are brown or yellow in color. The jewelry industry has favored
									colorless diamonds or those that have a color so subtle that
									it is difficult to notice. Diamonds in vivid hues of red,
									orange, green, blue, pink, purple, violet, and yellow are
									extremely rare and sell for high prices. A few white, gray and
									black diamonds are also cut and used as gems. Most
									industrial-grade diamonds are brown, yellow, gray, green and
									black crystals that lack the color and clarity to be a nice
									gem.
								</p>
							</div>
							<div to="/services-trade" className="product-content-values-item">
								<div className="product-content-card-image-eight"></div>
								<h5 className="product-content-values-h3">Gemstones</h5>
								<p className="product-content-values-p">
									Gemstones are minerals, rocks, or organic matters that have
									been chosen for their beauty, durability, and rarity and then
									cut or faceted and polished to make jewelry or other human
									accessories. There are actually a number of different
									gemstones that are rarer to find than diamonds. Some of the
									gemstones you can find include: Red Beryl, Tanzanite,
									Benitoite, Topaz, Sapphire, Ruby, Tourmaline, Turquoise, ...
								</p>
							</div>
							<div to="/services-land" className="product-content-values-item">
								<div className="product-content-card-image-four"></div>
								<h5 className="product-content-values-h3">
									Colombo Tantalite (Coltan)
								</h5>
								<p className="product-content-values-p">
									Colombo tantalite, as Coltan in short, known industrially as
									tantalite, is a dull black metallic ore from which the
									elements niobium and tantalum are extracted. The niobium
									dominant mineral in coltan is columbite, and the tantalum
									dominant mineral is the tantalite.Tantalum from coltan is used
									to manufacture tantalum capacitors which are used for mobile
									phones, personal computers, automotive electronics, and
									cameras..
								</p>
							</div>

							<div className="product-content-values-row">
								<div
									to="/services-customs#brokerage-banner"
									className="product-content-values-item"
								>
									<div className="product-content-card-image-five"></div>
									<h5 className="product-content-values-h3">Cassiterite</h5>
									<p className="product-content-values-p">
										Cassiterite is a tin oxide mineral and is the most important
										source of tin, and most of the world’s supply of tin is
										obtained by mining cassiterite.
									</p>
								</div>
								<div className="product-content-values-item">
									<div className="product-content-card-image-six"></div>
									<h5 className="product-content-values-h3">Cobalt</h5>
									<p className="product-content-values-p">
										Cobalt is a metal in rising demand thanks to its use in
										batteries for electric vehicles and portable electronics.
									</p>
								</div>
							</div>
						</div>
						<div className="lower-button-group">
							<Link to="/product-quotation">
								<button className="storage-content-button">
									Request a quote
								</button>
							</Link>
							<Link to="/quotation">
								<button className="storage-content-button">Make enquiry</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default productContent;
