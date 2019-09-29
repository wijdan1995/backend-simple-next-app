const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

function newEmail({ email, name, message }) {

    const msg = {
        to: 'jooode2000@hotmail.com',
        from: email,
        subject: `Email from ${name}`,
        text: message,
        html: `<strong>${message}</strong>`,
    };
    sgMail.send(msg)
        .then(() => {
            //Celebrate
            console.log('SendGrid Done');
        })
        .catch(error => {

            //Log friendly error
            console.error(error.toString());
        });
}

module.exports = newEmail