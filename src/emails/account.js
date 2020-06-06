const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = ''

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//this allows us to send individual mails

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pompymahata@gmail.com',
        subject: 'Thanks for joining in!',
        text: 'Welcome to the app, ${name}. Let me know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pompymahata@gmail.com',
        subject: 'Sorry to see you go!',
        text: 'Goodbye, ${name}, I hope to see you back sometime soon.'
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}