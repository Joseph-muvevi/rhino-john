import React from 'react'

const ProductQuotationTableGlobalFilter = ({filter, setFilter}) => {
    return (
        <span>
            <input placeholder="Search Table" value={filter || ""} onChange={e => setFilter(e.target.value)}/> 
        </span>
    )
}

export default ProductQuotationTableGlobalFilter
