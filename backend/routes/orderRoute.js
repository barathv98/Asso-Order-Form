const express = require('express');
const { confirmOrder } = require('../controllers/orderController');

const router = express.Router();
router.route('/').post(confirmOrder);

module.exports = router;