const mongoose = require('mongoose');
const constants = require('./constants');

before(done => {
  mongoose.connect(constants.dbPath);
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error);
    });
});