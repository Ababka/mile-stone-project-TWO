// DEPENDENCIES
const express = require('express'); // to use express framework
const pool = require('../models/db'); // to use the db file inside models folder that has access to the postgreSQL database we created.

const stocks = express.Router(); // variable to use express framework as a router for all CRUD routes.


// ROUTES:

    // INDEX (READ) ROUTE - list of all stocks data from the database
stocks.get('/', async (req, res) => {
    try {
        const allStocks = await pool.query(
            "SELECT * FROM stocks"
        );
        
        res.json(allStocks.rows); // response to return from json format all data and rows.

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});

    // Read Route for a single stock to update or delete that one stock in particular
stocks.get('/:id', async (req, res) => {
    try {
        const { id } = req.params; // destructure id for access to each stock individually by the id as parameter for the request.
        const stock = await pool.query(
            "SELECT * FROM stocks WHERE stock_id = $1",
            [id] // $1 refers to the first parameter which in this case there is only 1 parameter - [id].
        );

            res.json(stock.rows[0]); // response to return from json the first row in the array of data because it's just one stocks information.

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // CREATE ROUTE (add new stock) - POST route   
stocks.post('/', async (req, res) => {
    try {
        const { symbol, stock_name, price } = req.body; // destrucure symbol, stock_name, price to show what can be created as the body of the request and added as data.
        const newStock = await pool.query(
            "INSERT INTO stocks(symbol, stock_name, price) VALUES($1, $2, $3) RETURNING *",
            [symbol, stock_name, price] // using 3 parameters where $1, $2, $3 each match up to each parameter
            );

            res.json(newStock.rows[0]); // response to return the created stock row (first one in the array since there is only one being created at a time.)

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // UPDATE ROUTE - (PUT route)
stocks.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; // destructuring id to be the parameter of the request because we are grabbing one by their id to update.
        const { symbol, stock_name, price } = req.body; // same as the above (create route), to create the body (that be changed/updated) from destructuring the symbol, stock_name, and price.
        const updateStock = await pool.query(
            "UPDATE stocks SET symbol = $2, stock_name = $3, price = $4 WHERE stock_id = $1",
            [id, symbol, stock_name, price] // update query finds the stock to update by the id ($1/ 1st parameter) and sets the data being changed whether it is the symbol, stock_name, and/or price ($2, $3, $4/ 2nd, 3rd, and 4th parameters).
        );

            res.json('Stock was UPDATED!') // returns response of json that logs in the terminal ('Stock was UPDATED!').
            console.log(res.json())

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


    // DELETE ROUTE
stocks.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params; // grabs stock by id for the parameter of the request to be able to delete that one in particular.
        const deleteStock = await pool.query(
            "DELETE FROM stocks WHERE stock_id = $1",
            [id]
        );

            res.json("Stock was DELETED!") // returns a response from json that logs in the terminal ('Stock was DELETED!').

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});


module.exports = stocks; // export the variable of stocks that is using express framework as a router to complete all necessary routes.