import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth-context";
import { demoAccount } from "@/demo-data";

export function AccountMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function goToSettings() {
    navigate("/settings");
  }

  function onLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-11 w-full justify-start gap-3 rounded-xl px-2 text-left hover:bg-accent"
        >
          <Avatar className="h-8 w-8 border border-border">
            {demoAccount.avatarUrl ? (
              <AvatarImage src={demoAccount.avatarUrl} alt="" />
            ) : null}
            <AvatarFallback className="text-xs font-medium">
              {demoAccount.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium leading-none">
              {demoAccount.displayName}
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {demoAccount.planLabel} · {demoAccount.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" side="top">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {demoAccount.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {demoAccount.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2" onSelect={goToSettings}>
            <User className="text-muted-foreground" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2" onSelect={goToSettings}>
            <Settings className="text-muted-foreground" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2" onSelect={goToSettings}>
            <CreditCard className="text-muted-foreground" />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 text-destructive focus:text-destructive"
          onSelect={onLogout}
        >
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
