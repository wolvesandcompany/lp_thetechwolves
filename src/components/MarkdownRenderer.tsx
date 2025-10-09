import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Custom components for markdown rendering with proper styling
const components = {
  // Headings with proper semantic structure and Tailwind styling
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-semibold mb-5 mt-8 text-gray-900 dark:text-white leading-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white leading-tight" {...props}>
      {children}
    </h3>
  ),
  
  // Paragraphs with optimal line height for readability
  p: ({ children, ...props }: any) => (
    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg" {...props}>
      {children}
    </p>
  ),
  
  // Lists with proper spacing
  ul: ({ children, ...props }: any) => (
    <ul className="mb-4 pl-6 list-disc text-gray-700 dark:text-gray-300 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="mb-4 pl-6 list-decimal text-gray-700 dark:text-gray-300 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-lg leading-relaxed" {...props}>
      {children}
    </li>
  ),
  
  // Links with brand colors and hover effects
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  
  // Blockquotes with distinctive styling
  blockquote: ({ children, ...props }: any) => (
    <blockquote 
      className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-gray-50 dark:bg-gray-800 italic text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  // Code blocks with syntax highlighting
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6 text-sm" {...props}>
      {children}
    </pre>
  ),
  
  // Inline code with subtle background
  code: ({ children, className, ...props }: any) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props}>
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
  
  // Images with responsive styling and lazy loading
  img: ({ src, alt, ...props }: any) => (
    <img
      src={src}
      alt={alt || ''}
      loading="lazy"
      className="w-full h-auto rounded-lg shadow-md my-6 max-w-full"
      {...props}
    />
  ),
  
  // Horizontal rule styling
  hr: ({ ...props }: any) => (
    <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
  ),
  
  // Tables with responsive design
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: any) => (
    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" {...props}>
      {children}
    </td>
  ),
};

// Main markdown renderer component with SEO-optimized HTML output
export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}