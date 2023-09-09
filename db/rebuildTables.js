const client = require("./conn");
// const testPost = require("../posts/test.md");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const buildPosts = `DROP TABLE IF EXISTS posts;
CREATE TABLE posts (id SERIAL PRIMARY KEY,author UUID,text TEXT);
`;

const createPost = `INSERT INTO posts (author, text)
VALUES ($1, $2);`;

const testAuthor = uuidv4();
const testPost = fs.readFileSync(path.join(__dirname, "../posts/test.md"));

const rebuild = async () => {
    console.log("REBUILDING TABLES");
    try {
        await client.connect();
        await client.query(buildPosts);
        await client.query(createPost, [testAuthor, testPost]);
        await client.end();
    } catch (error) {
        console.log(error);
    }
};

rebuild();
