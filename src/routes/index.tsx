import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CareCanvas, FlowLine, ProvenanceVisual, SafetySequence } from "@/components/careintel/visuals";
import { FinalCta, SectionHeading } from "@/components/careintel/site";
import healthCentre from "@/assets/careintel-health-centre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "CareIntel — Multimodal Healthcare Intelligence" },
    { name: "description", content: "CareIntel organizes multimodal healthcare information into structured, evidence-linked context for human-led review." },
    { property: "og:title", content: "CareIntel — Multimodal Healthcare Intelligence" },
    { property: "og:description", content: "Structured, evidence-linked healthcare context for human-led review." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

function Home() {
  return <>
    <section className="page-shell grid min-h-[calc(100vh-4.5rem)] gap-12 py-14 lg:grid-cols-12 lg:items-center lg:py-18">
      <div className="lg:col-span-5">
        <p className="eyebrow">Multimodal healthcare intelligence</p>
        <h1 className="mt-5 max-w-[13ch] font-display text-5xl font-semibold leading-[1.02] md:text-7xl">Intelligence for the first step in care.</h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">CareIntel brings text, voice, documents, and images into one evidence-linked workflow—helping healthcare teams organize information before human review.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/platform">Explore CareIntel <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/how-it-works">How it works</Link></Button></div>
        <p className="mt-8 max-w-md text-xs leading-5 text-muted-foreground">Non-diagnostic by design. CareIntel supports qualified reviewers; it does not replace them.</p>
      </div>
      <div className="lg:col-span-7"><CareCanvas /></div>
    </section>
    <section className="border-y border-border"><div className="page-shell flex flex-col gap-2 py-7 md:flex-row md:items-center md:justify-between"><p className="font-display text-xl font-semibold">AI-assisted. Evidence-linked. Human-led.</p><p className="text-sm text-muted-foreground">Designed to support qualified human reviewers—not replace them.</p></div></section>
    <section className="editorial-section page-shell grid gap-14 lg:grid-cols-12">
      <SectionHeading className="lg:col-span-5" label="The problem" title="Healthcare information rarely arrives in one clean format." copy="Before a reviewer can act on information, someone often has to first organize it." />
      <div className="lg:col-span-7"><div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">{["Text","Voice","PDF","Scanned reports","Images","Incomplete history","Different dates","Missing context"].map(x=><div key={x} className="min-h-28 border-b border-r border-border p-4 text-sm font-medium">{x}</div>)}</div></div>
    </section>
    <section className="bg-foreground text-background"><div className="page-shell editorial-section"><p className="eyebrow !text-accent">Structure before interpretation</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold md:text-6xl">CareIntel turns fragmented inputs into structured context.</h2><div className="mt-14"><FlowLine items={["Capture","Understand","Structure","Review"]} /></div></div></section>
    <section className="page-shell editorial-section"><SectionHeading label="Multimodal" title="One workflow. Multiple forms of evidence." /><div className="mt-12"><FlowLine items={["Text","Voice","Documents","Images","OCR / STT / Extraction","Structured Evidence"]} /></div></section>
    <section className="border-y border-border bg-secondary/35"><div className="page-shell editorial-section grid gap-14 lg:grid-cols-2 lg:items-center"><SectionHeading label="Provenance" title="Every useful insight should have a source." copy="CareIntel preserves the relationship between derived information and the evidence it came from." /><ProvenanceVisual /></div></section>
    <section className="page-shell editorial-section"><SectionHeading label="Human oversight" title="AI assists the workflow. People remain in control." /><div className="mt-12"><SafetySequence /></div><div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">{["Verify","Edit","Approve","Escalate","Refer"].map(x=><span key={x} className="border border-border px-3 py-2">{x}</span>)}</div></section>
    <section className="page-shell pb-24"><figure className="relative overflow-hidden rounded-lg"><img src={healthCentre} width={1600} height={1067} loading="lazy" alt="Healthcare worker reviewing clinical documents in an institutional health facility" className="aspect-[16/7] w-full object-cover"/><figcaption className="absolute inset-x-0 bottom-0 bg-foreground/85 p-5 text-sm text-background">Human review remains central—from fragmented information to context a qualified reviewer can assess.</figcaption></figure></section>
    <FinalCta title="Build a clearer first step in care." primary="Explore the Platform" secondary="See How It Works" />
  </>;
}