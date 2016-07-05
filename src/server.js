var debug = require('debug')('server');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.db);

var Device = require('./models/device');

var router = express.Router();

var device = new Device();
device.id = 1;
device.name = "Device 1";
device.save();

router.get('/devices', function (req, res) {
    var result = Device.find(function (err, devices) {
        if (err) {
            debug("/devices-ERROR:", err);
            res.status(500).jsonp(err);
        }
        else {
            debug('GET devices', devices);
            res.status(200).jsonp(devices);
        }
    });
});

app.use('/', router);

app.listen(port);
debug('Running on http://localhost:' + port);
console.log('Running on http://localhost:' + port);