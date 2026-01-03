"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Code, Microscope, Terminal, Shield, Zap, Target } from "lucide-react";
import { Navbar } from "@/components/navbar";

const LOOP_PHASES = [
  {
    title: "Definition",
    description: "Precision of intent. Expressing requirements as deterministic specs rather than optimistic prompts.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Delegation",
    description: "Atomic decomposition. Engineering the handoff boundaries to ensure AI execution stays within manageable limits.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Dialogue",
    description: "Signal management. Mastering the iterative feedback loop without succumbing to 'Prompt Drift'.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Defense",
    description: "Adversarial validation. Treating all AI output as a liability that must be verified against systemic context.",
    icon: <Shield className="w-6 h-6" />,
  },
];

export default function Framework() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/20">
      <Navbar />

      <main className="flex-1">
        {/* Research Paper Header */}
        <section className="px-8 py-32 md:py-48 border-b border-border bg-muted/5 relative">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="text-[11px] font-bold text-accent uppercase tracking-widest">Technical Manifesto v1.0</div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
                Closing the <br />
                <span className="text-muted-foreground italic">Judgment Gap.</span>
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-border">
              <p className="text-xl leading-relaxed font-medium">
                The industry has plenty of tool-users, but lacks engineers with AI judgment. 
                Cognitrained is the architecture for the next era of engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As AI capabilities expand, the value of manual code execution diminishes, 
                while the value of institutional judgment—knowing *what* to build, 
                *how* to decompose, and *why* it will fail—skyrockets.
              </p>
            </div>
          </div>
        </section>

        {/* The Judgment Gap Split */}
        <section className="px-8 py-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-background p-12 space-y-8">
                <h3 className="text-2xl font-bold tracking-tight text-muted-foreground/60">Current Industry Pulse</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Output Obsession</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Accepting the first solution that &quot;works&quot; without auditing the systemic ripples.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Lazy Execution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Treating AI as a Senior Architect rather than a high-speed Intern.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Context Blindness</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Operating in silos, ignoring how AI-generated code affects the long-term health of the system.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-12 space-y-8 border-l border-border">
                <h3 className="text-2xl font-bold tracking-tight text-accent">The Cognitrained Reset</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Adversarial Auditing</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Treating every AI-generated line as a potential liability to be rigorously verified.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Strategic Orchestration</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Mastering the art of delegating complexity while retaining cognitive ownership.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs">Systemic Ownership</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Understanding the &quot;Invisible Why&quot; behind every component the AI assists with.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Cognitive Loop Diagrammatic Section */}
        <section className="px-8 py-32 bg-muted/20 overflow-hidden relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Cognitive Loop</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our proprietary four-phase evaluation logic built into every simulation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {LOOP_PHASES.map((phase, i) => (
                <div key={i} className="space-y-6 group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-accent group-hover:text-background transition-all">
                    {phase.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Loop Pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rounded-full pointer-events-none" />
        </section>

        {/* CTA */}
        <section className="px-8 py-32 border-t border-border bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
              Judgment is the only <br /> 
              defensible competitive advantage.
            </h2>
            <div className="flex justify-center pt-8">
              <Link href="/curriculum" className="btn-primary px-12 py-5 text-xl">
                Explore the Curriculum
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-8 py-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8 bg-background">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
              <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Cognitrained</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-semibold px-0.5">
            A Product by Socife
          </span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Certifying how you think, not what you ask.
        </p>
        <div className="flex gap-8">
          <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
