const { Client } = require("pg");
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/wdftp";

const client = new Client({
    connectionString: DATABASE_URL,
});

(async () => {
    await client.connect();
})();

module.exports = client;
