module.exports.renderHome = function(req, res) {
    res.render('static_pages/index', {
      title: 'Hello WDI'
    });
};

module.exports.renderAbout = function(req, res) {
    res.render('static_pages/about', {
      title: 'About WDI'
    });
};

module.exports.renderContact = function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact WDI'
    });
};
