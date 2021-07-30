module.exports = function (app) {
  //load the controllers
  var index = require('../controllers/index.server.controller');
  var login = require('../controllers/login.server.controller');
  var logout = require('../controllers/logout.server.controller');
  var commentsForm = require('../controllers/commentsform.server.controller');
  var thanks = require('../controllers/thanks.server.controller');
  //handle the routing of get and post request
  app.get('/', index.render);
  app.get('/login', index.render);
  app.post('/login', login.render);
  app.get('/input', commentsForm.render);
  app.get('/logout', logout.render);
  app.post('/thankyou', thanks.render);
  //
  app.post('/', function (req, res) {
      //console.log("POST request - User name = " + req.body.username);
      index.render(req, res);
      
  });

};
