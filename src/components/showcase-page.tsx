import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * DocPage — shared shell for every showcase route.
 * Renders eyebrow + H1 + intro, then children as flowing sections.
 */
export function DocPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-4xl space-y-14 px-6 py-14 md:px-10">
      <header className="space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-foreground md:text-[44px]">
          {title}
        </h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{intro}</p>
      </header>
      {children}
    </article>
  );
}

export function Section({
  title,
  hint,
  children,
  className,
  animated = false,
  index = 0,
}: {
  title: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  index?: number;
}) {
  return (
    <section
      className={cn("space-y-4", animated && "animate-np-fade-in-up motion-reduce:animate-none", className)}
      style={animated ? { animationDelay: `${index * 70}ms` } : undefined}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">{title}</h2>
        {hint && (
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
            {hint}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

/** Example — bordered panel wrapping live demos. */
export function Example({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 rounded-[var(--radius)] border border-border/60 bg-card/50 p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Token row — shows a swatch/preview + name + value in mono. */
export function TokenRow({
  preview,
  name,
  value,
}: {
  preview: React.ReactNode;
  name: string;
  value?: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-card/50 p-3">
      <div className="size-12 shrink-0 overflow-hidden rounded-md border border-border/60">
        {preview}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[12px] text-foreground">{name}</p>
        {value && (
          <p className="truncate font-mono text-[11px] text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}