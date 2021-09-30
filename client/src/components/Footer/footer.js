import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
	faAddressBook,
	faHouseUser,
	faInfoCircle,
	faMailBulk,
	faMapMarkerAlt,
	faPhoneAlt,
	faShippingFast,
	faMarker,
	faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Rhino card logo - PNG.png";
import "./footer.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Footer = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().min(6).max(100),
		}),
		onSubmit: (value) => {
			axios
				.post("http://localhost:8080/api/emails", value)
				.then()
				.catch((err) => {
					// console.log(err.response)
				});
		},
	});

	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-top">
					<div className="footer-top-left">
						<div className="footer-logo">
							<img
								src={logo}
								alt="Rhino jon logo"
								className="f-logo"
							/>
							<h3 className="footer-logo-text">
								Rhinojon Prime Metals
							</h3>
						</div>
						<div className="footer-left-content">
							<p className="footer-social-media-txt">
								For more follow us on
							</p>
							<div className="footer-social-icons">
								<FontAwesomeIcon size="2x" icon={faFacebook} />
								<FontAwesomeIcon size="2x" icon={faTwitter} />
								<FontAwesomeIcon size="2x" icon={faInstagram} />
								<FontAwesomeIcon
									size="2x"
									icon={faLinkedinIn}
								/>
							</div>
							<div className="footer-input-group">
								<label>Join our mail list for updates</label>
								<div className="footer-inputs">
									<form onSubmit={formik.handleSubmit}>
										<input
											type="email"
											name="email"
											placeholder="Subscribe to our Newsletter"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
										<button
											type="submit"
											className="subscribe">
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-top-middle">
						<h3 className="footer-title">Contacts</h3>
						<ul className="footer-ul">
							<li className="footer-li">
								<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
								Riverside drive Nairobi, Kenya
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								Addess 2
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faPhoneAlt} />
								+254 753 999 444
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faPhoneAlt} />
								+254 20 869 3000
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faMailBulk} />
								info@rhinojonprimemetals.com
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faMailBulk} />
								admin@rhinojonprimemetals.com
							</li>
							<li className="footer-li">
								<FontAwesomeIcon icon={faMailBulk} />
								ceo@rhinojonprimemetals.com
							</li>
						</ul>
					</div>
					<div className="footer-top-right">
						<h3 className="footer-title">Page Links</h3>
						<ul className="product-footer-ul">
							<li className="product-footer-li">
								<Link className="footer-li-width" to="/">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faHouseUser}
									/>{" "}
									Home
								</Link>
							</li>
							<li className="product-footer-li">
								<Link className="footer-li-width" to="/about">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faInfoCircle}
									/>
									About
								</Link>
							</li>
							<li className="product-footer-li">
								<Link
									className="footer-li-width"
									to="/products">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faGem}
									/>
									Products
								</Link>
							</li>
							<li className="product-footer-li">
								<Link
									className="footer-li-width"
									to="/services">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faShippingFast}
									/>
									Services
								</Link>
							</li>
							<li className="product-footer-li">
								<Link
									className="footer-li-width"
									to="/shipment">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faMarker}
									/>
									Tracking
								</Link>
							</li>
							<li className="product-footer-li">
								<Link className="footer-li-width" to="/contact">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faAddressBook}
									/>
									Contact
								</Link>
							</li>
							<li className="product-footer-li">
								<Link className="footer-li-width" to="/auth">
									<FontAwesomeIcon
										className="footer-right-icons"
										icon={faAddressBook}
									/>
									LogIn
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<FontAwesomeIcon icon={faCopyright} />
				Copyrigh Rhinojon Prime Metals 2021
			</div>
		</div>
	);
};

export default Footer;
