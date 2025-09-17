import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 rounded-t-lg border border-gray-700">
        <span className="text-sm font-medium">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="bg-gray-950 text-gray-100 p-4 rounded-b-lg overflow-x-auto border-l border-r border-b border-gray-700">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;