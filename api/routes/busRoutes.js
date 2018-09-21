'use strict';
module.exports = function(app) {
  var bus = require('../controllers/busController');

  // todoList Routes
  app.route('/bus')
    .get(bus.getBusList)
    .post(bus.createBus);

console.log(bus);
console.log(bus.getBus);
    app.route('/bus/:busId')
      .get(bus.getBus)
      .put(bus.updateBus)
      .delete(bus.deleteBus);

};
