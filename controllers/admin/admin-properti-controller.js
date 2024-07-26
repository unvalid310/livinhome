const indexPemilikKontrakan = (req, res) => {
    res.render('admin/pages/properti/properti', {
        modal: null,
        pageTitle: 'Livinhome - Pemilik Kontrakan ',
        title: 'Daftar Kontrakan',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}
const indexPemilikKost = (req, res) => {
    res.render('admin/pages/properti/properti', {
        modal: null,
        pageTitle: 'Livinhome - Pemilik Kost ',
        title: 'Daftar Kost',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}
const indexPemilikApartemen = (req, res) => {
    res.render('admin/pages/properti/properti', {
        modal: null,
        pageTitle: 'Livinhome - Pemilik Apartemen ',
        title: 'Daftar Apartemen',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexPemilikKontrakan,
    indexPemilikKost,
    indexPemilikApartemen,
}