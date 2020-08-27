const nodemailer = require('nodemailer')
const mailOptions = require('../helpers/mailOptions.js')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hacktiv8pi46arrizal@gmail.com',
        pass: '1234Lima'
    }
});
transporter.sendMail(mailOptions('hacktiv8pi46arrizal@gmail.com', 'arrizalrahmat@gmail.com'), (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Invoice Sent!')
    }
})