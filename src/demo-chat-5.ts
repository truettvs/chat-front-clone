import type { DemoChat } from "@/types/chat";

export const demoChat5: DemoChat = {
  id: "install-nvm-on-mac",
  title: "Install NVM on Mac",
  createdAt: new Date("2026-03-22T14:35:00-05:00").toISOString(),
  messages: [
    {
      role: "user",
      message: `Install nvm and node and npm on mac`,
      sentAt: new Date("2026-03-22T14:35:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `Here’s a clean way to install **NVM**, **Node.js**, and **npm** on macOS:

---

## 🧰 Step 1: Install NVM

Open Terminal and run:

\`\`\`bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
\`\`\`

---

## 🔁 Step 2: Load NVM

Restart Terminal or run:

\`\`\`bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
\`\`\`

---

## ✅ Step 3: Verify NVM

\`\`\`bash
nvm --version
\`\`\`

---

## 🟢 Step 4: Install Node (includes npm)

\`\`\`bash
nvm install --lts
\`\`\`

---

## 🔄 Step 5: Use Node

\`\`\`bash
nvm use --lts
nvm alias default lts/*
\`\`\`

---

## 🔍 Step 6: Verify install

\`\`\`bash
node -v
npm -v
\`\`\`

---

## ⚠️ Fix: nvm not found

Add to \`~/.zshrc\`:

\`\`\`bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
\`\`\`

Then run:

\`\`\`bash
source ~/.zshrc
\`\`\`

---

## 🧠 Tip

Use NVM if you want to switch Node versions easily across projects 👍
`,
      sentAt: new Date("2026-03-22T14:35:00-05:00").toISOString(),
    }
  ],
};