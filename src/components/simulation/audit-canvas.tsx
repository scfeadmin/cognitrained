"use client";

import React, { useState } from "react";
import { Terminal, Shield, Zap, AlertCircle, CheckCircle2, Info, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeLine {
  number: number;
  content: string;
  isLiability?: boolean;
  hallucination?: string;
  isFound?: boolean;
}

interface AuditCanvasProps {
  code: CodeLine[];
  signals: {
    entropy: number;
    surface: number;
    intent: string;
  };
  onFlagLine: (lineNumber: number) => void;
  onVerify: () => void;
}

export function AuditCanvas({ code, signals, onFlagLine, onVerify }: AuditCanvasProps) {
  const [showReality, setShowReality] = useState(false);

  return (
    <div className="flex h-full bg-background border-t border-border">
      {/* Code Editor Area */}
      <div className="flex-1 flex flex-col border-r border-border overflow-hidden">
        <div className="h-10 bg-muted/20 border-b border-border px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-3 w-3 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              patch_v1.0.2.ts
            </span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowReality(!showReality)}
            className={cn(
              "h-7 px-3 text-[9px] font-bold uppercase tracking-widest gap-2 transition-all",
              showReality ? "bg-accent/10 text-accent" : "text-muted-foreground"
            )}
          >
            {showReality ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
            Reality Overlay
          </Button>
        </div>
        
        <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-border">
          {code.map((line) => (
            <div 
              key={line.number} 
              className={cn(
                "group flex gap-6 px-4 py-0.5 -mx-4 transition-colors relative",
                line.isFound ? "bg-accent/5" : "hover:bg-muted/30",
                showReality && line.isLiability && "bg-red-500/10"
              )}
            >
              <div className="w-8 text-right text-muted-foreground/30 select-none text-[10px] pt-1">
                {line.number}
              </div>
              
              <div className="flex-1 relative">
                <span className={cn(
                  "relative z-10",
                  line.isFound && "text-accent font-bold"
                )}>
                  {line.content}
                </span>
                
                {line.isFound && (
                  <div className="absolute inset-0 bg-accent/10 -mx-2 rounded pointer-events-none" />
                )}

                {!line.isFound && (
                  <button
                    onClick={() => onFlagLine(line.number)}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-accent/5 -mx-2 rounded transition-opacity cursor-crosshair flex justify-end items-center px-4"
                  >
                    <span className="text-[8px] font-bold uppercase tracking-widest text-accent flex items-center gap-1">
                      Flag Liability <Zap className="h-2 w-2" />
                    </span>
                  </button>
                )}

                {showReality && line.isLiability && (
                  <div className="mt-1 p-2 bg-red-500/20 border border-red-500/30 rounded text-[10px] text-red-500 italic">
                    <span className="font-bold uppercase tracking-widest mr-2">HALLUCINATION:</span>
                    {line.hallucination}
                  </div>
                )}
              </div>

              {line.isFound && (
                <CheckCircle2 className="h-3 w-3 text-accent mt-1 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Signals Sidebar */}
      <div className="w-80 flex flex-col bg-muted/5 p-6 space-y-8 overflow-auto">
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Systemic Signals</h3>
          
          {/* Signal: Entropy */}
          <div className="p-4 bg-background border border-border space-y-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Prompt Entropy</span>
              <span className={cn(
                "text-[10px] font-bold",
                signals.entropy > 70 ? "text-red-500" : "text-accent"
              )}>{signals.entropy}%</span>
            </div>
            <div className="h-1 bg-border rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full transition-all duration-1000",
                  signals.entropy > 70 ? "bg-red-500" : "bg-accent"
                )} 
                style={{ width: `${signals.entropy}%` }} 
              />
            </div>
            <p className="text-[9px] text-muted-foreground leading-tight italic">
              Degree of ambiguity in instruction density.
            </p>
          </div>

          {/* Signal: Surface */}
          <div className="p-4 bg-background border border-border space-y-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Signal Surface</span>
              <span className="text-[10px] font-bold text-accent">{signals.surface}%</span>
            </div>
            <div className="relative h-12 flex items-end gap-[2px]">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-accent/20 rounded-t-sm" 
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
            <p className="text-[9px] text-muted-foreground leading-tight italic">
              Active verification coverage of the system.
            </p>
          </div>

          {/* Signal: Intent */}
          <div className="p-4 bg-foreground text-background space-y-2 rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Target Architecture</span>
            </div>
            <p className="text-xs font-bold leading-tight">
              {signals.intent}
            </p>
          </div>
        </div>

        <div className="flex-1" />

        <Button 
          onClick={onVerify}
          className="w-full h-12 bg-accent hover:bg-accent/90 text-background font-bold uppercase tracking-[0.2em] text-xs shadow-lg shadow-accent/20"
        >
          Submit Audit
        </Button>
      </div>
    </div>
  );
}
