import { useEffect, useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { Composer } from "@/components/chat/composer";
import { ThreadLoadingPlaceholder } from "@/components/chat/thread-loading-placeholder";
import { MessageThread, ThreadMeta } from "@/components/chat/message-thread";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useChatStore } from "@/context/chat-store";
import { demoAppStrings } from "@/demo-data";

export function ChatWorkspace() {
  const { chatId } = useParams();
  const { getChat, sendUserMessage } = useChatStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const chat = chatId ? getChat(chatId) : undefined;

  useEffect(() => {
    if (chat) {
      document.title = `${chat.title} · ${demoAppStrings.appName}`;
    } else {
      document.title = demoAppStrings.appName;
    }
  }, [chat]);

  if (!chatId || !chat) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-background">
      <aside className="hidden md:flex">
        <ChatSidebar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <header className="flex items-center gap-3 border-b border-border px-3 py-3 md:px-5">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl md:hidden"
                aria-label="Open sidebar"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <div className="flex min-w-0 flex-1 flex-col gap-1 md:py-0.5">
              <div className="flex items-center gap-2">
                <Sparkles className="hidden size-4 text-muted-foreground sm:inline" />
                <h1 className="truncate text-base font-semibold tracking-tight md:text-lg">
                  {chat.title}
                </h1>
              </div>
              <ThreadMeta
                createdAt={chat.createdAt}
                className="hidden sm:block"
              />
            </div>
          </header>

          <ThreadMeta
            createdAt={chat.createdAt}
            className="border-b border-border px-4 py-2 sm:hidden"
          />

          {chat.messages.length === 0 ? (
            <ThreadLoadingPlaceholder />
          ) : (
            <MessageThread messages={chat.messages} />
          )}

          <Composer onSend={(text) => sendUserMessage(chat.id, text)} />

          <SheetContent
            side="left"
            className="w-[min(100%,280px)] border-r border-border p-0"
          >
            <SheetTitle className="sr-only">Chats</SheetTitle>
            <ChatSidebar onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
