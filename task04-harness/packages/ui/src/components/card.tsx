import type { ComponentProps } from "react";
import { cn } from "../lib/cn";
export function Card({ className, ...props }: ComponentProps<"div">) { return <div data-slot="card" className={cn("rounded-lg border border-border bg-card text-card-foreground shadow-[var(--shadow-sm)]", className)} {...props} />; }
export function CardHeader({ className, ...props }: ComponentProps<"div">) { return <div className={cn("p-6 pb-0", className)} {...props} />; }
export function CardTitle({ className, ...props }: ComponentProps<"h3">) { return <h3 className={cn("text-xl font-semibold tracking-[-0.02em]", className)} {...props} />; }
export function CardDescription({ className, ...props }: ComponentProps<"p">) { return <p className={cn("mt-2 text-sm text-muted-foreground", className)} {...props} />; }
export function CardContent({ className, ...props }: ComponentProps<"div">) { return <div className={cn("p-6", className)} {...props} />; }
export function CardFooter({ className, ...props }: ComponentProps<"div">) { return <div className={cn("flex items-center gap-3 p-6 pt-0", className)} {...props} />; }
