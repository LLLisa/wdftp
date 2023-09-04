import React, { useEffect } from "react";
import Markdown from "markdown-to-jsx";

import test from "../lessons/testlesson/test.md";
console.log(test);

export default () => {
    return (
        <>
            <h1>please work</h1>
            <ul>
                <li>
                    <Markdown>{test}</Markdown>;
                </li>
            </ul>
        </>
    );
};
