import React, { useEffect, useState } from "react";

import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

export default () => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/authors");
            const json = await response.json();
            setAuthorList(json);
        };

        fetchData().catch(console.error);
    }, []);

    return (
        authorList.length && (
            <ul>
                {authorList.map(author => (
                    <li>
                        <article>
                            <h1>{author.name}</h1>
                            <img src={author.imgUrl} />
                            <Markdown>{author.profile}</Markdown>
                        </article>
                    </li>
                ))}
            </ul>
        )
    );
};
