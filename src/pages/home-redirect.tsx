import { Navigate } from "react-router-dom";

import { useChatStore } from "@/context/chat-store";
import { demoAppStrings } from "@/demo-data";

export function HomeRedirect() {
  const { chats } = useChatStore();
  const id = chats[0]?.id;
  if (!id) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-6 text-center text-sm text-muted-foreground">
        {demoAppStrings.noChatsInWorkspace}
      </div>
    );
  }
  return <Navigate to={`/chat/${id}`} replace />;
}
