const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function newEmail({ email, name, message }) {
    const texstMsg = `The contact message from ${name} email: ${email} with this message : ${message}`
    const msg = {
        to: 'jooode2000@hotmail.com',
        from: email,
        subject: `Email from ${name}`,
        text: texstMsg,
        html: `<strong>${texstMsg}</strong>`,
    };
    sgMail.send(msg)
        .then(() => {
            //Celebrate
            console.log('SendGrid Done');
            alert("Thank you for your message /n We'll contact you soon")
        })
        .then(history.push('/'))
        .catch(error => {

            //Log friendly error
            console.error(error.toString());
        });
}

module.exports = newEmail