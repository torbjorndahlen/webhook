var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());
  hello.use(bodyParser.json());

  // GET REST endpoint - query params may or may not be populated
  hello.get('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    
        res.statusCode = 200;
        return res.send("OK");
    });


// POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post('/', function(req, res) {
    console.log(new Date(), 'In hello route POST / req.body=', req.body);

    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
  });


  
    return hello;
  }
  

module.exports = helloRoute;
