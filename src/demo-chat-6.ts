import type { DemoChat } from "@/types/chat";

export const demoChat6: DemoChat = {
  id: "binoculars-specs-guide",
  title: "Binoculars Specs Guide",
  createdAt: new Date("2026-03-18T14:25:00-05:00").toISOString(),
  messages: [
    {
      role: "user",
      message: `When buying binoculars what specs should I look for to see far and keep things clear and in focus?`,
      sentAt: new Date("2026-03-18T14:25:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `The main spec is something like **10×42**:

- **10× = magnification** (how close things look)
- **42 = lens size (brightness)**

Key things to look for:
- **Magnification:** 8x–10x is best (higher = shakier)
- **Lens size:** 40–50mm gives a bright, clear image
- **Exit pupil:** around 4–5mm is ideal for clarity
- **Field of view:** wider = easier to use
- **Eye relief:** 15mm+ if you wear glasses

Best all-around choice: **8×42 or 10×42** 👍`,
      sentAt: new Date("2026-03-18T14:26:00-05:00").toISOString(),
    },
    {
      role: "user",
      message: `What if I want more than 12x or adjustable zoom? Do I need a telescope?`,
      sentAt: new Date("2026-03-18T14:27:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `Not necessarily—but you’re moving beyond normal binocular use.

- **12x+ binoculars** exist, but get shaky and usually need a tripod
- **Zoom binoculars** (like 10–30x) sound nice but are usually lower quality

Better options:
- **Spotting scope (20–60x):** best for long-distance viewing
- **Telescope:** for extreme zoom (like astronomy)

👉 Once you go past ~12x, stability becomes the main issue, so spotting scopes are usually the better choice.`,
      sentAt: new Date("2026-03-18T14:28:00-05:00").toISOString(),
    },
  ],
};