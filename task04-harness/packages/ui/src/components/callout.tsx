import type { ComponentProps, ReactNode } from "react"; import { cn } from "../lib/cn";
const variants = { info: "border-primary/30 bg-accent/55 text-accent-foreground", success: "border-success/35 bg-success/10 text-foreground", warning: "border-warning/40 bg-warning/10 text-foreground" } as const;
type CalloutProps = ComponentProps<"aside"> & { title: string; icon?: ReactNode; variant?: keyof typeof variants };
export function Callout({ className, title, icon, variant = "info", children, ...props }: CalloutProps) { return <aside className={cn("rounded-lg border p-5", variants[variant], className)} {...props}><div className="flex items-center gap-2 font-semibold">{icon}<span>{title}</span></div><div className="mt-2 text-sm leading-6 opacity-90">{children}</div></aside>; }
