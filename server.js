const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

//need this to read req.body
app.use(bodyParser.urlencoded({ extended: true }));

//what will require this?
require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});