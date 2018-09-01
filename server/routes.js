const router = require('express').Router();
const controller = require('./controllers.js');

router
  .route('/pokemon')
  .get(controller.pokemon.get);

router
  .route('/user')
  .get(controller.user.get)
  .post(controller.user.post)
  .delete(controller.user.delete);

module.exports = router;