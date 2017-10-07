const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/routes');
const constants = require('./constants');

const app = express();

//db setup
mongoose.Promise = global.Promise;
  
  mongoose.connect(constants.dbPath);


app.use(bodyParser.json());

  const cors = require('cors');
  app.use(cors());

// app.use(express.static(path.resolve(__dirname, './client/', 'build')));

//app setup
routes(app);


// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/', 'build', 'index.html'));
// });



app.use((err, req, res, next) => {
  const message = err.errors && err.errors[Object.keys(err.errors)[0]].message;
  return res.send({ name: err.name, error: message || err.message });
}); 


module.exports = app;