const indexPenyewaKontrakan = (req, res) => {
    res.render('admin/pages/penyewa/penyewa', {
        modal: null,
        pageTitle: 'Livin Home - Penyewa Kontrakan ',
        title: 'Daftar Penyewa Kontrakan',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}
const indexPenyewaKost = (req, res) => {
    res.render('admin/pages/penyewa/penyewa', {
        modal: null,
        pageTitle: 'Livin Home - Penyewa Kost ',
        title: 'Daftar Penyewa Kost',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}
const indexPenyewaApartemen = (req, res) => {
    res.render('admin/pages/penyewa/penyewa', {
        modal: null,
        pageTitle: 'Livin Home - Penyewa Apartemen ',
        title: 'Daftar Penyewa Apartemen',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexPenyewaKontrakan,
    indexPenyewaKost,
    indexPenyewaApartemen,
}