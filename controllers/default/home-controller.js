const indexHome = (req, res) => {
    res.render('default/home-page', {
        modal: null,
        pageTitle: 'Livin Home - Beranda ',
        title: 'Dashboard',
        layout: 'default/home-page',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexHome,
};