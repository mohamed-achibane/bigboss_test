"use client";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";
export function NavigationMenu({
  className,
  children,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative z-20", className)}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Viewport className="absolute left-0 top-full mt-2 min-w-80 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-[var(--shadow-lg)]" />
    </NavigationMenuPrimitive.Root>
  );
}
export function NavigationMenuList({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuContent = NavigationMenuPrimitive.Content;
export const NavigationMenuLink = NavigationMenuPrimitive.Link;
export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "group inline-flex min-h-10 items-center gap-1.5 rounded-md px-3 text-sm font-medium hover:bg-muted",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="size-3.5 transition-transform group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}
