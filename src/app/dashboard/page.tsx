"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, Brain, Code, Microscope, Terminal, Shield, Zap, 
  Settings, User, LogOut, CheckCircle2, Circle, Clock, Award,
  ChevronRight, LayoutDashboard, Database, Globe, Lock, Info, Menu
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const STREAMS = [
  { id: "eng", name: "Engineering", active: true, icon: <Code className="w-4 h-4" /> },
  { id: "prod", name: "Product", active: false, icon: <Globe className="w-4 h-4" />, status: "Pipeline" },
];

const ENROLLED_COURSES: any[] = [];

const AVAILABLE_LEVELS = [
  { id: "E2", name: "The Adversarial Auditor", level: "Level 2", price: "$99", status: "Locked" },
  { id: "E3", name: "The Systemic Architect", level: "Level 3", price: "$149", status: "Locked" },
  { id: "E4", name: "The Agentic Orchestrator", level: "Level 4", price: "$199", status: "Locked" },
];

const MICRO_CERTS_STATUS = [
  { id: "M01", name: "The Intern Paradox", status: "Not Started", progress: 0 },
  { id: "M02", name: "Specification as Code", status: "Not Started", progress: 0 },
  { id: "M03", name: "Context Cartography", status: "Not Started", progress: 0 },
  { id: "M04", name: "The Hallucination Hunt", status: "Not Started", progress: 0 },
  { id: "M05", name: "Prompt Entropy", status: "Not Started", progress: 0 },
];

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="p-6 pb-12">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 md:w-7 md:h-7">
            <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
            <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
          </div>
          <span className="text-sm font-bold tracking-tight uppercase">Cognitrained</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider px-4 mb-4">Command Center</div>
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2.5 bg-accent/5 text-accent rounded-lg text-sm font-medium tracking-tight">
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </Link>
        <Link href="/challenges" className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-tight">
          <Terminal className="w-4 h-4" /> Simulations
        </Link>
        <Link href="/certificates" className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-tight">
          <Award className="w-4 h-4" /> Certification
        </Link>

        <div className="pt-8 mb-4">
          <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-wider px-4 mb-4">Active Streams</div>
          {STREAMS.map(stream => (
            <div key={stream.id} className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium tracking-tight ${stream.active ? 'text-foreground' : 'text-muted-foreground/40 cursor-not-allowed'}`}>
              <div className="flex items-center gap-3">
                {stream.icon} {stream.name}
              </div>
              {stream.status && <span className="text-[9px] border border-border px-1.5 py-0.5 rounded text-muted-foreground">{stream.status}</span>}
            </div>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-border space-y-4">
        <button className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all tracking-tight capitalize">
          <Settings className="w-4 h-4" /> Settings
        </button>
        <div className="flex items-center justify-between p-3 bg-muted/20 border border-border rounded-lg">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background text-[10px] font-bold shrink-0">PA</div>
              <div className="flex flex-col overflow-hidden leading-tight">
                <span className="text-sm font-bold tracking-tight truncate">Professional Auditor</span>
                <span className="text-[10px] text-muted-foreground truncate">Verification Pending</span>
              </div>
            </div>
            <ThemeToggle />
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-accent/20">
      {/* Sidebar - Desktop */}
      <aside className="w-64 border-r border-border hidden md:flex flex-col bg-muted/5">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background">
        <header className="h-16 border-b border-border flex items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-40">
           <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
               <SheetTrigger asChild>
                 <button className="p-2 -ml-2 md:hidden text-muted-foreground">
                   <Menu className="w-5 h-5" />
                 </button>
               </SheetTrigger>
               <SheetContent side="left" className="w-64 p-0 border-r border-border bg-background flex flex-col">
                 <SidebarContent />
               </SheetContent>
             </Sheet>
             <h2 className="text-xs font-semibold text-muted-foreground hidden sm:block whitespace-nowrap tracking-tight">Engineering Stream</h2>
             <ChevronRight className="w-3 h-3 text-muted-foreground/30 hidden sm:block" />
             <h2 className="text-xs font-bold tracking-tight truncate">Auditor Dashboard</h2>
           </div>
           <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-muted-foreground whitespace-nowrap">
                <Shield className="w-3 h-3 text-accent/60" /> System Status: <span className="text-foreground">Operational</span>
              </div>
              <Button size="sm" variant="outline" className="text-xs font-semibold tracking-tight rounded-lg h-9 px-4">
                Daily Drill
              </Button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-12 pb-24">
          {/* Welcome & Overview */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome, Auditor.</h1>
              <p className="text-muted-foreground leading-relaxed italic pr-4 border-l-2 border-accent/20 pl-4">
                &quot;The gap between code and value is filled by judgment.&quot;
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-1 px-1 bg-border border border-border rounded-lg overflow-hidden shrink-0 shadow-sm">
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Audit XP</div>
                 <div className="text-3xl font-bold tracking-tight">0</div>
               </div>
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Certified</div>
                 <div className="text-3xl font-bold tracking-tight">0</div>
               </div>
               <div className="bg-background pt-4 pb-6 px-10 text-center space-y-1 group hover:bg-muted/30 transition-colors">
                 <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Rank</div>
                 <div className="text-3xl font-bold tracking-tight text-muted-foreground/30">--</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col: Mastery Path */}
            <div className="lg:col-span-2 space-y-12">
              {/* Active Mastery Level */}
              <section className="space-y-6">
                <h3 className="text-sm font-bold tracking-tight text-muted-foreground">Active Mastery Path</h3>
                {ENROLLED_COURSES.length > 0 ? (
                  ENROLLED_COURSES.map(course => (
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
                  ))
                ) : (
                  <div className="border border-dashed border-border p-12 flex flex-col items-center justify-center gap-6 bg-muted/5 rounded-2xl">
                     <Brain className="w-10 h-10 text-muted-foreground/10" />
                     <div className="text-center space-y-2">
                       <p className="text-base font-bold tracking-tight text-foreground">No active path detected.</p>
                       <p className="text-sm text-muted-foreground max-w-[240px] leading-relaxed">
                         Rewire your mental model by enrolling in your first audit tract.
                       </p>
                     </div>
                     <Link href="/curriculum">
                       <Button size="lg" className="rounded-full text-xs font-bold tracking-tight px-10 h-12">Browse Curriculum</Button>
                     </Link>
                  </div>
                )}
              </section>

              {/* Advanced Levels (Locked) */}
              <section className="space-y-6">
                <h3 className="text-sm font-bold tracking-tight text-muted-foreground">Mastering Next-Gen Intelligence</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {AVAILABLE_LEVELS.map(level => (
                    <Card key={level.id} className="bg-muted/5 border-border p-6 space-y-6 group hover:border-accent/30 transition-colors rounded-xl shadow-none">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest">{level.level}</div>
                        <h4 className="text-sm font-bold tracking-tight leading-snug">{level.name}</h4>
                      </div>
                      <div className="flex justify-between items-center bg-background border border-border p-2.5 rounded-lg text-xs font-bold">
                        <Lock className="w-3.5 h-3.5 text-muted-foreground/30" />
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">Locked</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Col: Micro-Certs & Stats */}
            <div className="space-y-12">
              <section className="space-y-6">
                <h3 className="text-sm font-bold tracking-tight text-muted-foreground">Micro-Certifications</h3>
                <div className="space-y-3">
                  {MICRO_CERTS_STATUS.map(cert => (
                    <div key={cert.id} className="bg-muted/5 border border-border flex items-center justify-between p-4 rounded-xl group transition-all hover:bg-muted/10">
                       <div className="space-y-1">
                          <div className="text-[9px] font-bold text-accent uppercase tracking-widest">{cert.id}</div>
                          <div className="text-xs font-bold tracking-tight">{cert.name}</div>
                       </div>
                       <div className="flex items-center gap-4">
                         {cert.status === "Certified" ? (
                           <CheckCircle2 className="w-5 h-5 text-accent" />
                         ) : cert.status === "In Progress" ? (
                           <div className="w-9 h-9 border-2 border-border border-t-accent rounded-full animate-spin flex items-center justify-center text-[8px] font-bold italic" style={{ animationDuration: '3s' }}>
                             {cert.progress}%
                           </div>
                         ) : (
                           <Circle className="w-5 h-5 text-muted-foreground/10" />
                         )}
                       </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full h-12 rounded-xl border border-border font-bold tracking-tight text-xs hover:bg-accent/5 hover:text-accent transition-all">
                  Browse All
                </Button>
              </section>

              {/* Tooltip/Manifesto */}
              <Card className="rounded-2xl border-accent/20 shadow-none bg-accent/5 overflow-hidden border-2">
                <CardHeader className="pb-3 pt-6 px-6">
                  <h4 className="text-sm font-bold tracking-tight flex items-center gap-2">
                    <Info className="w-4 h-4 text-accent" /> Auditor Notice
                  </h4>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    Level 1 Certification unlocks the &quot;Legacy Refactoring&quot; simulation path. Complete E1-03 to proceed.
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
