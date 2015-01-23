var express = require('express'),
    app = express();
var server = require('http').createServer(app);
//var io = require('socket.io')(server);
var port = process.env.PORT || 5000;
var debug = require('debug')('index.js');
var io = require('socket.io')(server);

server.listen(port, function () {
    console.log('I\'m listening to port: %d', port);
    debug("Server is listening at port %d", port);
});

app.get("/student/:id", function (req, res) {
    res.end(req.params.id + " rocks!");
});

app.use(express.static(__dirname + '/www/'));
