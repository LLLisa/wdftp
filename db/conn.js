const { Client } = require("pg");

const databaseUrl = process.env.DATABASE_URL || "postgres://localhost/wdftp";

const conn = new Client({
    connectionString: databaseUrl,
});

module.exports = conn;
