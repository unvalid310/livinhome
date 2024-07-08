const path = require('path');

const express = require('express');
const router = express.Router();
const {
    getAllProperti,
} = require("../controllers/api/api-properti-controller");
const {
    getAllPenywaProperti,
} = require("../controllers/api/api-penyewa-controller");
const {
    getAllPesanan,
} = require("../controllers/api/api-pesanan-controller");


router.post('/properti', getAllProperti);
router.post('/penyewa', getAllPenywaProperti);
router.post('/daftar-penyewa', getAllPesanan);

module.exports = router;