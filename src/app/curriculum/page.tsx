"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Zap, Brain, Code, Terminal, Microscope } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const MICRO_CERTS = [
  {
    id: "M01",
    title: "The Intern Paradox",
    focus: "Mastering the Informed Skeptic mindset.",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    id: "M02",
    title: "Specification as Code",
    focus: "Stop 'chatting', start 'engineering intent'.",
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    id: "M03",
    title: "Context Cartography",
    focus: "Mapping the Signal Surface of a system.",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    id: "M04",
    title: "The Hallucination Hunt",
    focus: "Adversarial verification under pressure.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "M05",
    title: "Prompt Entropy",
    focus: "Managing instruction density and drift.",
    icon: <Zap className="w-5 h-5" />,
  },
];

const MAIN_COURSES = [
  {
    id: "E1",
    tier: "Level 1",
    title: "The Cognitive Reset",
    description: "Transitioning from 'Lazy Execution' to 'Strategic Orchestration'.",
    modules: ["Requirements Engineering", "The Atomic Prompt Loop", "Latent Bug Verification"],
    price: "$49",
  },
  {
    id: "E2",
    tier: "Level 2",
    title: "The Adversarial Auditor",
    description: "Mastering high-stakes debugging in complex legacy systems.",
    modules: ["Legacy Refactoring", "Context Management", "AI Drills for Regressions"],
    price: "$99",
  },
  {
    id: "E3",
    tier: "Level 3",
    title: "The Systemic Architect",
    description: "Long-term ownership and architectural stewardship.",
    modules: ["Trade-off Analysis", "AI-Driven Documentation", "Systemic Isolation"],
    price: "$149",
  },
  {
    id: "E4",
    tier: "Level 4",
    title: "The Agentic Orchestrator",
    description: "Governing agentic swarms and multi-agent workflows.",
    modules: ["Planner-Executor Patterns", "Agentic Handoffs", "Recursive Verification"],
    price: "$199",
  },
];

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/20">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
              <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">Cognitrained</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/curriculum" className="nav-link text-accent">Curriculum</Link>
          <Link href="/framework" className="nav-link">Framework</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <div className="h-4 w-[1px] bg-border mx-2" />
          <ThemeToggle />
          <Link href="/auth" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-8 py-24 border-b border-border bg-muted/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-[10px] font-bold uppercase tracking-widest mb-8 text-muted-foreground">
              Hardcore Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              The Cognitive Reset <br />
              <span className="text-muted-foreground">A Hardcore Curriculum.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We don&apos;t teach tools. We rewire how you think. Our curriculum bridges the 
              Judgment Gap through high-stakes simulations and adversarial auditing.
            </p>
          </div>
        </section>

        {/* Micro-Certs Grid */}
        <section className="px-8 py-24 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter uppercase">Micro-Certifications</h2>
                <p className="text-muted-foreground">Rapid-fire entry gates to prove cognitive baseline.</p>
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Tier 0 • Free</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border border border-border">
              {MICRO_CERTS.map((cert) => (
                <div key={cert.id} className="bg-background p-8 space-y-6 group hover:bg-muted/30 transition-colors">
                  <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-background transition-colors">
                    {cert.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-widest">{cert.id}</div>
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      &quot;{cert.focus}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Track */}
        <section className="px-8 py-32 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Professional Track</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deep-dive certifications for engineers who own their outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MAIN_COURSES.map((course) => (
                <div key={course.id} className="border border-border bg-background p-10 flex flex-col justify-between hover:border-accent/30 transition-all group">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                        {course.tier}
                      </div>
                      <div className="text-xl font-bold">{course.price}</div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold tracking-tight">{course.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {course.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-accent">Key Modules</div>
                      <ul className="space-y-3">
                        {course.modules.map((mod, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-12">
                    <Link 
                      href="/pricing"
                      className="block w-full py-4 border border-border font-bold uppercase tracking-widest text-[10px] text-center hover:bg-foreground hover:text-background transition-all"
                    >
                      Enroll in Level {course.id.slice(1)}
                    </Link>
                  </div>
                </div>
              ))}
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
