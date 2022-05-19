// Express Node Modules and dependencies are imported successfully.
const express = require('express');
const router = express.Router();
let Person = require('../models/person');
const mongoose = require("../../node_modules/mongoose");

// This function create and assign a route that points to a person site.
router.get('/persons', (req, res) => {
    Person.find((err, persons) => {
        if (err) {
            return next(err);
        } else {
            res.json(persons);
        }
    });
});

// This function create and assign virtual directory that points to a static directory.
module.exports = router;