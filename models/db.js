// Connecting to postgreSQL database per each local machine, (password might change for each person connected to this respository on GitHub).

const Pool = require('pg').Pool; // dependency to use postgres(pg) module that helps connect to postgreSQL database.

const pool = new Pool ({
    user: 'postgres',
    password: '',//enter passwrd here for postgres
    host: 'localhost',
    port: 5432,
    database: 'stocksapp'
});

module.exports = pool; // export to use in controller file.