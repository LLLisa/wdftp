import React, { useEffect, useState } from "react";

import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

const API_URL = "http://localhost:1312";

export default () => {
    const [post, setPost] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`${API_URL}/posts/1`);
        setPost(await response.json());
    };

    return (
        post.id && (
            <article>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                <Markdown>{post.text}</Markdown>
            </article>
        )
    );
};
