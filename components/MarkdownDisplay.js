// components/MarkdownDisplay.js
import React from 'react';

const MarkdownDisplay = ({ content }) => {
  return (
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
        );
        };

        export default MarkdownDisplay;
        