'use strict';
var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET persons list. */
router.get('/personlist', function (req, res) {
    db.getAllPersons(function (err, jsonResult) {
        res.send(jsonResult);
    });
});

router.get('/person', function (req, res) {
    db.getPerson(req.query.id, function (err, jsonResult) {
        res.send(jsonResult);
    });
});

module.exports = router;

