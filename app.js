var express = require('express');
var app = express();

//setup ports

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function(req, res){
    res.end('Hello World!');    
});

//server listen
app.listen(server_port, server_ip_address, function(){
    console.log("Listerning on " + server_ip_address + ", server port " + server_port);
});