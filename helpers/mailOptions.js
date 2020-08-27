

function mailOptions(adminEmail, userEmail) {
    return {
        from: adminEmail,
        to: userEmail,
        subject:'Invoice',
        text:'isi email'
    }
}

// console.log(mailOptions('mimin@mail.com', 'user@mail.com'))

module.exports = mailOptions