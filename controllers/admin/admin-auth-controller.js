const login = (req, res, next) => {
    res.render('admin/pages/auth/login-page', {
        pageTitle: 'Livinhome - Login',
        layout: 'admin/pages/auth/login-page',
    });
}

module.exports = {
    login,
}