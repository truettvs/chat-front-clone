import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { demoAppStrings } from "@/demo-data";
import { cn } from "@/lib/utils";

interface ComposerProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  className?: string;
}

export function Composer({ onSend, disabled, className }: ComposerProps) {
  const [value, setValue] = useState("");

  function submit() {
    if (disabled) return;
    onSend(value);
    setValue("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit();
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "border-t border-border bg-background/80 px-4 py-4 backdrop-blur-md md:px-6",
        className,
      )}
    >
      <div className="mx-auto flex max-w-3xl gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm focus-within:ring-2 focus-within:ring-ring">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={demoAppStrings.composerPlaceholder}
          rows={1}
          disabled={disabled}
          className="max-h-40 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50"
          aria-label="Message"
        />
        <Button
          type="submit"
          size="icon"
          disabled={disabled || !value.trim()}
          className="mt-0.5 size-9 shrink-0 rounded-xl"
          aria-label="Send message"
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
      <p className="mx-auto mt-2 max-w-3xl text-center text-[11px] text-muted-foreground">
        {demoAppStrings.upgradeToProChat}
      </p>
    </form>
  );
}
