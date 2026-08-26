"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

export const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px", { variants: { variant: { primary: "bg-primary text-primary-foreground shadow-[var(--shadow-primary)] hover:bg-primary/90", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", outline: "border border-border bg-card text-card-foreground shadow-[var(--shadow-sm)] hover:bg-muted", ghost: "text-foreground hover:bg-muted", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90" }, size: { sm: "h-9 px-3", md: "h-11 px-5", lg: "h-12 px-6 text-base", icon: "size-11 p-0" } }, defaultVariants: { variant: "primary", size: "md" } });

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ asChild = false, className, variant, size, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
