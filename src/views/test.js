import React from "react";

import { ReactMarkdown as Markdown } from "react-markdown/lib/react-markdown";

import test from "../lessons/testlesson/test.md";

export default () => {
    return <Markdown>{test}</Markdown>;
};
