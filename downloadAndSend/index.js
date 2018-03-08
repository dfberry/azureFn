const rp = require('request-promise');
const sgMail = require('@sendgrid/mail');

var download = async(url) =>{
    try{
        return await rp(url);
    }catch(ex){
        throw ex;
    }
}
/*
var sendEmail = async(fromEmail,toEmail,subject, text, doc)=>{
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail.setApiKey("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");
    const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
}
*/
download("https://aka.ms/luis-docs-download-pdf").then(results => {
    console.log(results);
}).catch(err => {
    console.log(err);
})
