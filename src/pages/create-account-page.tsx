import { useEffect } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { demoAppStrings } from "@/demo-data";
import { cn } from "@/lib/utils";

const SETUP_STEPS = [
  demoAppStrings.createAccountStep1,
  demoAppStrings.createAccountStep2,
  demoAppStrings.createAccountStep3,
] as const;

export function CreateAccountPage() {
  useEffect(() => {
    document.title = `Account setup · ${demoAppStrings.appName}`;
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,hsl(var(--muted)/0.5),transparent)]"
        aria-hidden
      />

      <div className="relative w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md ring-1 ring-border">
            <Sparkles className="size-6" strokeWidth={1.75} />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <div className="mb-6 overflow-hidden rounded-full bg-muted p-px">
            <div className="h-1.5 overflow-hidden rounded-full bg-muted/80">
              <div className="h-full w-[35%] rounded-full bg-primary shadow-sm animate-auth-progress" />
            </div>
          </div>

          <h1 className="text-balance text-center text-xl font-semibold tracking-tight">
            {demoAppStrings.createAccountLoadingTitle}
          </h1>
          <p className="mt-2 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
            {demoAppStrings.createAccountLoadingBody}
          </p>

          <ul className="mt-8 space-y-4" aria-busy="true">
            {SETUP_STEPS.map((label) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/20 px-3.5 py-3 text-sm"
              >
                <Loader2
                  className={cn(
                    "mt-0.5 size-4 shrink-0 animate-spin text-primary",
                  )}
                  aria-hidden
                />
                <span className="leading-snug text-muted-foreground">{label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            <Link
              to="/login"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {demoAppStrings.createAccountBackToSignIn}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
