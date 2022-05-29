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
            // res.json(persons);
            res.render('persons',{'persons' : persons} );
        }
    });
});

// Delete Person
router.get('/deletePerson/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    });
    res.redirect(req.get('referer'));
});

// SHows Person that is gonna be edited.
router.get('/findById/:id', (req, res, next) => {
    Person.findById(req.params.id, (err, person) => {
        res.render('personUpdate', {'person' : person});
    });
});

// Edit the contact
router.post("/updatePerson", (req, res, next) => {
    Person.findByIdAndUpdate(req.body.objId, {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }, (err, post) => {
        if (err) {
            return next(err);
        }
        res.redirect("./persons");
    });
});

// This function create and assign a route that points to a person site.
router.get('/person', (req, res) => {
    res.render("person");
});

router.get('/', (req, res) => {
    res.render("index");
});

// This function create and assign a route that points to a person site.
router.post("/addPerson", (req, res) => {
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    myPerson.save();
    
    res.redirect("./persons");
});

// This function create and assign virtual directory that points to a static directory.
module.exports = router;