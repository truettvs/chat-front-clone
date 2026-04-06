import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { demoAppStrings, demoChats } from "@/demo-data";
import type { DemoChat } from "@/types/chat";

function cloneChats(chats: DemoChat[]): DemoChat[] {
  return chats.map((c) => ({
    ...c,
    messages: c.messages.map((m) => ({ ...m })),
  }));
}

function randomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `chat-${Date.now().toString(36)}`;
}

interface ChatStoreValue {
  chats: DemoChat[];
  getChat: (id: string) => DemoChat | undefined;
  createChat: () => string;
  sendUserMessage: (chatId: string, text: string) => void;
}

const ChatStoreContext = createContext<ChatStoreValue | null>(null);

export function ChatStoreProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<DemoChat[]>(() => cloneChats(demoChats));

  const getChat = useCallback(
    (id: string) => chats.find((c) => c.id === id),
    [chats],
  );

  const createChat = useCallback(() => {
    const id = randomId();
    const now = new Date().toISOString();
    const chat: DemoChat = {
      id,
      title: "New chat",
      createdAt: now,
      messages: [],
    };
    setChats((prev) => [chat, ...prev]);
    return id;
  }, []);

  const sendUserMessage = useCallback((chatId: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const now = new Date().toISOString();

    setChats((prev) =>
      prev.map((c) => {
        if (c.id !== chatId) return c;
        const nextMessages = [
          ...c.messages,
          { role: "user" as const, message: trimmed, sentAt: now },
        ];
        let title = c.title;
        if (c.messages.length === 0 && title === "New chat") {
          title =
            trimmed.length > 56 ? `${trimmed.slice(0, 56)}…` : trimmed;
        }
        return { ...c, title, messages: nextMessages };
      }),
    );

    window.setTimeout(() => {
      setChats((prev) =>
        prev.map((c) => {
          if (c.id !== chatId) return c;
          return {
            ...c,
            messages: [
              ...c.messages,
              {
                role: "assistant" as const,
                message: demoAppStrings.upgradeToProChat,
                sentAt: new Date().toISOString(),
              },
            ],
          };
        }),
      );
    }, 450);
  }, []);

  const value = useMemo(
    () => ({ chats, getChat, createChat, sendUserMessage }),
    [chats, getChat, createChat, sendUserMessage],
  );

  return (
    <ChatStoreContext.Provider value={value}>
      {children}
    </ChatStoreContext.Provider>
  );
}

export function useChatStore() {
  const ctx = useContext(ChatStoreContext);
  if (!ctx) {
    throw new Error("useChatStore must be used within ChatStoreProvider");
  }
  return ctx;
}
