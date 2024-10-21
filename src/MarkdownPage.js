import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const MarkdownPage = () => {
  const { markdownName } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`./markdown/${markdownName}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(text => setContent(text));
      })
      .catch(err => setContent('# Markdown file not found'));
  }, [markdownName]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
