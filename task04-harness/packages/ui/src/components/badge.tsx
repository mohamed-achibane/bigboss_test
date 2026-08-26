import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

const badgeVariants = cva("inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold leading-none", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground", secondary: "border-transparent bg-secondary text-secondary-foreground", outline: "border-border bg-card text-card-foreground", success: "border-transparent bg-success text-success-foreground", warning: "border-transparent bg-warning text-warning-foreground", destructive: "border-transparent bg-destructive text-destructive-foreground" } }, defaultVariants: { variant: "default" } });

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
export function Badge({ className, variant, ...props }: BadgeProps) { return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />; }
