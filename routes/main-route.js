const path = require('path');

const express = require('express');
const router = express.Router();
const {
    indexHome,
} = require("../controllers/default/home-controller.js");
const {
    indexKost,
} = require("../controllers/default/list-property-controller.js");

router.get('/', indexHome);
router.get('/property', indexKost);

module.exports = router;