const express = require('express');
const { confirmOrder } = require('../controllers/orderController');

const router = express.Router();
router.post('/', confirmOrder);

module.exports = router;