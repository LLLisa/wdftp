import React, { useEffect, useState } from "react";
import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

const API_URL = "http://localhost:1312";

export default () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`${API_URL}/posts`);
        setPostList(await response.json());
    };

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
