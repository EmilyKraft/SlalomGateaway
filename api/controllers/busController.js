'use strict';

var mongoose = require('mongoose'),
  Bus = mongoose.model('Bus');

exports.getBusList = function(req, res) {
  Bus.find({}, function(err, bus) {
    if (err)
      res.send(err);
    res.json(bus);
  });
};


exports.createBus = function(req, res) {
  var newBus = new Bus(req.body);
  newBus.save(function(err, bus) {
    if (err)
      res.send(err);
    res.json(bus);
  });
};


exports.getBus = function(req, res) {
  Bus.findById(req.params.busId, function(err, bus) {
    if (err)
      res.send(err);
    console.log(bus);
    res.json(bus);
  });
};


exports.updateBus = function(req, res) {
  Task.findByIdAndUpdate(req.params.busId, req.body, {new: true}, function(err, bus) {
    if (err)
      res.send(err);
    res.json(bus);
  });
};


exports.deleteBus = function(req, res) {
  Bus.findByIdAndRemove(req.params.busId, function(err, bus) {
    if (err)
      res.send(err);
    res.json({ message: 'Bus successfully deleted' });
  });
};
