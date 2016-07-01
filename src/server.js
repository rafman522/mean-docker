var devices = [
    {
        "id": 1,
        "name": "Device 1"
    },
    {
        "id": 2,
        "name": "Device 2"
    }
];

var debug = require('debug')('server');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.db);

var device = require('./models/device');

var router = express.Router();

router.get('/devices', function (req, res) {
    var result = device.find(function (err, devices) {
        if (err) {
            debug("/devices-ERROR:", err);
            res.status(500).jsonp(err);
        }
        else {
            debug('GET devices', result);
            res.status(200).jsonp(result);
        }
    });
});

app.use('/', router);

app.listen(port);
debug('Running on http://localhost:' + port);
console.log('Running on http://localhost:' + port);