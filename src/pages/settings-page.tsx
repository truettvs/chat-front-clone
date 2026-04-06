import { useMemo, useState, type ReactNode } from "react";
import { ArrowLeft, Check, Clock3, CreditCard, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useChatStore } from "@/context/chat-store";
import { demoAccount, demoAppStrings } from "@/demo-data";

function formatNowLabel() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

export function SettingsPage() {
  const { chats } = useChatStore();
  const backPath = chats[0] ? `/chat/${chats[0].id}` : "/";

  const [displayName, setDisplayName] = useState(demoAccount.displayName);
  const [email, setEmail] = useState(demoAccount.email);
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [jobTitle, setJobTitle] = useState("Founder");
  const [tone, setTone] = useState("balanced");
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [desktopNotif, setDesktopNotif] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [autoArchive, setAutoArchive] = useState(false);
  const [autoCleanupEnabled, setAutoCleanupEnabled] = useState(true);
  const [cleanupDays, setCleanupDays] = useState("45");
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const workspaceId = useMemo(() => {
    return `axel-${demoAccount.initials.toLowerCase()}-workspace`;
  }, []);

  function saveSettings() {
    setSavedAt(formatNowLabel());
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <header className="sticky top-0 z-10 border-b border-border/80 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="gap-1.5 rounded-lg">
              <Link to={backPath}>
                <ArrowLeft className="size-4" />
                Back
              </Link>
            </Button>
            <Separator orientation="vertical" className="mx-1 hidden h-5 sm:block" />
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold md:text-lg">Settings</h1>
              <p className="truncate text-xs text-muted-foreground">
                Manage your account, workspace, and security preferences
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {savedAt ? (
              <p className="hidden text-xs text-muted-foreground sm:block">
                Saved at {savedAt}
              </p>
            ) : null}
            <Button onClick={saveSettings} className="rounded-xl px-5">
              Save changes
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 md:grid-cols-[minmax(0,1fr)_320px] md:px-6">
        <section className="space-y-6">
          <SettingsCard
            id="profile"
            title="Profile"
            description="These details appear across your workspace and team activity."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Display name">
                <Input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </Field>
              <Field label="Work email">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label="Job title">
                <Input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Product Lead"
                />
              </Field>
              <Field label="Timezone">
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value={timezone}>{timezone}</option>
                  <option value="America/New_York">America/New_York</option>
                  <option value="America/Los_Angeles">America/Los_Angeles</option>
                  <option value="Europe/London">Europe/London</option>
                  <option value="Europe/Berlin">Europe/Berlin</option>
                </select>
              </Field>
            </div>
          </SettingsCard>

          <SettingsCard
            title="Assistant defaults"
            description="Set baseline behavior for new conversations."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Response style">
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="concise">Concise</option>
                  <option value="balanced">Balanced</option>
                  <option value="deep">Detailed</option>
                </select>
              </Field>
              <Field label="Session timeout (minutes)">
                <select
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="60">60</option>
                  <option value="120">120</option>
                </select>
              </Field>
            </div>
          </SettingsCard>

          <SettingsCard
            title="Notifications"
            description="Choose what activity should surface to you."
          >
            <div className="space-y-3">
              <ToggleRow
                checked={desktopNotif}
                onChange={setDesktopNotif}
                label="Desktop notifications"
                description="Show browser alerts when new responses are ready."
              />
              <ToggleRow
                checked={weeklyDigest}
                onChange={setWeeklyDigest}
                label="Weekly digest email"
                description="Get a summary of usage, top threads, and trends."
              />
              <ToggleRow
                checked={securityAlerts}
                onChange={setSecurityAlerts}
                label="Security alerts"
                description="Notify me about unusual sign-ins and sensitive changes."
              />
              <ToggleRow
                checked={autoArchive}
                onChange={setAutoArchive}
                label="Auto-archive inactive chats"
                description="Archive conversations with no activity after 30 days."
              />
            </div>
          </SettingsCard>

          <SettingsCard
            title="Data retention"
            description="Conversation history is automatically cleaned up based on your retention window."
          >
            <div className="space-y-4">
              <ToggleRow
                checked={autoCleanupEnabled}
                onChange={setAutoCleanupEnabled}
                label="Enable auto cleanup"
                description="Automatically remove conversations after the retention period."
              />

              <Field label="Retention period">
                <select
                  value={cleanupDays}
                  onChange={(e) => setCleanupDays(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                  <option value="45">45 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                </select>
              </Field>

              <p className="rounded-xl border border-border/70 bg-muted/20 px-3.5 py-3 text-xs leading-relaxed text-muted-foreground">
                Manual chat deletion is managed by workspace policy. Retention is
                applied automatically in scheduled cleanup cycles.
              </p>
            </div>
          </SettingsCard>
        </section>

        <aside className="space-y-4">
          <SettingsCard
            id="billing"
            title="Plan"
            description="Current subscription and workspace details."
          >
            <div className="space-y-3 text-sm">
              <InfoRow icon={<CreditCard className="size-4" />} label="Plan">
                {demoAccount.planLabel}
              </InfoRow>
              <InfoRow icon={<ShieldCheck className="size-4" />} label="Security">
                MFA enabled
              </InfoRow>
              <InfoRow icon={<Clock3 className="size-4" />} label="Workspace ID">
                {workspaceId}
              </InfoRow>
            </div>
            <Separator className="my-4" />
            <Button variant="outline" className="w-full rounded-xl">
              Manage billing
            </Button>
          </SettingsCard>

          <SettingsCard title="Save status" description="Changes persist after manual save.">
            {savedAt ? (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <Check className="size-4" />
                Saved successfully at {savedAt}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                No unsaved changes detected. Last synced with{" "}
                {demoAppStrings.appName}.
              </p>
            )}
          </SettingsCard>
        </aside>
      </main>
    </div>
  );
}

function SettingsCard({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <Separator className="my-4" />
      {children}
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function ToggleRow({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
  description: string;
}) {
  return (
    <label className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/30 p-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 size-4 rounded border-input bg-background accent-primary"
      />
      <span className="min-w-0">
        <span className="block text-sm font-medium">{label}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {description}
        </span>
      </span>
    </label>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex size-7 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="truncate text-sm">{children}</p>
      </div>
    </div>
  );
}
