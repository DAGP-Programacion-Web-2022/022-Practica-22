// Express Node Module is imported successfully.
const mongoose = require("mongoose");
const express = require('express');
const personsRoutes = require("./routes/persons");

// Declaration of app constant and express function is assigned to app const.
mongoose.Promise = global.Promise;
const app = express();

// This function set ejs engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(personsRoutes);

// This function connects to database an allows to visualize data.
mongoose.connect(
    "mongodb+srv://diego:yLyoNLeSvR775jtG@cluster0.l5hiy.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// This next functions allows to connect and show information of the status about the database.
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected Successfully");
});

// This variable assigns the port that express will be using.
let port = process.env.PORT || 3000;

// These functions creates and assigns virtual directory that points to a static directory.
app.use('/assets', express.static('./public'));

// This function assigns the port that express will be using, port parameter was assigned in port variable.
app.listen(port, () => {
    console.log(`Escuhando en el puerto ${port}`)
});