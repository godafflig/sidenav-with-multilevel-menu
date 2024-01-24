require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.post("/sendmail", (req, res) => {
  console.log("Request came");
  let user = req.body;
  sendMail(user, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("An error occurred; mail not sent.");
    } else {
      console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
      res.send(info);
    }
  });
});

async function sendMail(user, callback) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    secure: true, // true pour le port 465, false pour les autres ports
    port: 465
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

  try {
    let info = await transporter.sendMail(mailOptions);
    callback(null, info);
  } catch (error) {
    callback(error, null);
  }
}
