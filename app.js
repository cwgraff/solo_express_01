/**
 * Created by cwgraff on 1/6/16.
 */


var express = require('express');
var path = require('path');
var jquery = require('jquery');
var balance = require('./public/modules/balance');
var app = express();

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port', port);
});

app.use(express.static('public'));

app.get('/', function(request, response){
    console.log(__dirname);

    var ourPath = path.join(__dirname, '/public/index.html');

    console.log('ourPath', ourPath);

    response.sendFile(ourPath);

});

app.get('/balance.js', function(request, response){
    //console.log('Log return');

    response.send(balance.message() + "<br>" + balance.money().toString());
    //response.send(balance.money().toString());
    //console.log(balance.money().toString());

    //response.send('Return from request');

});