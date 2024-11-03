import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Do pobrania parametrów z URL
import ReactMarkdown from 'react-markdown'; // Do renderowania Markdown
import remarkGfm from 'remark-gfm'; // Obsługa składni GitHub Flavored Markdown
import rehypeHighlight from 'rehype-highlight'; // Automatyczne kolorowanie składni

// Import jasnego motywu dla GitHub Markdown
import 'github-markdown-css/github-markdown-light.css';

// Import jasnego motywu dla kolorowania składni
import 'highlight.js/styles/github.css'; // Lub inny jasny motyw

function MarkdownPage() {
    // Pobieramy parametr markdownName z URL
    const { markdownName } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        // Pobieramy zawartość pliku Markdown
        fetch(`/markdown/${markdownName}.md`)
            .then(res => res.text())
            .then(setContent)
            .catch(console.error);
    }, [markdownName]);

    

    return (
        <div className="markdown-body">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            />
        </div>
    );
}

export default MarkdownPage;
