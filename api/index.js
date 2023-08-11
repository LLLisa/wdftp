const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
    try {
        res.sendFile('index.html');
    } catch (error) {
        next(error);
    }
});

module.exports = app;
