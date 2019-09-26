'use strict';
var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET persons list. */
router.get('/personlist', function (req, res) {
    db.getAllPersons({req: req,res: res});
});

router.get('/person', function (req, res) {
    db.getPerson(req.query.id, { req: req, res: res });
});

module.exports = router;
