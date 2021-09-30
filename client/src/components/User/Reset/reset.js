import React from 'react'
import "./reset.css"
import ResetBanner from './resetBanner/resetBanner'
import ResetForm from './resetForm/resetForm'

const Reset = () => {
    return (
        <div className="reset">
            <ResetBanner/>
            <ResetForm/>
        </div>
    )
}

export default Reset
