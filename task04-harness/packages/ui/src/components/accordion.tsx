"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "../lib/cn";
export const Accordion = AccordionPrimitive.Root;
export function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) { return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />; }
export function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Trigger>) { return <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger className={cn("group flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-semibold transition-colors hover:text-primary focus-visible:outline-none", className)} {...props}>{children}<ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform duration-[var(--duration-normal)] group-data-[state=open]:rotate-180" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>; }
export function AccordionContent({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) { return <AccordionPrimitive.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-none" {...props}><div className={cn("pb-5 leading-7", className)}>{children}</div></AccordionPrimitive.Content>; }
