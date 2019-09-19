'use strict';
var express = require('express');
var router = express.Router();
var db = require('../lib/db');

/* GET persons list. */
router.get('/personlist', function (req, res) {
    db.getAllPersons({req: req,res: res});
});

module.exports = router;
