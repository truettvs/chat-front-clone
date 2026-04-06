import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "@/components/auth/protected-route";
import { AuthProvider } from "@/context/auth-context";
import { ChatWorkspace } from "@/components/chat/chat-workspace";
import { ChatStoreProvider } from "@/context/chat-store";
import { CreateAccountPage } from "@/pages/create-account-page";
import { HomeRedirect } from "@/pages/home-redirect";
import { LoginPage } from "@/pages/login-page";
import { SettingsPage } from "@/pages/settings-page";

export default function App() {
  return (
    <AuthProvider>
      <ChatStoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomeRedirect />} />
              <Route path="/chat/:chatId" element={<ChatWorkspace />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<HomeRedirect />} />
          </Routes>
        </BrowserRouter>
      </ChatStoreProvider>
    </AuthProvider>
  );
}
