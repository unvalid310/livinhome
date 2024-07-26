const indexPesanan = (req, res) => {
    res.render('admin/pages/pesanan/pesanan', {
        modal: null,
        pageTitle: 'Livinhome - Daftar Penyewa ',
        title: 'Daftar Pesanan',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexPesanan,
}