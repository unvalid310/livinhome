const path = require('path');

const express = require('express');
const router = express.Router();

// admin
router.get('/login', (req, res, next) => {
  res.render('admin/pages/auth/login-page', {
    pageTitle: 'Livin Home - Login',
    layout: 'admin/pages/auth/login-page',
  });
});

router.get('/dashboard', (req, res, next) => {
  res.render('admin/pages/dashboard/dashboard', {
    pageTitle: 'Livin Home - Admin Dashboard ',
    title: 'Dashboard',
    layout: 'admin/admin-layout.ejs',
    extractScripts: true,
    extractStyles: true,
  });
});

router.get('/pemilik/kontrakan', (req, res, next) => {
  res.render('admin/pages/kontrakan/kontrakan', {
    pageTitle: 'Livin Home - Pemilik Kontrakan ',
    title: 'Daftar Kontrakan',
    layout: 'admin/admin-layout.ejs',
    extractScripts: true,
    extractStyles: true,
  });
});

router.get('/pemilik/kost', (req, res, next) => {
  res.render('admin/pages/kost/kost', {
    pageTitle: 'Livin Home - Pemilik Kost ',
    title: 'Daftar Kost',
    layout: 'admin/admin-layout.ejs',
    extractScripts: true,
    extractStyles: true,
  });
});

router.get('/pemilik/apartemen', (req, res, next) => {
  res.render('admin/pages/apartemen/apartemen', {
    pageTitle: 'Livin Home - Pemilik Apartemen ',
    title: 'Daftar Apartemen',
    layout: 'admin/admin-layout.ejs',
    extractScripts: true,
    extractStyles: true,
  });
});

// exports our middleware
module.exports = router;