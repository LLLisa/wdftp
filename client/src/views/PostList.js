import React, { useEffect, useState } from "react";

import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

export default () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/posts");
            const json = await response.json();
            setPostList(json);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        postList.length && (
            <ul>
                {postList.map(post => (
                    <li>
                        <article>
                            <h1>{post.title}</h1>
                            <p>{post.author}</p>
                            <Markdown>{post.text}</Markdown>
                        </article>
                    </li>
                ))}
            </ul>
        )
    );
};
