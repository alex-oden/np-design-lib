import * as React from "react";
import { Outlet, createFileRoute, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ShowcaseSidebar } from "@/components/showcase-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import neosLogo from "@/assets/neospower-logo.svg";

export const Route = createFileRoute("/_showcase")({
  component: ShowcaseLayout,
});

function AnimatedOutlet() {
  const router = useRouter();
  const path = router.state.location.pathname;
  return (
    <div key={path} className="animate-np-fade-in-up motion-reduce:animate-none">
      <Outlet />
    </div>
  );
}

function ShowcaseLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={120}>
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Ambient gradient background */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[560px] opacity-[0.35]"
          style={{
            background:
              "radial-gradient(60% 100% at 12% 0%, hsl(var(--brand-start) / 0.35), transparent 60%), radial-gradient(60% 100% at 92% 8%, hsl(var(--brand-end) / 0.25), transparent 60%)",
          }}
        />

        <div className="flex min-h-screen">
          {/* Desktop sidebar */}
          <aside className="sticky top-0 hidden h-screen w-[268px] shrink-0 border-r border-border/50 md:block">
            <ShowcaseSidebar />
          </aside>

          {/* Mobile sidebar */}
          <div
            className={cn(
              "fixed inset-0 z-40 md:hidden",
              mobileOpen ? "pointer-events-auto" : "pointer-events-none",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity",
                mobileOpen ? "opacity-100" : "opacity-0",
              )}
              onClick={() => setMobileOpen(false)}
            />
            <aside
              className={cn(
                "absolute inset-y-0 left-0 w-[280px] border-r border-border/60 bg-card transition-transform",
                mobileOpen ? "translate-x-0" : "-translate-x-full",
              )}
            >
              <ShowcaseSidebar onNavigate={() => setMobileOpen(false)} />
            </aside>
          </div>

          <div className="min-w-0 flex-1">
            {/* Mobile header */}
            <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border/50 bg-background/70 px-4 backdrop-blur-md md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="grid size-9 place-items-center rounded-md border border-border/60 bg-secondary text-foreground"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
              <img src={neosLogo} alt="NeosPower" className="h-5 w-auto" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/70">/UI</span>
            </header>

            <main>
              <AnimatedOutlet />
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}