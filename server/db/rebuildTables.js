const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/wdftp";

const client = new Client({
    connectionString: DATABASE_URL,
});

const buildPosts = `DROP TABLE IF EXISTS posts;
CREATE TABLE posts (id SERIAL PRIMARY KEY,author UUID,title VARCHAR(255),text TEXT);
`;

const buildAuthors = `DROP TABLE IF EXISTS authors;
CREATE TABLE authors (id UUID PRIMARY KEY, imgUrl VARCHAR(255), profile TEXT);
`;

const createPost = `INSERT INTO posts (author, title, text)
VALUES ($1, $2, $3);
`;

const createAuthor = `INSERT INTO authors (id, imgUrl, profile)
VALUES ($1, $2, $3);
`;

const testAuthor = uuidv4();
const testPost = fs.readFileSync(path.join(__dirname, "../../posts/test.md"));

const rebuild = async () => {
    console.log("REBUILDING TABLES");
    try {
        await client.connect();
        await client.query(buildPosts);
        await client.query(buildAuthors);
        await client.query(createPost, [testAuthor, "TEST TITLE", testPost]);
        await client.query(createPost, [testAuthor, "TEST TITLE 2", testPost]);
        await client.query(createAuthor, [testAuthor, "imgurl", "test profile"]);
        await client.end();
    } catch (error) {
        console.log(error);
    }
};

rebuild();
