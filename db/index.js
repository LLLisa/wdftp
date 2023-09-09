const client = require("./conn");

const dbInit = async () => {
    try {
        await client.connect();

        const result = await client.query("SELECT NOW()");
        if (Object.keys(result.rows[0][0] === "now")) console.log("postgres connection established");

        await client.end();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { client, dbInit };
