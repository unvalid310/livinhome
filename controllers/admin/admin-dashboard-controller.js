const indexDashboard = (req, res) => {
    res.render('admin/pages/dashboard/dashboard', {
        modal: null,
        pageTitle: 'Livin Home - Admin Dashboard ',
        title: 'Dashboard',
        layout: 'admin/admin-layout',
        extractScripts: true,
        extractStyles: true,
    });
}

module.exports = {
    indexDashboard,
};