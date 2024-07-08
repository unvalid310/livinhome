const path = require('path');

const express = require('express');
const router = express.Router();

const {
  indexDashboard
} = require('../controllers/admin/admin-dashboard-controller');
const {
  indexPemilikKontrakan,
  indexPemilikKost,
  indexPemilikApartemen,
} = require('../controllers/admin/admin-properti-controller');
const {
  indexPenyewaKontrakan,
  indexPenyewaKost,
  indexPenyewaApartemen,
} = require('../controllers/admin/admin-penyewa-controller');
const {
  indexPesanan,
} = require('../controllers/admin/admin-pesanan-controller');
const {
  login
} = require('../controllers/admin/admin-auth-controller')

// admin
router.get('/login', login);
router.get('/', indexDashboard);
router.get('/dashboard', indexDashboard);
router.get('/pemilik/kontrakan', indexPemilikKontrakan);
router.get('/pemilik/kost', indexPemilikKost);
router.get('/pemilik/apartemen', indexPemilikApartemen);
router.get('/penyewa/kontrakan', indexPenyewaKontrakan);
router.get('/penyewa/kost', indexPenyewaKost);
router.get('/penyewa/apartemen', indexPenyewaApartemen);
router.get('/pesanan', indexPesanan);

// exports our middleware
module.exports = router;