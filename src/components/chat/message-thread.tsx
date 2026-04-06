import { Bot, UserRound } from "lucide-react";

import { AssistantMarkdown } from "@/components/chat/assistant-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ChatMessage } from "@/types/chat";
import { formatDateTime, formatTimeOnly } from "@/lib/format-time";
import { cn } from "@/lib/utils";

interface MessageThreadProps {
  messages: ChatMessage[];
  className?: string;
}

export function MessageThread({ messages, className }: MessageThreadProps) {
  return (
    <ScrollArea className={cn("min-h-0 flex-1", className)}>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 md:px-6">
        {messages.map((m, i) => (
          <MessageRow key={`${i}-${m.sentAt ?? i}`} message={m} />
        ))}
      </div>
    </ScrollArea>
  );
}

function MessageRow({ message: m }: { message: ChatMessage }) {
  if (m.role === "system") {
    return (
      <div className="flex justify-center">
        <div className="max-w-lg rounded-full border border-border bg-muted/40 px-4 py-1.5 text-center text-xs text-muted-foreground">
          {m.message}
        </div>
      </div>
    );
  }

  const isUser = m.role === "user";

  return (
    <div className="flex flex-row gap-3">
      <div
        className={cn(
          "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl border border-border bg-background shadow-sm",
          isUser ? "bg-primary/10" : "bg-muted",
        )}
        aria-hidden
      >
        {isUser ? (
          <UserRound className="size-4 text-primary" />
        ) : (
          <Bot className="size-4 text-muted-foreground" />
        )}
      </div>
      <div className="min-w-0 max-w-[min(100%,42rem)] space-y-1.5 text-left">
        <div
          className={cn(
            "inline-block rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-sm",
            isUser
              ? "border-primary/20 bg-primary text-primary-foreground"
              : "border-border bg-card text-card-foreground",
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap break-words">{m.message}</p>
          ) : (
            <AssistantMarkdown content={m.message} />
          )}
        </div>
        {m.sentAt ? (
          <p className="px-1 text-left text-xs text-muted-foreground">
            {formatTimeOnly(m.sentAt)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ThreadMeta({
  createdAt,
  className,
}: {
  createdAt: string;
  className?: string;
}) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      Chat created {formatDateTime(createdAt)}
    </p>
  );
}
