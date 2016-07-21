const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.renderIndex);

router
  .route('/novo')
  .get(controller.renderNew)
  .post(controller.create);

module.exports = router;
