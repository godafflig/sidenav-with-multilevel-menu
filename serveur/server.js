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

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'> Message du Portfolio <br><br></h1>");
});

app.post("/sendmail", (req, res) => {
  console.log("Request came");
  let user = req.body;
  sendMail(user, function(err, info) {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred; mail not sent.");
    } else {
      res.send(info);
    }
  });
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    secure: true, // true for port 465, false for other ports
    port: 465
  });

  let mailOptions = {
    from: `"Fun Of Heuristic" <${process.env.EMAIL_USER}>`, 
    to: user.email, // l'email de l'utilisateur provenant du formulaire
    subject: "Welcome to Fun Of Heuristic 👻", 
    html: `<h1>Hi ${user.name}</h1><br><h4>${user.message}</h4>` // Utilisation du nom et du message personnalisé de l'utilisateur
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    callback(null, info);
  } catch (error) {
    callback(error, null);
  }
}
