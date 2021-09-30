import React from 'react'
import "./Adduser.css"
import AddUserBanner from './AddUserBanner.js/AddUserBanner'
import SignupForm from './AddUserForm/AddUserForm'

const Adduser = () => {
    return (
        <div className="add-user-general">
            <AddUserBanner/>
            <SignupForm/>
        </div>
    )
}

export default Adduser
