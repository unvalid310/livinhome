const indexLivinmate = (req, res) => {
    return res.render(
        'default/pages/livinmate/index', {
            modal: null,
            pageTitle: 'Livinhome - Livinmate ',
            layout: 'default/livinmate-layout',
            extractScripts: true,
            extractStyles: true,
        });
}

module.exports = {
    indexLivinmate,
};