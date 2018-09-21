'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BusSchema = new Schema({
  departureTime: {
    type: String,
    // required: 'Please enter a departure time'
  },
  rideType: {
    type: [{
      type: String,
      enum: ['Party', 'Low-Key', 'Mixed']
    }],
    default: 'Mixed'
  },
  description: {
    type: String,
    // required: 'Please describe this bus offering'
  }
});

module.exports = mongoose.model('Bus', BusSchema);
