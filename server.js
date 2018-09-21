// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
//
// const app            = express();
//
// const port = 8000;
// app.listen(port, () => {
//   console.log('We are live on ' + port);
// });
//

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Bus = require('./api/models/Bus'), //created model loading here
  bodyParser = require('body-parser');

const cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BusDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

express.Router({ mergeParams: true });
var routes = require('./api/routes/busRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Bus RESTful API server started on: ' + port);
