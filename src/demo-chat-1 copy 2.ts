import type { DemoChat } from "@/types/chat";

export const demoChat1: DemoChat = {
  id: "demo-chat-1",
  title: "Demo Chat 1",
  createdAt: new Date().toISOString(),
  messages: [
    {
      role: "user",
      message: "",
      sentAt: new Date().toISOString(),
    },
    {
      role: "assistant",
      message: "",
      sentAt: new Date().toISOString(),
    },
    {
      role: "user",
      message: "",
      sentAt: new Date().toISOString(),
    },
    {
      role: "assistant",
      message: "",
      sentAt: new Date().toISOString(),
    },
  ],
};