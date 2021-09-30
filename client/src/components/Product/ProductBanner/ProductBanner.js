import React from "react";
import "../product.css";

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <div className="product-banner-content">
        <h3 className="product-banner-h3">Our Products</h3>
        <p className="product-banner-p">
          Rhinojohn Prime Metal International Limited organizes and facilitates
          the marketing and trade of mining products to several buyers around
          the world thanks to its network of stakeholders who operate in the
          mining sector in countries with large mineral reserves.
        </p>
        <p>
          As a major trader of key mining products from the African regions, we
          are offering the facilitation of outsourcing mining products,
          primarily from the Democratic Republic of Congo (DRC), Kenya,
          Tanzania, Ghana, Liberia, Sierra
          Leone, Bukinafaso, Botswana, Angola, Zimbabwe, South Sudan, Central
          African Republic and Namibia.
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;
