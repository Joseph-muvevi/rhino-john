import React from 'react'
import "../Users.css"

const UsersBarner = () => {
	return (
		<div className="dash-users-admin-banner">
			<div className="dash-users-admin-banner-content">
				<h3 className="dash-users-admin-banner-content-h3">
					All users
				</h3>
				<p className="dash-users-admin-banner-p">
					We display all users here to check if there is one 
					who shouldn't be here
				</p>
			</div>
		</div>
	)
}

export default UsersBarner
