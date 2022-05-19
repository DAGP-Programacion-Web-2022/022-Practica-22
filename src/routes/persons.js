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

// This function create and assign a route that points to a person site.
router.get('/person', (req, res) => {
    res.render("person");
});

router.post("/addPerson", (req, res) => {
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    myPerson.save();
});

// This function create and assign virtual directory that points to a static directory.
module.exports = router;