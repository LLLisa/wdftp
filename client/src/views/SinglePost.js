import React, { useEffect, useState } from "react";

import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

export default () => {
    const [post, setPost] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/posts/1");
            const json = await response.json();
            setPost(json);
        };

        fetchData().catch(console.error);
    }, []);
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
