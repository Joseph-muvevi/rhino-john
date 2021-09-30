import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState, useEffect, useMemo } from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from "react-table"
import { PRODUCT_QUOTATION_COLUMN } from './ProductQuotationTableColumns'
import ProductQuotationTableGlobalFilter from './ProductQuotationTableGlobalFilter'

const ProductQuotationTable = () => {
	
	const [productQuotation, setProductQuotation] = useState([])
	const columns = useMemo(() => PRODUCT_QUOTATION_COLUMN, [] )
	const productQuotationData = useMemo(() => productQuotation, [productQuotation])
	const [error, setError] = useState("")

	useEffect(() => {
		axios.get("http://localhost:8080/api/productquotation")
			.then(res => setProductQuotation(res.data))
			.catch(err => {
				console.log(err.response)
				setError(err.response.data)
			})
	}, [])

	const productQuotationTableInstance = useTable({
		columns: columns,
		data: productQuotationData
	}, useGlobalFilter, useSortBy, usePagination)

	
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		previousPage,
		nextPage,
		canNextPage,
		canPrevousPage,
		prepareRow,
		pageOptions,
		setPageSize,
		state,
		setGlobalFilter
	} = productQuotationTableInstance

	const { globalFilter, pageIndex, pageSize} = state

	return (
		<div className="dash-tables">
			<ProductQuotationTableGlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
			<table {...getTableProps()}>
				<thead>
					{
						headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{
									headerGroup.headers.map(column => (
											<th {...column.getHeaderProps(column.getSortByToggleProps())}>
												{column.render("Header")}
													<span>
														{column.isSorted ? (column.isSortedDesc? <FontAwesomeIcon icon={faSortDown}/> : <FontAwesomeIcon icon={faSortUp}/> ) : ""}
													</span>
											</th>
										))
								}
							</tr>

						))
					}
				</thead>
				<tbody {...getTableBodyProps()}>
					{
						page.map(row => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{
										row.cells.map(cell => {
											return (
												<td {...cell.getCellProps()}>
													{
														cell.render("Cell")
													}
												</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
			<div>
				<span>
					Page {" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length} {" "}
					</strong>
				</span>
				<select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
					{
						[5, 10, 20, 25].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))
					}
				</select>
				<button onClick={() => previousPage()} disabled={!canPrevousPage}>Previous</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
			</div>
		</div>
	)
}

export default ProductQuotationTable
