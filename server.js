// DEPENDENCIES
const express = require('express'); // Node.js framework to help build the back-end. 
const cors = require('cors'); // Cross Origin Resource Sharing - for our JavaScript to use outside scripts like our API calls.


// CONFIGURATION
require('dotenv').config(); // to use the .env file.
const PORT = process.env.PORT; // variable for the port number inside the .env file.
const app = express(); // variable to use express framework.


// MIDDLEWARE (happens between req & res)
app.use(cors()); // to use cors between HTTP requests and responses.
app.use(express.json()); // to use express in a json format.


// ROOT ROUTE (home page route) - simple GET route for accessing the landing page for the back-end. (localhost)
app.get('/', (req, res) => {
    res.send('Welcome to my full-stack stocks portfolio app')
});


// CONTROLLER ROUTE - to route to the controller file for accessing all other CRUD routes.
const stocksController = require('./controllers/stocks_controller');
app.use('/stocks', stocksController);


// SERVER LISTEN - access to back-end server
app.listen(PORT, () => {
    console.log('We out here on port', PORT);
});