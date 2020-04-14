const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//bodyParser middleware
const bodyParser = require('body-parser');

var aylien = require("aylien_textapi");
var textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

const app = express()

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/save', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post("/evaluate", (req, res) => {
  textapi.sentiment({
    url: req.body.text,
    mode: 'document'
  }, function(error, response) {
    console.log(response)

    res.send(response)
    if (error === null) {
      console.log(response);
    }
  })
});

module.exports = app;
