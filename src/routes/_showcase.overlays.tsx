import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Info } from "lucide-react";
import { DocPage, Section, Example } from "@/components/showcase-page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const Route = createFileRoute("/_showcase/overlays")({
  head: () => ({
    meta: [
      { title: "Overlays — NeosPower UI" },
      {
        name: "description",
        content:
          "Dialog, sheet, popover, dropdown menu, and tooltip — all Radix-backed with focus trap and glass backdrop.",
      },
      { property: "og:title", content: "Overlays — NeosPower UI" },
      {
        property: "og:description",
        content: "Modal dialog, side sheet, popover, dropdown menu, and tooltip.",
      },
    ],
  }),
  component: OverlaysPage,
});

function OverlaysPage() {
  return (
    <DocPage
      eyebrow="Feedback & overlays"
      title="Overlays"
      intro="Every overlay is Radix-backed for focus trap, Esc-to-close, and scroll lock. Content sits on a glass panel with a soft backdrop so ambient context stays visible."
    >
      <Section title="Dialog" hint="modal">
        <Example>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm dispatch</DialogTitle>
                <DialogDescription>
                  This will commit 184.2 MWh at €97.40 to the EPEX SPOT market.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
      </Section>

      <Section title="Sheet" hint="side drawer">
        <Example>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Open sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Site details</SheetTitle>
                <SheetDescription>Live telemetry from Rotterdam · 042.</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-3 font-mono text-[13px] text-muted-foreground">
                <p>184.2 MWh · dispatched</p>
                <p>€97.40 · clearing price</p>
                <p>+4.8% · 24h delta</p>
              </div>
            </SheetContent>
          </Sheet>
        </Example>
      </Section>

      <Section title="Popover" hint="anchored">
        <Example>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Info /> What is this?
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-[13px] leading-relaxed text-foreground">
                Auto-balancing keeps the site within its trading bounds without operator input.
              </p>
            </PopoverContent>
          </Popover>
        </Example>
      </Section>

      <Section title="Dropdown menu">
        <Example>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                Actions <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Site</DropdownMenuLabel>
              <DropdownMenuItem>Run diagnostics</DropdownMenuItem>
              <DropdownMenuItem>Export report</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Force restart</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
      </Section>

      <Section title="Tooltip" hint="hover · focus">
        <Example>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Threshold applied to the next trading window.</TooltipContent>
          </Tooltip>
        </Example>
      </Section>
    </DocPage>
  );
}