const path = require('path');

const express = require('express');
const router = express.Router();
const {
    indexHome,
} = require("../controllers/default/home-controller.js");

const {
    getAllProperti,
} = require("../controllers/api/api-properti-controller");
const {
    getAllPenywaProperti,
} = require("../controllers/api/api-penyewa-controller");
const {
    getAllPesanan,
} = require("../controllers/api/api-pesanan-controller");


router.get('/', indexHome);
router.get('/penyewa', getAllPenywaProperti);
router.get('/daftar-penyewa', getAllPesanan);

module.exports = router;