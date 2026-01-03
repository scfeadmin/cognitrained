"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Shield, Zap, Target, Lock } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";

const TIERS = [
  {
    name: "Foundation",
    level: "Level 1",
    price: "$49",
    description: "The Cognitive Reset. Transition from chat to orchestration.",
    features: [
      "Access to 10 Foundational Labs",
      "Public Level 1 Certificate",
      "AI Reasoning Audit",
      "Lifetime access to content",
    ],
    cta: "Start Foundation",
    highlight: false,
  },
  {
    name: "Auditor",
    level: "Level 2",
    price: "$99",
    description: "Adversarial high-stakes debugging and legacy refactoring.",
    features: [
      "Access to 10 Auditor Labs",
      "Public Level 2 Certificate",
      "Adversarial Feedback Loop",
      "Senior Engineer AI Guidance",
    ],
    cta: "Start Auditor",
    highlight: true,
  },
  {
    name: "Architect",
    level: "Level 3",
    price: "$149",
    description: "Systemic ownership and long-term architectural stewardship.",
    features: [
      "Access to 5 Architect Labs",
      "Public Level 3 Certificate",
      "Architectural Trade-off Audit",
      "Systemic Drift Analysis",
    ],
    cta: "Start Architect",
    highlight: false,
  },
  {
    name: "Orchestrator",
    level: "Level 4",
    price: "$199",
    description: "Governing agentic swarms and multi-agent workflows.",
    features: [
      "Access to 5 Orchestration Labs",
      "Public Level 4 Certificate",
      "Multi-agent Verification Logic",
      "Agentic Governance Audit",
    ],
    cta: "Start Orchestrator",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/20">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="px-8 py-24 border-b border-border bg-muted/5">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Professional Fees</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              Pay for the <span className="italic text-muted-foreground">Audit.</span> <br />
              Own the Credential.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Cognitrained is not a content library. It is a verification house. 
              Our one-time audit fees cover the cost of high-fidelity simulations and deep AI evaluation logic.
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="px-8 py-24 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
              {TIERS.map((tier) => (
                <div key={tier.level} className={`bg-background p-10 flex flex-col justify-between hover:bg-muted/30 transition-all ${tier.highlight ? 'ring-2 ring-accent ring-inset' : ''}`}>
                  <div className="space-y-8">
                    <div className="space-y-2">
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{tier.level}</div>
                       <h3 className="text-2xl font-bold tracking-tight">{tier.name}</h3>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-[10px] font-bold uppercase text-muted-foreground">/ one-time</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {tier.description}
                    </p>

                    <ul className="space-y-4 pt-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground leading-tight">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-12">
                     <button className={`w-full py-4 font-bold uppercase tracking-widest text-[10px] transition-all border ${tier.highlight ? 'bg-accent text-background border-accent' : 'border-border hover:bg-foreground hover:text-background'}`}>
                      {tier.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* All-Access Bundle */}
            <div className="mt-12 p-8 border border-border bg-muted/5 flex flex-col md:flex-row items-center justify-between gap-8 group">
               <div className="space-y-2">
                 <h3 className="text-2xl font-bold tracking-tight uppercase">The Path to Mastery Bundle</h3>
                 <p className="text-muted-foreground text-sm">Full access to all 4 levels + early access to future Engineering Stream updates.</p>
               </div>
               <div className="flex items-center gap-8">
                 <div className="text-right">
                   <div className="text-xs text-muted-foreground line-through">$496</div>
                   <div className="text-4xl font-bold">$349</div>
                 </div>
                 <button className="btn-primary px-10 py-5">Get Bundle</button>
               </div>
            </div>
          </div>
        </section>

        {/* Free Entry Callout */}
        <section className="px-8 py-24 border-b border-border bg-background relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Not ready to commit?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start with the **5 Micro-Certifications** for $0. 
              Prove your cognitive baseline before moving to technical mastery.
            </p>
            <div className="flex justify-center">
              <Link href="/curriculum" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                Start Free Certs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ - Quick Strike */}
        <section className="px-8 py-24 bg-muted/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-3xl font-bold tracking-tighter uppercase text-center font-mono">Principles of Certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" /> Why a one-time fee?
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe professional weight comes from completion, not consumption. By paying per certification, you are investing in the audit process and the resulting credential, which lasts forever on your public profile.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <Lock className="w-4 h-4 text-accent" /> Lifetime Access?
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes. Once you pay for a Level, you have lifetime access to the simulations and challenges within that level, including any future updates to the curriculum in that tier.
                </p>
              </div>
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
