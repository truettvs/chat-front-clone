export type MessageRole = "user" | "assistant" | "system";

/** One line in the thread. Use `message` for the visible text (matches common JSON examples). */
export interface ChatMessage {
  role: MessageRole;
  message: string;
  /** Optional per-message time (ISO 8601). Omit to hide in the UI. */
  sentAt?: string;
}

/** A conversation listed in the sidebar and shown in the main pane. */
export interface DemoChat {
  id: string;
  title: string;
  /** When the chat was created (ISO 8601), shown in the header. */
  createdAt: string;
  messages: ChatMessage[];
}

export interface DemoAccount {
  displayName: string;
  email: string;
  planLabel: string;
  avatarUrl?: string;
  /** Shown in the avatar fallback when `avatarUrl` is missing */
  initials: string;
}
