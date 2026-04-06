import type { DemoChat } from "@/types/chat";

export const demoChat4: DemoChat = {
  id: "synonyms-for-unnecessary",
  title: "Synonyms for Unnecessary",
  createdAt: new Date("2026-03-12T23:12:00-05:00").toISOString(),
  messages: [
    {
      role: "user",
      message: `What are 5 synonyms for "unnecessary"`,
      sentAt: new Date("2026-03-12T23:12:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `Here are 5 good synonyms for **“unnecessary”**, each with a slightly different nuance:

* **Superfluous** — more than what is needed; excessive
* **Redundant** — repetitive or not adding anything new
* **Unneeded** — simply not required
* **Excessive** — beyond what is reasonable or necessary
* **Extraneous** — irrelevant or unrelated to the main point

If you want, I can tailor synonyms based on a sentence you're using it in 👍
`,
      sentAt: new Date("2026-03-12T23:12:00-05:00").toISOString(),
    }
  ],
};