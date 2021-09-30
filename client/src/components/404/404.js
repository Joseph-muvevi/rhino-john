import React from 'react'
import { Link } from 'react-router-dom'
import "./404.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1 className="not-found-h1">
                    404
                </h1>
                <p className="not-found-p">
                    Webpage your looking for is not available. Return to 
                    <Link to="/" style={{
                         textDecoration: "none",
                         color: "#f4943c"
                         }}> Homepage</Link>
                </p>
            </div>            
        </div>
    )
}

export default NotFound
