import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Do pobrania parametrów z URL
import ReactMarkdown from 'react-markdown'; // Do renderowania Markdown
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'; // Do kolorowania składni
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Importujemy języki programowania do kolorowania składni
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import excel from 'react-syntax-highlighter/dist/esm/languages/hljs/excel';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';

// Rejestrujemy języki w SyntaxHighlighter
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('excel', excel);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('go', go);

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
        <div>
            <ReactMarkdown
                children={content}
                components={{
                    // Definiujemy komponent do renderowania kodu z kolorowaniem składni
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={docco}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    );
}

export default MarkdownPage;
