const express = require("express");
const app = express();


app.get("/", (req,resp) => {
    resp.send('<h1>hello wolrd</h1>');
});

app.use(express.static('frontend'));

app.listen(2121, () => {
    console.log("The server started on port 2121 !!!!!!");
  });