

var HomeController = require('./controllers/index');

module.exports = function( app ) {

    app.use('/', HomeController);

}