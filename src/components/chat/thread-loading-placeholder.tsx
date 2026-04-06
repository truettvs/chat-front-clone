import { demoAppStrings } from "@/demo-data";
import { cn } from "@/lib/utils";

interface ThreadLoadingPlaceholderProps {
  className?: string;
}

/**
 * Shown when the active chat has no messages yet — reads as “still loading”
 * instead of an empty state.
 */
export function ThreadLoadingPlaceholder({
  className,
}: ThreadLoadingPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-12",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-label={demoAppStrings.loadingThreadAriaLabel}
    >
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <div className="relative size-11" aria-hidden>
          <div className="absolute inset-0 rounded-full border-2 border-muted" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
        <div className="flex w-full flex-col gap-3" aria-hidden>
          <div className="h-3 max-w-[85%] animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
          <div className="h-3 max-w-[70%] animate-pulse rounded-full bg-muted" />
          <div className="h-3 max-w-[92%] animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
