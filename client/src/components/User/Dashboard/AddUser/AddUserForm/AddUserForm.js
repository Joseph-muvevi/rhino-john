import React, { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Adduser.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
	const [error, setError] = useState("");
	const [status, setStatus] = useState("");

	const formik = useFormik({
		initialValues: {
			title: "",
			firstname: "",
			lastname: "",
			idno: "",
			email: "",
			telephone: "",
			pobox: "",
			city: "",
			country: "",
			role: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			title: Yup.string().required().min(2).max(100),
			firstname: Yup.string().required().min(3).max(100),
			lastname: Yup.string().required().min(3).max(100),
			idno: Yup.string().required().min(8).max(100),
			email: Yup.string().required().min(7).max(100),
			telephone: Yup.string().required().min(10).max(30),
			pobox: Yup.string().required().min(5).max(30),
			city: Yup.string().required().min(3).max(100),
			country: Yup.string().required().min(3).max(100),
			role: Yup.string().required().min(2).max(100),
			password: Yup.string().required().min(6).max(100),
		}),
		onSubmit: (values, { resetForm }) => {
			axios
				.post("http://localhost:8080/api/admin", values)
				.then((res) => {
					setStatus(res.data.status)
					resetForm({
						initialValues : "" 
					})
				})
				.catch((err) => {
					setError(err.response.data.message);
				});
		},
	});
	return (
		<div className="signup-form">
			<div className="signup-form-content">
				<form onSubmit={formik.handleSubmit} className="the-sign-up-form">
					{status === 500 ? (
							<div className="error-section-register">
								<FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
								<p className="error-section-p">
									Something went wrong <br/> Feel free to consult us if problem persists
								</p>
							</div>
					) : null}
					{error ? (
							<div className="error-section-register">
								<FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
								<p className="error-section-p">{error}</p>
							</div>
					) : null}

					<div className="sign-up-form-small-inputs">
						<div className="sign-up-form-small-input-group">
							<label>Your Title</label>
							<select
								type="text"
								placeholder="Arrival city here..."
								name="title"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.title}
								required
							>
								<option value="" disabled label="Please select an option" />
								<option value="mr" label="Mr." />
								<option value="mrs" label="Mrs." />
								<option value="miss" label="Miss." />
							</select>
							{formik.touched.title && formik.errors.title ? (
								<div className="error">{formik.errors.title}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>Your firstname</label>
							<input
								type="text"
								placeholder="Your firstname here..."
								name="firstname"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstname}
								required
							/>
							{formik.touched.firstname && formik.errors.firstname ? (
								<div className="error">{formik.errors.firstname}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>Your lastname</label>
							<input
								type="text"
								placeholder="Your lastname name here..."
								name="lastname"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.lastname}
								required
							/>
							{formik.touched.lastname && formik.errors.lastname ? (
								<div className="error">{formik.errors.lastname}</div>
							) : null}
						</div>
					</div>

					<div className="sign-up-form-small-inputs">
						<div className="sign-up-form-small-input-group">
							<label>Your ID/Passport</label>
							<input
								type="text"
								placeholder="Your ID/Passport"
								name="idno"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.idno}
								required
							/>
							{formik.touched.idno && formik.errors.idno ? (
								<div className="error">{formik.errors.idno}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>P.O.Box Number</label>
							<input
								type="text"
								placeholder="P.O.Box Number"
								name="pobox"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.pobox}
								required
							/>
							{formik.touched.pobox && formik.errors.pobox ? (
								<div className="error">{formik.errors.pobox}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>telephone</label>
							<input
								type="text"
								placeholder="The telephone of the product..."
								name="telephone"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.telephone}
								required
							/>
							{formik.touched.telephone && formik.errors.telephone ? (
								<div className="error">{formik.errors.telephone}</div>
							) : null}
						</div>
					</div>

					<div className="sign-up-form-small-inputs">
						<div className="sign-up-form-small-input-group">
							<label>Country</label>
							<input
								type="text"
								placeholder="Your Country..."
								name="country"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.country}
								required
							/>
							{formik.touched.country && formik.errors.country ? (
								<div className="error">{formik.errors.country}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>City</label>
							<input
								type="text"
								placeholder="Your city..."
								name="city"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.city}
								required
							/>
							{formik.touched.city && formik.errors.city ? (
								<div className="error">{formik.errors.city}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>Email</label>
							<input
								type="email"
								placeholder="Email..."
								name="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								required
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className="error">{formik.errors.email}</div>
							) : null}
						</div>
					</div>

					<div className="sign-up-form-small-inputs">
						<div className="sign-up-form-small-input-group">
							<label>Role</label>
							<select
								type="text"
								name="role"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.role}
								required
							>
								<option value="" disabled label="Please select a role" />
								{["IT", "accountant", "admin", "lawyer", "CEO"].map((role) => (
									<option value={role} label={role} />
								))}
							</select>
							{formik.touched.role && formik.errors.role ? (
								<div className="error">{formik.errors.role}</div>
							) : null}
						</div>
						<div className="sign-up-form-small-input-group">
							<label>Password</label>
							<input
								type="password"
								name="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								required
							/>
							{formik.touched.password && formik.errors.password ? (
								<div className="error">{formik.errors.password}</div>
							) : null}
						</div>
					</div>

					<p className="form-alt-p">
						Already have an account?
						<Link className="reset-password-p" to="/auth">
							Sign in
						</Link>
					</p>
					<button type="submit">
						Register <FontAwesomeIcon icon={faPaperPlane} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
