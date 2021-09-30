import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import reset from "../../../../assets/ship 1.jpg"
import "./resetForm.css"
import { Link } from 'react-router-dom';


const ResetForm = () => {

		const formik = useFormik({
				initialValues: {
					email: "",
					password: "",
				},
				validationSchema: Yup.object({
					email: Yup.string()
						.email()
						.min(5, "Too little charachters for that")
						.max(150, "Thats a very long email")
						.required("This email field is required"),
					password: Yup.string().min(8).max(150).required(),
				}),
				onSubmit: (values, {resetForm}) => {
					alert(JSON.stringify(values, null, 2));
					resetForm({values: ""})
				},
			});
		
	return (
		<div className="resetform">
			<div className="reset-content">
				<div className="reset-left">
					<img className="reset-form-image" src={reset} alt="Rhino jon gold shippment"/>
				</div>
				<form onSubmit={formik.handleSubmit} className="reset-form">
					<div className="all-form-topic-info">
						<h3 className="all-form-topic-info-h3">
							Lost password recovery
						</h3>
						<p className="all-form-topic-info-p">
							If you have forgotten your password, you can request to reset it. 
							Fill in your registered email address below to reset your password.
						</p>
					</div>
					<div className="form-group">
							<label>Email</label>
							<input
								className="all-auth-input"
								onChange={formik.handleChange}
								value={formik.values.email}
								name="email"
								required
								type="email"
								placeholder="Enter your email here..."
								/>
							{formik.touched.email && formik.errors.email ? (
							<div className="error">{formik.errors.email}</div>
							) : null}
					</div>
					
					<button className ="reset-password-button">
						Reset my password
					</button>
					<br/>
				</form>
			</div>
		</div>
	)
}

export default ResetForm
