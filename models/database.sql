-- Queries used to set-up the postgreSQL database in the beginning on your local machine.
-- This adds the beginning seed data to start with.

CREATE DATABASE stocksapp;

CREATE TABLE stocks(
    stock_id SERIAL PRIMARY KEY,
    symbol VARCHAR(255),
    stock_name VARCHAR(255),
    price MONEY
);

INSERT INTO stocks(
    stock_id, symbol, stock_name, price)
    VALUES(
        1, 'AAPL', 'Apple', 240.45
    ), (
        2, 'AMZN', 'Amazon', 2231.65
    ), (
        3, 'TWTR', 'Twitter', 41.97
    ), (
        4, 'MSFT', 'Microsoft', 352.85
    );