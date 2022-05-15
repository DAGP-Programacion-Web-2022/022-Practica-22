// Express Node Module is imported successfully.
import express from 'express';

// Declaration of app constant and express function is assigned to app const.
const app = new express();

// This function create and assign variable that points to a person route.
import personsRoutes from './routes/person.js';

// This variable assigns the port that express will be using.
let port = process.env.PORT || 3000;

// These functions creates and assigns virtual directory that points to a static directory.
app.use('/assets', express.static('./public'));
app.use(personsRoutes);

// This function set ejs engine
app.set('view engine', 'ejs');

// This function assigns the port that express will be using, port parameter was assigned in port variable.
app.listen(port, () => {
    console.log(`Escuhando en el puerto ${port}`)
});