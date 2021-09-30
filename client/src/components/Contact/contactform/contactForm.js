import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, {useState, useEffect} from "react";
import "./contactForm.css";
import axios from "axios"

const ContactForm = () => {
	const [error, setError] = useState("")

	const formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			company: "",
			telephone: "",
			message: "",
		},
		validationSchema: Yup.object().shape({
			fullname: Yup.string().required().min(3).max(200),
			email: Yup.string().email().min(7).max(100).required(),
			company: Yup.string().min(3).max(100),
			telephone: Yup.string().required().min(5).max(30),
			message: Yup.string().required().min(20).max(2000),
		}),
		onSubmit: (message, { resetForm }) => {
			alert(JSON.stringify(message, null, 2));
			axios
				.post("http://localhost:8080/sendemail")
				.then( res => {
					if (res.status === 200){
						setError("")
					}
				} )
				.catch(err =>{
					 setError(err.response.data)
					})
			resetForm({ message: "" });
		},
	});

	return (
		<div className="contact-form">
			<div className="contact-form-content">
				<div className="contact-map">
				<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11281.771442292633!2d36.748590730685045!3d-1.3510633698684948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjAnNTguMCJTIDM2wrA0NCc1MS40IkU!5e0!3m2!1sen!2ske!4v1631643617692!5m2!1sen!2ske"
						className="iframe"
						allowFullScreen=""
						loading="lazy"
						title="Rhino jon map"
					></iframe>
				</div>
				<form onSubmit={formik.handleSubmit} className="the-contact-form">
					<div className="small-inputs">
						<div className="contact-form-group">
							<label>FullNames</label>
							<input
								type="text"
								value={formik.values.fullname}
								name="fullname"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder="Enter your full names..."
								required
							/>
							{formik.touched.fullname && formik.errors.fullname ? (
								<div className="error">{formik.errors.fullname}</div>
							) : null}
						</div>
						<div className="contact-form-group">
							<label>Email</label>
							<input
								type="text"
								value={formik.values.email}
								name="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder="Enter your email..."
								required
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className="error">{formik.errors.email}</div>
							) : null}
						</div>
					</div>
					<div className="small-inputs">
						<div className="contact-form-group">
							<label>Company name</label>
							<input
								type="text"
								value={formik.values.company}
								name="company"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder="Enter your company name..."
							/>
							{formik.touched.company && formik.errors.company ? (
								<div className="error">{formik.errors.company}</div>
							) : null}
						</div>
						<div className="contact-form-group">
							<label>Telephone</label>
							<input
								type="tel"
								value={formik.values.telephone}
								name="telephone"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder="Enter your telephone number"
								required
							/>
							{formik.touched.telephone && formik.errors.telephone ? (
								<div className="error">{formik.errors.telephone}</div>
							) : null}
						</div>
					</div>
					<div className="contact-textarea">
						<label>Message</label>
						<textarea
							type="text"
							value={formik.values.message}
							name="message"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Enter your message..."
							required
						/>
						{formik.touched.message && formik.errors.message ? (
							<div className="error">{formik.errors.message}</div>
						) : null}
					</div>
					<br />
					<button>
						Submit <FontAwesomeIcon icon={faPaperPlane} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
