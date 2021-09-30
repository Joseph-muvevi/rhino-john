import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, {useState} from "react";
import "../LogisticsQuotation.css";
import axios from "axios";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const LogisticsQuotationForm = () => {
	const [error, setError] = useState("")

	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			title: "",
			company: "",
			position: "",
			unit: "",
			weight: "",
			producttype: "",
			fromcity: "",
			fromcountry: "",
			pieces: "",
			productname: "",
			quantity: "",
			merchandise: "",
			logisticstype: "",
			tocity: "",
			tocountry: "",
			description: "",
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().required().min(3).max(100),
			lastname: Yup.string().required().min(3).max(100),
			email: Yup.string().required().min(3).max(100),
			title: Yup.string().required().min(2).max(100),
			company: Yup.string().required().min(3).max(100),
			position: Yup.string().required().min(3).max(100),
			unit: Yup.string().required().min(1).max(10),
			weight: Yup.number().required().min(1).max(5000000000),
			producttype: Yup.string().required().min(3).max(100),
			fromcity: Yup.string().required().min(3).max(50),
			fromcountry: Yup.string().required().min(3).max(50),
			pieces: Yup.number().required().min(1).max(5000000000),
			productname: Yup.string().required().min(3).max(100),
			quantity: Yup.number().required().min(1).max(5000000000),
			merchandise: Yup.string().required().min(3).max(100),
			logisticstype: Yup.string().required().min(3).max(100),
			tocountry: Yup.string().required().min(3).max(50),
			tocity: Yup.string().required().min(3).max(50),
			description: Yup.string().required().min(20).max(2000),
		}),
	onSubmit: (values, { resetForm }) => {
		axios
			.post("http://localhost:8080/api/logisticsquotation", values)
			.then(res => {
				// console.log(res)
				setError(null)
			})
			.catch(err =>{
				// console.log(err.response)
				setError(err.response.data)
				})
			alert(JSON.stringify(values, null, 2));
			// console.log(values);
	  	resetForm({ values: "" });
	},
  });

  return (
	<div className="logistics-quotation-form-client">
			{
				error ? (
					<div className="service-quotation-small-inputs">
						<div className="error-section">
							<FontAwesomeIcon icon={faExclamationTriangle} size="2x"/>
							<p className="error-section-p">{error}</p>
						</div>
					</div>
				): null
			}
		<div className="logistics-quotation-form-content">
			<form
				onSubmit={formik.handleSubmit}
				className="the-logistics-quotation-form"
			>
				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
						<label>Your Firstname</label>
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
					<div className="logistics-quotation-small-input-group">
						<label> Lastname</label>
						<input
							type="text"
							placeholder="lastname"
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
					<div className="logistics-quotation-small-input-group">
						<label> Email</label>
						<input
							type="email"
							placeholder="email"
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

				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
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
					<div className="logistics-quotation-small-input-group">
						<label>Your company</label>
						<input
							type="text"
							placeholder="Your company name here..."
							name="company"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.company}
							required
						/>
						{formik.touched.company && formik.errors.company ? (
						<div className="error">{formik.errors.company}</div>
						) : null}
					</div>

					<div className="logistics-quotation-small-input-group">
						<label>Your position</label>
						<input
							type="text"
							placeholder="Eg CEO, CTO, Manager, etc..."
							name="position"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.position}
							required
						/>
						{formik.touched.position && formik.errors.position ? (
						<div className="error">{formik.errors.position}</div>
						) : null}
					</div>
				</div>

				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
						<label>Weight Unit</label>
						<select
							type="text"
							name="unit"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.unit}
							required
						>
						<option value="" disabled label="Please select an option" />
						<option value="kg" label="Kilograms" />
						<option value="lb" label="Pounds" />
						<option value="g" label="Grams" />
						<option value="t" label="Tonnes" />
						<option value="gal" label="Gallons" />
						<option value="l" label="liters" />
						</select>
						{formik.touched.unit && formik.errors.unit ? (
						<div className="error">{formik.errors.unit}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Weight</label>
						<input
							type="number"
							placeholder="The weight of the product..."
							name="weight"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.weight}
							required
						/>
						{formik.touched.weight && formik.errors.weight ? (
						<div className="error">{formik.errors.weight}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Product Type</label>
						<select
							type="text"
							name="producttype"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.producttype}
							required
						>
						<option value="" disabled label="Please select an option" />
						<option value="solid" label="Solid" defaultValue />
						<option value="liquid" label="Liquid" />
						<option value="gas" label="Gas" />
						</select>
						{formik.touched.producttype && formik.errors.producttype ? (
						<div className="error">{formik.errors.producttype}</div>
						) : null}
					</div>
				</div>

				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
						<label>City from</label>
						<input
							type="text"
							placeholder="What is your city..."
							name="fromcity"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.fromcity}
							required
						/>
						{formik.touched.fromcity && formik.errors.fromcity ? (
						<div className="error">{formik.errors.fromcity}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Country from</label>
						<input
							type="text"
							placeholder="What is your country..."
							name="fromcountry"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.fromcountry}
							required
						/>
						{formik.touched.fromcountry && formik.errors.fromcountry ? (
						<div className="error">{formik.errors.fromcountry}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label> Pieces </label>
						<input
							type="number"
							placeholder="pieces"
							name="pieces"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.pieces}
							required
						/>
						{formik.touched.pieces && formik.errors.pieces ? (
						<div className="error">{formik.errors.pieces}</div>
						) : null}
					</div>
				</div>

				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
						<label>Product Name</label>
						<input
							type="text"
							placeholder="EProduct name..."
							name="productname"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.productname}
							required
						/>
						{formik.touched.productname && formik.errors.productname ? (
						<div className="error">{formik.errors.productname}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Product Amount</label>
						<input
							type="number"
							placeholder="Product amount..."
							name="quantity"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.quantity}
							required
						/>
						{formik.touched.quantity && formik.errors.quantity ? (
						<div className="error">{formik.errors.quantity}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label> Merchardise </label>
						<input
							type="text"
							placeholder="merchandise"
							name="merchandise"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.merchandise}
							required
						/>
						{formik.touched.merchandise && formik.errors.merchandise ? (
						<div className="error">{formik.errors.merchandise}</div>
						) : null}
					</div>
				</div>

				<div className="logistics-quotation-small-inputs">
					<div className="logistics-quotation-small-input-group">
						<label>Logistics type</label>
						<select
							type="text"
							name="logisticstype"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.logisticstype}
							required
						>
						<option value="" disabled label="Please select an option" />
						<option value="road" label="Road" defaultValue />
						<option value="rail" label="Rail" />
						<option value="sea" label="Sea" />
						<option value="air" label="Air" />
						</select>
						{formik.touched.logisticstype && formik.errors.logisticstype ? (
						<div className="error">{formik.errors.logisticstype}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Destination City</label>
						<input
							type="text"
							placeholder="Destination City here..."
							name="tocountry"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.tocountry}
							required
						/>
						{formik.touched.tocountry && formik.errors.tocountry ? (
						<div className="error">{formik.errors.tocountry}</div>
						) : null}
					</div>
					<div className="logistics-quotation-small-input-group">
						<label>Destination Country</label>
						<input
							type="text"
							placeholder="Destination Country here..."
							name="tocity"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.tocity}
							required
						/>
						{formik.touched.tocity && formik.errors.tocity ? (
						<div className="error">{formik.errors.tocity}</div>
						) : null}
					</div>
				</div>

				<div className="contact-textarea">
					<label>Description</label>
					<textarea
							type="text"
							name="description"
							placeholder="Little descriptions eg weight, size, color, etc"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.description}
							required
					/>
					{formik.touched.description && formik.errors.description ? (
						<div className="error">{formik.errors.description}</div>
					) : null}
				</div>

				<br />
				<button type="submit">
				Submit <FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</form>
		</div>
	</div>
  );
};

export default LogisticsQuotationForm;
