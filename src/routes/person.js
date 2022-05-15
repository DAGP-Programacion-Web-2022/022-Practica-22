// Express Node Module is imported successfully.
import express from 'express';
// Declaration of app constant and express function is assigned to app const.
const app = new express();

// This variable assigns the const router that express will be using.
const router = express.Router();

// This function create and assign a route that points to a person site.
router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas')
});

// This function create and assign virtual directory that points to a static directory.
app.use('/assets', express.static('./public'));

export default router;