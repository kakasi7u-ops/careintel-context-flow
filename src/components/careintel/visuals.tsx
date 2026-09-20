import { FileText, Image, Mic, Search, ShieldCheck, UserRoundCheck } from "lucide-react";

const bars = [10, 18, 7, 24, 14, 29, 11, 20, 8, 25, 15, 10, 22, 13];

export function CareCanvas() {
  return (
    <div className="care-canvas" aria-label="Clinical information intelligence canvas">
      <div className="canvas-grid" aria-hidden="true" />
      <div className="canvas-topline"><span>CARE CONTEXT / 04—118</span><span className="text-primary">EVIDENCE LINKED</span></div>
      <div className="source-stack">
        <div className="source-fragment"><FileText /><span><b>Document</b><small>Scanned report · OCR ready</small></span></div>
        <div className="source-fragment"><Mic /><span><b>Voice narrative</b><small className="waveform">{bars.map((h, i) => <i key={i} style={{ height: h }} />)}</small></span></div>
        <div className="source-fragment"><Image /><span><b>Image evidence</b><small>Source artifact preserved</small></span></div>
      </div>
      <div className="evidence-thread" aria-hidden="true"><span /><span /><span /></div>
      <div className="structured-context">
        <p>STRUCTURED CARE CONTEXT</p>
        <dl>
          <div><dt>Timeline event</dt><dd>Source 02 · exact location</dd></div>
          <div><dt>Missing context</dt><dd>Clarification required</dd></div>
          <div><dt>Evidence pointer</dt><dd>Artifact 03 · linked</dd></div>
        </dl>
      </div>
      <div className="review-handoff"><UserRoundCheck /><span><b>Qualified human review</b><small>Verify · edit · approve · escalate</small></span></div>
    </div>
  );
}

export function FlowLine({ items }: { items: string[] }) {
  return <div className="flow-line">{items.map((item, i) => <div key={item} className="flow-node"><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div>;
}

export function ProvenanceVisual() {
  return (
    <div className="provenance-visual">
      {["Structured field", "Evidence pointer", "Source artifact", "Exact location"].map((item, i) => (
        <div key={item} className="provenance-row"><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><i /></div>
      ))}
    </div>
  );
}

export function SafetySequence() {
  return (
    <div className="safety-sequence">
      <div><FileText /><span>Evidence</span></div><b>+</b><div><Search /><span>Trusted context</span></div><i />
      <div className="accent-node"><span>GPT adapter</span><small>bounded generation</small></div><i />
      <div><ShieldCheck /><span>Validation + policy</span></div><i /><div><UserRoundCheck /><span>Human review</span></div>
    </div>
  );
}