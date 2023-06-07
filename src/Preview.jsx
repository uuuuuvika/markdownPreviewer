import React from "react";
import { marked } from "marked";
//to purify the input: https://github.com/kkomelin/isomorphic-dompurify
//import DOMPurify from 'isomorphic-dompurify';

function Preview({ text }) {
    // to sanitize:
    // const clean = DOMPurify.sanitize(text);
     const renderer = new marked.Renderer();
     renderer.blockquote = (quote) =>
        `<blockquote class="preview-blockquote">${quote}</blockquote>`;
    // const parsedText = marked(clean, { breaks: true, renderer });
    const parsedText = marked(text, {breaks: true, renderer});

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: parsedText }}></div>
    );
}

export default Preview;