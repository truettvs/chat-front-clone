import type { HTMLAttributes } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

interface AssistantMarkdownProps {
  content: string;
  className?: string;
}

const mdComponents: Components = {
  p: ({ className, ...props }) => (
    <p
      className={cn("mb-3 leading-relaxed last:mb-0", className)}
      {...props}
    />
  ),
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mb-2 mt-4 text-lg font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mb-2 mt-4 text-base font-semibold first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mb-2 mt-3 text-sm font-semibold first:mt-0", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn("mb-2 mt-3 text-sm font-medium first:mt-0", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("my-2 list-disc space-y-0.5 pl-5", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-2 list-decimal space-y-0.5 pl-5", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
  em: ({ className, ...props }) => (
    <em className={cn("italic", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a
      {...props}
      className={cn(
        "font-medium text-primary underline-offset-4 hover:underline",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-3 border-l-2 border-primary/40 pl-3 text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-4 border-border", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-3 overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-sm",
        className,
      )}
      {...props}
    />
  ),
  code: (props) => {
    const { className, inline, ...rest } = props as HTMLAttributes<HTMLElement> & {
      inline?: boolean;
    };
    return inline ? (
      <code
        className={cn(
          "rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-[0.875em] font-normal",
          className,
        )}
        {...rest}
      />
    ) : (
      <code
        className={cn("block font-mono text-sm text-foreground", className)}
        {...rest}
      />
    );
  },
  table: ({ className, ...props }) => (
    <div className="my-3 w-full overflow-x-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={cn(className)} {...props} />
  ),
  tbody: ({ className, ...props }) => (
    <tbody className={cn(className)} {...props} />
  ),
  tr: ({ className, ...props }) => (
    <tr className={cn("border-border", className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn("border border-border bg-muted/40 px-2 py-1 text-left font-medium", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border border-border px-2 py-1", className)} {...props} />
  ),
};

export function AssistantMarkdown({ content, className }: AssistantMarkdownProps) {
  return (
    <div
      className={cn(
        "max-w-none text-sm leading-relaxed text-foreground",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={mdComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
