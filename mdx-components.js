import { Link } from "@/src/i18n/navigation";

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-bold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bold mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="font-bold">{children}</h4>,
    p: ({ children }) => (
      <p className="leading-snug">{children}</p>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-2">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1">{children}</ul>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    em: ({ children }) => (
      <em className="font-medium">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-medium">{children}</strong>
    ),
    a: ({ href, className, children }) => {
      if (href?.startsWith('#')) {
        return (
          <a href={href} className={className}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    },
    ...components,
  }
}