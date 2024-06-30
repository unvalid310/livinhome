const path = require('path');

const express = require('express');
const router = express.Router();
const {
    getAllKontrakan,
} = require("../controllers/api/api-kontrakan-controller");
const {
    getAllKost,
} = require("../controllers/api/api-kost-controller");
const {
    getAllApartemen,
} = require("../controllers/api/api-apartemen-controller");


router.post('/kontrakan', getAllKontrakan);
router.post('/kost', getAllKost);
router.post('/apartemen', getAllApartemen);

module.exports = router;