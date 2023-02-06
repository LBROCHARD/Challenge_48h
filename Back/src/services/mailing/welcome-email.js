import transporter from "#config/mailer.js";

export function sendWelcomeEmail(user,token) {
    if(!user || !token) throw new Error('Missing user or token');
    const messageToUser = {
        from: process.env.EMAIL_SENDER,
    
        to: user.email,
        subject: 'Welcome to the API',
        html:`<h1>Welcome to the API, here your validation token : <span style="color : red">${token}</span></h1>`
    }
    return transporter.sendMail(messageToUser)
        }
