require('dotenv').config()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const verifyMail = (email, otp) => {

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.username,
            pass: process.env.pass
        }
    }))

    let mailOptions = {
        from: 'sounakmukherjee92@gmail.com',
        to: email,
        subject: 'Verify OTP',
        text: `Your one time password(OTP) is: ${otp}`
    }

    transporter.sendMail(mailOptions, function (error, response) {
        error ? console.log(error) : console.log('Mail sent!')
    })
}

module.exports = verifyMail