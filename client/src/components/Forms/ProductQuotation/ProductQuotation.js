import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ProductQuotationBanner from './ProductQuotationBanner/ProductQuotationBanner'
import ProductQuotationForm from './ProductQuotationForm/ProductQuotationForm'

const ProductQuotation = () => {
    return (
        <div className="product-quotation">
            <Navbar/>
            <ProductQuotationBanner/>
            <ProductQuotationForm/>
        </div>
    )
}

export default ProductQuotation
