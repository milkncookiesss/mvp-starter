const router = require('express').Router();
const controller = require('./controllers.js');

router
  .route('/pokemon')
  .get(controller.get);

// router
//   .route('/user')
  module.exports = router;