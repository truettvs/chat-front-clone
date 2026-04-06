import { useId, useMemo, useState } from "react";
import { CalendarRange, MessageSquarePlus, PanelLeft, Search } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { AccountMenu } from "@/components/chat/account-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useChatStore } from "@/context/chat-store";
import { demoAppStrings } from "@/demo-data";
import { chatCreatedInLocalRange } from "@/lib/chat-date-filter";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  onNavigate?: () => void;
  className?: string;
}

export function ChatSidebar({ onNavigate, className }: ChatSidebarProps) {
  const filterId = useId();
  const fromInputId = `${filterId}-from`;
  const toInputId = `${filterId}-to`;
  const { chats, createChat } = useChatStore();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateOpen, setDateOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const from = dateFrom.trim() || undefined;
    const to = dateTo.trim() || undefined;

    return chats.filter((c) => {
      if (q && !c.title.toLowerCase().includes(q)) return false;
      if (!chatCreatedInLocalRange(c.createdAt, from, to)) return false;
      return true;
    });
  }, [chats, query, dateFrom, dateTo]);

  const hasDateFilter = Boolean(dateFrom || dateTo);

  function clearDateFilter() {
    setDateFrom("");
    setDateTo("");
    setDateOpen(false);
  }

  function handleNewChat() {
    const id = createChat();
    navigate(`/chat/${id}`);
    onNavigate?.();
  }

  return (
    <div
      className={cn(
        "flex h-full min-h-0 w-[280px] shrink-0 flex-col border-r border-border bg-card/40",
        className,
      )}
    >
      <div className="flex items-center gap-2 p-3">
        <div className="flex min-w-0 flex-1 items-center gap-1 rounded-xl border border-border bg-background/60 py-1 pl-2.5 pr-1 shadow-sm">
          <Search
            className="size-4 shrink-0 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={demoAppStrings.searchPlaceholder}
            className="h-8 min-w-0 flex-1 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
          <DropdownMenu
            open={dateOpen}
            onOpenChange={setDateOpen}
            modal={false}
          >
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={cn(
                  "relative size-7 shrink-0 rounded-lg text-muted-foreground hover:text-foreground",
                  hasDateFilter &&
                    "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary",
                )}
                aria-label={demoAppStrings.dateFilterButtonAriaLabel}
              >
                <CalendarRange className="size-4" />
                {hasDateFilter ? (
                  <span
                    className="absolute right-1 top-1 size-1.5 rounded-full bg-primary shadow-sm"
                    aria-hidden
                  />
                ) : null}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={6}
              className="w-[min(calc(100vw-2rem),17rem)] p-3"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <p className="mb-3 text-sm font-semibold leading-none">
                {demoAppStrings.dateFilterHeading}
              </p>
              <div className="space-y-2">
                <div className="space-y-1">
                  <label
                    htmlFor={fromInputId}
                    className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                  >
                    {demoAppStrings.dateFilterFrom}
                  </label>
                  <Input
                    id={fromInputId}
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="h-9 rounded-lg text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor={toInputId}
                    className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                  >
                    {demoAppStrings.dateFilterTo}
                  </label>
                  <Input
                    id={toInputId}
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="h-9 rounded-lg text-xs"
                  />
                </div>
                {hasDateFilter ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-full text-xs text-muted-foreground hover:text-foreground"
                    onClick={clearDateFilter}
                  >
                    {demoAppStrings.dateFilterClear}
                  </Button>
                ) : null}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {onNavigate ? (
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="shrink-0 rounded-xl"
            onClick={() => onNavigate()}
            aria-label="Close sidebar"
          >
            <PanelLeft className="size-4" />
          </Button>
        ) : null}
      </div>

      <div className="px-3 pb-2">
        <Button
          type="button"
          className="h-10 w-full justify-start gap-2 rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
          onClick={handleNewChat}
        >
          <MessageSquarePlus className="size-4" />
          {demoAppStrings.newChatLabel}
        </Button>
      </div>

      <Separator className="opacity-60" />

      <ScrollArea className="min-h-0 flex-1 px-2 py-3">
        <nav className="flex flex-col gap-0.5 pr-2" aria-label="Chats">
          {filtered.map((chat) => (
            <NavLink
              key={chat.id}
              to={`/chat/${chat.id}`}
              onClick={() => onNavigate?.()}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-accent/80",
                  isActive && "bg-accent text-accent-foreground shadow-sm",
                )
              }
            >
              <span className="line-clamp-2 font-medium leading-snug">
                {chat.title}
              </span>
            </NavLink>
          ))}
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              {demoAppStrings.noChatsMatchFilters}
            </p>
          ) : null}
        </nav>
      </ScrollArea>

      <Separator className="opacity-60" />
      <div className="p-2">
        <AccountMenu />
      </div>
    </div>
  );
}
