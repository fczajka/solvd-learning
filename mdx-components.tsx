import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-2xl font-bold mt-6 mb-3 border-b border-gray-300 lg:text-4xl'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-xl font-semibold mt-5 mb-2 border-b border-gray-200 lg:text-3xl'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-lg font-semibold mt-4 mb-2 lg:text-2xl'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-lg font-semibold mt-3 mb-1 lg:text-xl'>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className='text-base font-semibold mt-2 mb-1 lg:text-lg'>
        {children}
      </h5>
    ),
    p: ({ children }) => (
      <p className='text-sm leading-6 my-2 lg:text-base'>{children}</p>
    ),
    ul: ({ children }) => <ul className='list-disc pl-5 my-2'>{children}</ul>,
    ol: ({ children }) => (
      <ol className='list-decimal pl-5 my-2'>{children}</ol>
    ),
    li: ({ children }) => (
      <li className='text-sm mb-1 lg:text-base'>{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4'>
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className='bg-gray-100 border border-gray-300 rounded px-1 text-sm'>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className='bg-gray-100 border border-gray-300 rounded p-2 overflow-x-auto my-4'>
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a href={href} className='text-blue-600 hover:underline'>
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className='max-w-full my-4' />
    ),
    table: ({ children }) => (
      <table className='border-collapse border border-gray-300 my-4'>
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th className='border border-gray-300 bg-gray-100 px-2 py-1 text-left'>
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className='border border-gray-300 px-2 py-1'>{children}</td>
    ),
    ...components,
  };
}
