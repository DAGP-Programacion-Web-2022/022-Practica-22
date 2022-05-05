// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

// This variable assigns the port that express will be using.
let port = process.env.PORT || 3000;

// This function create and assign virtual directory that points to a static directory.
app.use('/assets', express.static('./public'));

// This function creates a debug log in console of any page that is requested.
app.use(express.urlencoded({ extended: false}));

// This function set ejs engine
app.set('view engine', 'ejs');

// This function sends information to the server, route assignation and view (HTML).
app.get('/student', (req, res) => {
    res.render('index')
});

app.post('/student', (req, res) => {

    if (req.body.fname == null || req.body.fname == "") {
        req.body.fname = "SIN NOMBRE"
    }

    if (req.body.lname == null || req.body.lname == "") {
        req.body.lname = "SIN APELLIDO"
    }

    res.send(`First Name es: ${req.body.fname}<br> Last Name es: ${req.body.lname}`);
});

app.get('/', (req, res) => {
    res.redirect('./student');
});

// This function assigns the port that express will be using, port parameter was assigned in port variable.
app.listen(port);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// LEGACY CODE

// // This function sends information to the server, route assignation and view (HTML) with Parameters.
// app.get('/person/:id', (req, res) => {
//     res.render('person', {ID: req.params.id, Qstr: req.query.qrst, M: req.query.message, T: req.query.times});
// });
