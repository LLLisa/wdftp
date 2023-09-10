const express = require("express");
const app = express();
const path = require("path");
const { client } = require("../db");

app.use("/dist", express.static(path.join(__dirname, "../../dist")));

app.get("/", (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, "../../client/public/index.html"));
    } catch (error) {
        next(error);
    }
});

app.get("/posts", async (req, res, next) => {
    try {
        const response = await client.query(`SELECT * FROM posts;`);
        res.send(response.rows);
    } catch (error) {
        next(error);
    }
});

app.get("/posts/:id", async (req, res, next) => {
    try {
        const response = await client.query(`SELECT * FROM posts WHERE id = ${req.params.id};`);
        res.send(response.rows[0]);
    } catch (error) {
        next(error);
    }
});

app.get("/authors", async (req, res, next) => {
    try {
        const response = await client.query(`SELECT * FROM authors;`);
        res.send(response.rows);
    } catch (error) {
        next(error);
    }
});

module.exports = app;
