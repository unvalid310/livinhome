const path = require('path');

const express = require('express');
const router = express.Router();
const {
    indexHome,
} = require("../controllers/default/home-controller.js");
const {
    indexProperty,
    detailProperty,
    checkoutProperty,
} = require("../controllers/default/property-controller.js");
const {
    indexLivinmate,
} = require("../controllers/default/livinmate-controller.js");

router.get('/', indexHome);
router.get('/property', indexProperty);
router.get('/property-detail', detailProperty);
router.get('/checkout', checkoutProperty);
router.get('/livinmate', indexLivinmate);

module.exports = router;