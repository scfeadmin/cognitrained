import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Code, Microscope, Terminal, Shield, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/20">
      {/* Institutional Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image 
                src="/cognitrained-black.png" 
                alt="Cognitrained Logo" 
                fill 
                className="object-contain dark:hidden"
              />
              <Image 
                src="/cognitrained-white.png" 
                alt="Cognitrained Logo" 
                fill 
                className="object-contain hidden dark:block"
              />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">Cognitrained</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/curriculum" className="nav-link">Curriculum</Link>
          <Link href="/framework" className="nav-link">Framework</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <div className="h-4 w-[1px] bg-border mx-2" />
          <ThemeToggle />
          <Link href="/auth" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Typographic Hero */}
        <section className="px-8 py-32 md:py-48 border-b border-border relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-[10px] font-bold uppercase tracking-widest mb-8 text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              The Hardcore Track is Live
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-10">
              Certify the logic <br />
              behind the <span className="text-accent italic">prompt.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
              Cognitrained is a high-fidelity simulation platform designed to bridge the Judgment Gap in AI-assisted engineering. We don&apos;t check your code; we audit your thinking.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/curriculum" className="btn-primary px-8 py-4 text-lg">
                Explore the Hardcore Track
              </Link>
              <Link href="/framework" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                The Judgment Gap Manifesto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </section>

        {/* Cognitive Rewiring Methodology */}
        <section id="logic" className="px-8 py-24 border-b border-border bg-muted/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-background">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Adversarial Auditing</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Treat AI output as a liability. Our simulations purposefully introduce subtle architectural flaws to verify your audit rigor.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-background">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Atomic Intent</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Move beyond &quot;chatting.&quot; Master the art of deterministic specification and decomposition that survives AI non-determinism.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center bg-background">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Systemic Ownership</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Understand the ripples. Certify your ability to manage &quot;AI Drift&quot; and retain cognitive ownership of automated codebases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="px-8 py-32 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase italic">
              AI speed is a commodity. <br />
              Judgment is a defensible advantage.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic font-medium">
              &quot;The industry doesn&apos;t need more prompt engineers. It needs architects who can govern agentic swarms without losing systemic integrity.&quot;
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24 flex flex-col items-center justify-center text-center space-y-12">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
            Ready for the <br /> Cognitive Reset?
          </h3>
          <div className="flex gap-6">
             <Link href="/curriculum" className="btn-primary px-10 py-5">
              Start Final Audit
            </Link>
          </div>
        </section>
      </main>

      <footer className="px-8 py-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8 bg-background">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image 
                src="/cognitrained-black.png" 
                alt="Cognitrained Logo" 
                fill 
                className="object-contain dark:hidden"
              />
              <Image 
                src="/cognitrained-white.png" 
                alt="Cognitrained Logo" 
                fill 
                className="object-contain hidden dark:block"
              />
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
