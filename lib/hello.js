var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  hello.get('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    
        res.statusCode = 200;
        return res.send("OK");
    });
  
    return hello;
  }
  

module.exports = helloRoute;
