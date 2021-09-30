import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./contact.css"
import ContactBanner from './contactBanner/contactBanner'
import ContactForm from './contactform/contactForm'

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <ContactBanner/>
            <ContactForm/>
        </div>
    )
}

export default Contact
