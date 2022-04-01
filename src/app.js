// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

// This variable assigns the port that express will be using.
let port = process.env.PORT || 3000;

// This function create and assign virtual directory that points to a static directory.
app.use('/assets', express.static('./public'));

// This function creates a debug log in console of any page that is requested.
app.use('/', (req, res, next) => {
    console.log(`Request Url ${req.url}`);
    next();
});

app.set('view engine', 'ejs');

// This function sends information to the server and route assignation (HTML).
app.get('/', (req, res) => {
    res.render('index')
});

// This function sends information to the server and route assignation (JSON).
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe'});
});

// This function sends information to the server and route assignation (HTML with REQUEST INFO (HTTP ROUTE)).
app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id});
});

// This function assigns the port that express will be using, port parameter was assigned in port variable.
app.listen(port);