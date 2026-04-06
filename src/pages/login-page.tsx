import { useEffect, useState, type FormEvent } from "react";
import { Check, Sparkles } from "lucide-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth-context";
import { demoAppStrings } from "@/demo-data";
import { cn } from "@/lib/utils";

export function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fromPath = (
    location.state as { from?: { pathname?: string } } | undefined
  )?.from?.pathname;

  useEffect(() => {
    document.title = `Sign in · ${demoAppStrings.appName}`;
  }, []);

  if (isAuthenticated) {
    return <Navigate to={fromPath ?? "/"} replace />;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      navigate(fromPath ?? "/", { replace: true });
      return;
    }
    setError(demoAppStrings.loginInvalidMessage);
  }

  return (
    <div className="grid min-h-[100dvh] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
      <div
        className="relative hidden flex-col justify-between overflow-hidden border-border bg-zinc-950 p-10 text-white md:flex md:border-r"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_-20%,rgba(255,255,255,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(255,255,255,0.06),transparent)]" />

        <div className="relative flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <Sparkles className="size-6 text-white" strokeWidth={1.75} />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            {demoAppStrings.loginEyebrow}
          </span>
        </div>

        <div className="relative max-w-md space-y-6 pb-8">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {demoAppStrings.loginHeroHeadline}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400">
              {demoAppStrings.loginHeroCopy}
            </p>
          </div>
          <ul className="space-y-3.5">
            {demoAppStrings.loginHeroBullets.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-snug text-zinc-300">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/25">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-zinc-500">
          {demoAppStrings.loginFooterCopyright}
        </p>
      </div>

      <div className="flex flex-col justify-center px-4 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="mb-10 flex items-center gap-3 md:hidden">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="size-5" strokeWidth={1.75} />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              {demoAppStrings.loginEyebrow}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {demoAppStrings.appName}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
              {demoAppStrings.loginTitle}
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {demoAppStrings.loginSubtitle}
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
            <div className="space-y-2">
              <label
                htmlFor="auth-email"
                className="text-sm font-medium text-foreground"
              >
                {demoAppStrings.loginEmailLabel}
              </label>
              <Input
                id="auth-email"
                type="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                inputMode="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className="h-11 rounded-xl bg-background"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="auth-password"
                  className="text-sm font-medium text-foreground"
                >
                  {demoAppStrings.loginPasswordLabel}
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={(e) => e.preventDefault()}
                >
                  {demoAppStrings.loginForgotPassword}
                </button>
              </div>
              <Input
                id="auth-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                className="h-11 rounded-xl bg-background"
              />
            </div>

            {error ? (
              <p
                className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                role="alert"
              >
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="h-11 w-full rounded-xl text-base font-medium shadow-sm"
            >
              {demoAppStrings.loginButton}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {demoAppStrings.loginCreateHint}{" "}
            <Link
              to="/create-account"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {demoAppStrings.loginCreateCta}
            </Link>
          </p>

          <div
            className={cn(
              "mt-10 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
            )}
          >
            <span>{demoAppStrings.loginFooterCopyright}</span>
            <div className="flex justify-center gap-4 sm:justify-end">
              <button
                type="button"
                className="hover:text-foreground"
                onClick={(e) => e.preventDefault()}
              >
                {demoAppStrings.loginFooterPrivacy}
              </button>
              <button
                type="button"
                className="hover:text-foreground"
                onClick={(e) => e.preventDefault()}
              >
                {demoAppStrings.loginFooterTerms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
