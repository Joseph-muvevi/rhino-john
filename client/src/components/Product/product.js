import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductBanner from './ProductBanner/ProductBanner'
import ProductContent from './ProductContent/ProductContent'
import ProductFooter from './ProductFooter/ProductFooter'

const Product = () => {
    return (
        <div className="service">
            <Navbar/>
            <ProductBanner/>
            <ProductContent/>
            <ProductFooter/>
        </div>
    )
}

export default Product
