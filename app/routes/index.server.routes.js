module.exports = function(app) {

  var staticPageController = require('../controllers/staticpage.server.controller');

  var usersController = require('../controllers/users.server.controller');

  // ACTUAL ROUTING

  app.get('/', staticPageController.renderHome);
  app.get('/about', staticPageController.renderAbout);
  app.get('/contact', staticPageController.renderContact);

  app.get('/users',usersController.index);
    //To display data for a particular member
  app.get('/users/:name',usersController.show);
 };
