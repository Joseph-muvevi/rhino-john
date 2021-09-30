import React from 'react'
import {Link} from "react-router-dom"
import "../shipment.css"

const TrackType = () => {
	return (
		<div className="track-type">
			<div className="track-type-content">
				<h3 className="track-type-h3">
					Choose your tracking information
				</h3>
				<div className="tracktype-link-group">
					<Link to="/track-shipment" className="tracktype-link">
						<button>
							Track your shipment
						</button>
					</Link>
					<Link to="/track-storage" className="tracktype-link">
						<button>
							Track your storage
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TrackType
