"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Brain, Code, Microscope, Terminal, Shield, Zap, 
  Settings, User, LogOut, CheckCircle2, Circle, Clock, Award,
  ChevronRight, LayoutDashboard, Database, Globe, Lock, Info
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const STREAMS = [
  { id: "eng", name: "Engineering", active: true, icon: <Code className="w-4 h-4" /> },
  { id: "prod", name: "Product", active: false, icon: <Globe className="w-4 h-4" />, status: "Pipeline" },
];

const ENROLLED_COURSES = [
  {
    id: "E1",
    title: "The Cognitive Reset",
    level: "Level 1",
    progress: 40,
    nextTask: "Requirements Engineering Lab",
    status: "In Progress",
  },
];

const AVAILABLE_LEVELS = [
  { id: "E2", name: "The Adversarial Auditor", level: "Level 2", price: "$99", status: "Locked" },
  { id: "E3", name: "The Systemic Architect", level: "Level 3", price: "$149", status: "Locked" },
  { id: "E4", name: "The Agentic Orchestrator", level: "Level 4", price: "$199", status: "Locked" },
];

const MICRO_CERTS_STATUS = [
  { id: "M01", name: "The Intern Paradox", status: "Certified", date: "Jan 1, 2026" },
  { id: "M02", name: "Specification as Code", status: "Certified", date: "Jan 2, 2026" },
  { id: "M03", name: "Context Cartography", status: "In Progress", progress: 75 },
  { id: "M04", name: "The Hallucination Hunt", status: "Not Started" },
  { id: "M05", name: "Prompt Entropy", status: "Not Started" },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-accent/20">
      {/* Sidebar - Institutional Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col bg-muted/5">
        <div className="p-6 pb-12">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-7 h-7">
              <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
              <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">Cognitrained</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-4 mb-4">Command Center</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 bg-accent/10 text-accent rounded-none border-l-2 border-accent text-sm font-bold uppercase tracking-wider">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/challenges" className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold uppercase tracking-wider">
            <Terminal className="w-4 h-4" /> Simulations
          </Link>
          <Link href="/certificates" className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" /> Certification
          </Link>

          <div className="pt-8 mb-4">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-4 mb-4">Active Streams</div>
            {STREAMS.map(stream => (
              <div key={stream.id} className={`flex items-center justify-between px-4 py-2.5 text-sm font-bold uppercase tracking-wider ${stream.active ? 'text-foreground' : 'text-muted-foreground/40 cursor-not-allowed'}`}>
                <div className="flex items-center gap-3">
                  {stream.icon} {stream.name}
                </div>
                {stream.status && <span className="text-[8px] border border-border px-1.5 py-0.5">{stream.status}</span>}
              </div>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-all uppercase tracking-wider">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <div className="flex items-center justify-between p-4 bg-muted/20 border border-border">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background text-xs font-bold">JD</div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold uppercase tracking-tight">John Doe</span>
                 <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Entry Level</span>
               </div>
             </div>
             <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/80 backdrop-blur-md sticky top-0 z-40">
           <div className="flex items-center gap-4">
             <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Engineering Stream</h2>
             <ChevronRight className="w-3 h-3 text-muted-foreground" />
             <h2 className="text-xs font-bold uppercase tracking-widest">Auditor Dashboard</h2>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
                <Shield className="w-3 h-3" /> System Status: Operational
              </div>
              <Button size="sm" variant="outline" className="text-[10px] font-bold uppercase tracking-widest rounded-none h-8 px-4">
                Begin Daily Drill
              </Button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-12 pb-24">
          {/* Welcome & Overview */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter uppercase">Welcome, Auditor.</h1>
              <p className="text-muted-foreground leading-relaxed italic pr-4">
                &quot;The gap between code and value is filled by judgment.&quot; - System Message
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-1 px-1 bg-border border border-border shrink-0">
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Audit XP</div>
                 <div className="text-3xl font-bold tracking-tighter">1,240</div>
               </div>
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Certified</div>
                 <div className="text-3xl font-bold tracking-tighter">02</div>
               </div>
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Trust Rank</div>
                 <div className="text-3xl font-bold tracking-tighter">#412</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col: Mastery Path */}
            <div className="lg:col-span-2 space-y-12">
              {/* Active Mastery Level */}
              <section className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Active Mastery Path</h3>
                {ENROLLED_COURSES.map(course => (
                  <Card key={course.id} className="rounded-none border-border shadow-none bg-muted/5 group overflow-hidden">
                    <CardHeader className="flex flex-row items-start justify-between pb-2">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest">{course.level}</div>
                        <CardTitle className="text-2xl font-bold uppercase tracking-tight">{course.title}</CardTitle>
                      </div>
                      <div className="flex gap-2">
                         <span className="text-[10px] font-bold px-2 py-1 bg-accent text-background uppercase tracking-widest">{course.status}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4">
                       <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
                            <span>Level Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-1 bg-border w-full">
                            <div className="h-full bg-accent transition-all duration-500" style={{ width: `${course.progress}%` }} />
                          </div>
                       </div>
                       <div className="flex items-center gap-4 bg-background p-4 border border-border">
                          <Terminal className="w-5 h-5 text-muted-foreground" />
                          <div className="flex-1">
                            <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Up Next</div>
                            <div className="text-sm font-bold uppercase tracking-tight">{course.nextTask}</div>
                          </div>
                          <Button size="sm" className="rounded-none h-8 px-6 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/90">
                            Resume Audit
                          </Button>
                       </div>
                    </CardContent>
                  </Card>
                ))}
              </section>

              {/* Advanced Levels (Locked) */}
              <section className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Locked Mastery Levels</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                  {AVAILABLE_LEVELS.map(level => (
                    <div key={level.id} className="bg-background p-6 space-y-6 group hover:bg-muted/10 transition-colors">
                      <div className="space-y-1">
                        <div className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-widest">{level.level}</div>
                        <h4 className="text-sm font-bold uppercase tracking-tight leading-snug">{level.name}</h4>
                      </div>
                      <div className="flex justify-between items-center bg-muted/10 p-2 text-xs font-bold">
                        <Lock className="w-3 h-3 text-muted-foreground/40" />
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Professional Audit Required</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Col: Micro-Certs & Stats */}
            <div className="space-y-12">
              <section className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Micro-Certification Matrix</h3>
                <div className="space-y-px bg-border border border-border">
                  {MICRO_CERTS_STATUS.map(cert => (
                    <div key={cert.id} className="bg-background flex items-center justify-between p-4 px-6 group transition-colors hover:bg-muted/10">
                       <div className="space-y-1">
                          <div className="text-[9px] font-bold text-accent uppercase tracking-widest">{cert.id}</div>
                          <div className="text-xs font-bold uppercase tracking-tight">{cert.name}</div>
                       </div>
                       <div className="flex items-center gap-4">
                         {cert.status === "Certified" ? (
                           <CheckCircle2 className="w-5 h-5 text-accent" />
                         ) : cert.status === "In Progress" ? (
                           <div className="w-10 h-10 border-2 border-border border-t-accent rounded-full animate-spin flex items-center justify-center text-[8px] font-bold italic" style={{ animationDuration: '3s' }}>
                             {cert.progress}%
                           </div>
                         ) : (
                           <Circle className="w-5 h-5 text-muted-foreground/20" />
                         )}
                       </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full h-12 rounded-none border-border font-bold uppercase tracking-widest text-[10px] hover:bg-foreground hover:text-background transition-all">
                  Browse All Micro-Certs
                </Button>
              </section>

              {/* Tooltip/Manifesto */}
              <Card className="rounded-none border-border shadow-none bg-accent/5">
                <CardHeader className="pb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Info className="w-4 h-4 text-accent" /> Auditor Notice
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    Level 1 Certification unlocks the &quot;Legacy Refactoring&quot; simulation path. Complete Case Study E1-03 to proceed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
