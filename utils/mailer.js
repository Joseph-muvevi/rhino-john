const nodemailer = require("nodemailer")

// creating a transport
const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.MAIL_PORT,
            // service: process.env.SERVICE,
            secure: false ,
            auth: {
                user: process.env.USER,
                password: process.env.PASS
            }
        })

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })

        console.log("Email sent successfully")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = sendEmail;
