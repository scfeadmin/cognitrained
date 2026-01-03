"use client";

import React, { useState } from "react";
import { ArrowLeft, Brain, Shield, Zap, Terminal, Activity, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SimulationLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  systemHealth: number;
  judgmentScore: number;
  onExit?: () => void;
}

export function SimulationLayout({
  title,
  subtitle,
  children,
  systemHealth,
  judgmentScore,
  onExit,
}: SimulationLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden selection:bg-accent/20">
      {/* Simulation Top Bar */}
      <header className="h-14 border-b border-border bg-muted/10 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/curriculum">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent leading-none">
              Simulation Active
            </span>
            <span className="text-sm font-bold tracking-tight">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
                System Health
              </span>
              <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500" 
                  style={{ width: `${systemHealth}%` }} 
                />
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
                Judgment
              </span>
              <div className="text-xs font-bold font-mono">
                {judgmentScore}%
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest border-accent/20 hover:bg-accent/5">
            Terminate Session
          </Button>
        </div>
      </header>

      {/* Main Simulation Area */}
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>

      {/* Simulation Footer (Status Bar) */}
      <footer className="h-8 border-t border-border bg-muted/5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            <Activity className="h-3 w-3 text-accent" />
            Live Context Stream: Connected
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            <Zap className="h-3 w-3 text-yellow-500" />
            Intern Paradox Phase 1.0
          </div>
        </div>
        <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground italic">
          &quot;Trust but verify every line.&quot;
        </div>
      </footer>
    </div>
  );
}
