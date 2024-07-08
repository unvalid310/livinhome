const indexPesanan = (req, res) => {
    res.render('admin/pages/pesanan/pesanan', {
        modal: null,
        pageTitle: 'Livin Home - Daftar Penyewa ',
        title: 'Daftar Pesanan',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexPesanan,
}