// This declaration imports mongoose.
const mongoose = require("mongoose");

// This schema is to provide information about the database information.
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

// This funcion exports data.
module.exports = mongoose.model("Persons", PersonSchema);