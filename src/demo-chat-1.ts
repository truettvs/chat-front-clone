import type { DemoChat } from "@/types/chat";

export const demoChat1: DemoChat = {
  id: "mla-citation-for-handbook",
  title: "MLA Citation for Handbook",
  createdAt: new Date("2026-03-12T22:12:00-05:00").toISOString(),
  messages: [
    {
      role: "user",
      message: `In an MLA formatted bibliography/works cited, how would you cite https://www.ksrevenue.gov/pdf/dlhb.pdf? It is a drivers license handbook by the state of Kansas.`,
      sentAt: new Date("2026-03-12T22:12:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `To cite the Kansas Driver’s License Handbook in **MLA (9th edition)**, treat it as a **government publication (PDF)**. MLA format generally follows:

**Format:**

> Government Agency. *Title of Document*. Publisher (if different), Year. URL.

---

### ✅ Your citation:

> Kansas Department of Revenue. *Kansas Driver’s License Handbook*. State of Kansas, [https://www.ksrevenue.gov/pdf/dlhb.pdf](https://www.ksrevenue.gov/pdf/dlhb.pdf).

---

### 🔍 Notes:

* **Author** → The government agency: *Kansas Department of Revenue*
* **Title** → Italicized: *Kansas Driver’s License Handbook*
* **Publisher** → Often the same as the agency (State of Kansas)
* **Date** → If no clear publication year is listed, MLA allows omission
* **URL** → Included without “https://” being required, but acceptable either way

---

### 💡 Optional (if your teacher wants access date):

> Kansas Department of Revenue. *Kansas Driver’s License Handbook*. State of Kansas, [https://www.ksrevenue.gov/pdf/dlhb.pdf](https://www.ksrevenue.gov/pdf/dlhb.pdf). Accessed 12 Mar. 2026.

---

If you want, I can also format the **in-text citation** or check if your teacher prefers a slightly different MLA variation.
`,
      sentAt: new Date("2026-03-12T22:12:00-05:00").toISOString(),
    },
    {
      role: "user",
      message: "Would the State of Kansas or KDOR be considered the author?",
      sentAt: new Date("2026-03-12T22:14:00-05:00").toISOString(),
    },
    {
      role: "assistant",
      message: `In MLA, the **author should be the most specific responsible organization**, not the broader government.

### ✅ Correct choice:

* **Author:** Kansas Department of Revenue (KDOR)

### ❌ Not ideal:

* **State of Kansas** → too broad (it didn’t directly create the handbook)

---

### 📌 Why KDOR is correct:

* MLA prioritizes the **entity that actually produced or published the work**
* The driver’s handbook is created and maintained by the **Kansas Department of Revenue (Division of Vehicles)**
* Using “State of Kansas” would be like citing “United States” instead of a specific agency like the Internal Revenue Service

---

### ✔️ Final MLA citation (clean version):

> Kansas Department of Revenue. *Kansas Driver’s License Handbook*. State of Kansas, [https://www.ksrevenue.gov/pdf/dlhb.pdf](https://www.ksrevenue.gov/pdf/dlhb.pdf).

---

If you want to be extra precise, some instructors allow:

> Kansas Department of Revenue, Division of Vehicles. *Kansas Driver’s License Handbook*...

—but usually just **Kansas Department of Revenue** is perfectly correct.
`,
      sentAt: new Date("2026-03-12T22:15:00-05:00").toISOString(),
    },
  ],
};