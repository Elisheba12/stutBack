const express = require('express');
const { apiController, homeController } = require('../controller/routeController');
const router = express.Router();


router.get('/', homeController);
router.get('/api', apiController);

module.exports = router