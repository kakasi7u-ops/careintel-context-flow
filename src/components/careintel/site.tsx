import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  ["/platform", "Platform"],
  ["/how-it-works", "How It Works"],
  ["/technology", "Technology & Safety"],
  ["/impact", "Impact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="page-shell flex h-18 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label="CareIntel home">
          <span className="brand-mark">C</span>
          <span className="font-display text-[17px] font-semibold uppercase">CareIntel</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="link" className="h-auto px-0 text-primary no-underline">
            <Link to="/platform">Explore CareIntel <ArrowRight /></Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[88vw] bg-background p-7">
            <SheetHeader className="text-left">
              <SheetTitle className="font-display uppercase">CareIntel</SheetTitle>
              <SheetDescription>Multimodal healthcare intelligence for human-led review.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col border-t border-border" aria-label="Mobile navigation">
              {links.map(([to, label]) => (
                <SheetClose asChild key={to}>
                  <Link to={to} className="border-b border-border py-5 font-display text-xl">{label}</Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="page-shell py-14 md:py-18">
        <div className="grid gap-10 border-b border-background/15 pb-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="font-display text-xl font-semibold uppercase">CareIntel</p>
            <p className="mt-3 max-w-md text-sm text-background/65">Multimodal healthcare intelligence for human-led review.</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm text-background/70 md:grid-cols-4" aria-label="Footer navigation">
            {links.map(([to, label]) => <Link key={to} to={to} className="hover:text-background">{label.replace(" & Safety", "")}</Link>)}
          </nav>
        </div>
        <p className="pt-7 text-xs leading-5 text-background/52">Designed as a non-diagnostic, human-in-the-loop healthcare support system.</p>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-shell page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.03] md:text-7xl">{title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
    </section>
  );
}

export function SectionHeading({ label, title, copy, className = "" }: { label: string; title: string; copy?: string; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow">{label}</p>
      <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

export function FinalCta({ title, primary, secondary }: { title: string; primary: string; secondary?: string }) {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="page-shell grid gap-8 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/platform">{primary}<ArrowRight /></Link></Button>
          {secondary ? <Button asChild size="lg" variant="outline"><Link to="/how-it-works">{secondary}</Link></Button> : null}
        </div>
      </div>
    </section>
  );
}