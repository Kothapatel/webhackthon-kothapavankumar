const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.get("/sub", function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("result is" + " " + result);
});

app.post("/sub", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = (num1) / (num2 * num2);

    res.send("result is" + " " + result);
});

app.post("/mul", function(req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var result = num1 * num2;

    res.send("result is" + " " + result);
});


app.listen(3000);