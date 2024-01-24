const sendmailer = require("nodemailer");
require("dotenv").config();

console.log(process.env.EMAIL_USER, process.env.APP_PASS);

const transporter = sendmailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true pour le port 465, false pour les autres ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS
    }
});

const mailOptions = {

    from: {
        name: "tom benat",
        address: process.env.EMAIL_USER

    } ,// L'adresse d'envoi doit être la même que `auth.user`
    to: "tom.benat@ynov.com" , // list of receivers
    subject: "Welcome", // Subject line
    text:"hello world",
    html: `<h1>Hi</h1><br>
    <h4>Thanks for joining us</h4>`

}

const sendMail = async (transporter , mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("mail send with succes" );

    }catch (error) {
        console.log(error)
    }
}

sendMail(transporter,mailOptions);