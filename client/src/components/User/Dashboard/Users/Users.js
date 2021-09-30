import React from 'react'
import "./Users.css"
import UsersBarner from './UsersBanner/UsersBarner'
import UsersTableMain from './UsersTable/UsersTableMain'

const Users = () => {
	return (
		<div className="users-general">
			<UsersBarner/>
			<UsersTableMain/>
		</div>
	)
}

export default Users
