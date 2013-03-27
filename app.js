var express = require('express'),
    app = express();

app.locals.pretty = true;

/**
 * config
 * 
 */
app.configure(function() {
    app.set('port', process.argv[2] || process.env.PORT || 9999);
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use('/public', express.static(__dirname + '/public'));
    app.use(express.bodyParser());
});

app.get('/', function(req, res) {
    res.render('index.jade');
});

/**
 * Start server
 * 
 */

app.listen(app.get('port'), function(){
  console.log("Server started on: " + app.get('port'));
});

/**
 * Start the socket server
 *
 */

var socketio = require('./app_socket');