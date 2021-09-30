import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Line} from "react-chartjs-2"

const DashProductShippedContent = () => {
	// const [da]
	const [productData, setProductData] = useState([])
	const [productObject, setProductObject] = useState({})
	const [error, setError] = useState([])
	const [noOfPoduct, setNoOfProduct] = useState([])
	const [noOfProductsPerDay, setNoOfProductsPerDay] = useState([])
	const [noOfProductsPerMonth, setNoOfProductsPerMonth] = useState([])
	const [monthNo, setMonthNO] = useState([])

	useEffect(() => {
		axios.get("http://localhost:8080/api/logisticsrecords")
			.then(res => {
				console.log(res.data)
				const object = {1 : res.data}
				setProductObject(object)

			})
			.catch(err => {
				if (err) {
					setError(err.response.data)
					console.log(err.response.data)
				}
			})
	}, [])

	
			console.log(productObject, 'I A THE PRODUCT DATA')

	return (
		<div>
			<div className="dash-shipment-quotation-admin-content">
				
			</div>
		</div>
	)
}

export default DashProductShippedContent
