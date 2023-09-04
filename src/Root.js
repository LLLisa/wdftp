import React from "react";
import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

import test from "./lessons/testlesson/test.md";

export default () => {
    return (
        <>
            <h1>please work</h1>
            <ul>
                <li>
                    <Markdown>{test}</Markdown>
                </li>
            </ul>
        </>
    );
};
