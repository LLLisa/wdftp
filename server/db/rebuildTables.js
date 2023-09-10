const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost/wdftp";

const client = new Client({
    connectionString: DATABASE_URL,
});

const buildPosts = `DROP TABLE IF EXISTS posts;
CREATE TABLE posts (id SERIAL PRIMARY KEY, author UUID, title VARCHAR(255),text TEXT);
`;

const buildAuthors = `DROP TABLE IF EXISTS authors;
CREATE TABLE authors (id UUID PRIMARY KEY, name VARCHAR(255), imgUrl VARCHAR(255), profile TEXT);
`;

const createPost = `INSERT INTO posts (author, title, text)
VALUES ($1, $2, $3);
`;

const createAuthor = `INSERT INTO authors (id, name, imgUrl, profile)
VALUES ($1, $2, $3, $4);
`;

const testAuthor = uuidv4();
const testAuthorImgUrl =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nTK-yAWL01laY6CKjMEq3gHaHa%26pid%3DApi&f=1&ipt=5e768dda5cc5ea916934d496d432c8e9534f60821ecc1f1cd66bf6f6850f039c&ipo=images";
const testPost = fs.readFileSync(path.join(__dirname, "../../posts/test.md"));

const rebuild = async () => {
    console.log("REBUILDING TABLES");
    try {
        await client.connect();
        await client.query(buildPosts);
        await client.query(buildAuthors);
        await client.query(createPost, [testAuthor, "TEST TITLE", testPost]);
        await client.query(createPost, [testAuthor, "TEST TITLE 2", testPost]);
        await client.query(createAuthor, [testAuthor, "lisaaaaa", testAuthorImgUrl, "test profile"]);
        await client.end();
    } catch (error) {
        console.log(error);
    }
};

rebuild();
