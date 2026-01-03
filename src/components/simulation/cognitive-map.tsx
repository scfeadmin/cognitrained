"use client";

import React, { useState } from "react";
import { Brain, Search, AlertTriangle, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapNode {
  id: string;
  type: "root" | "hypothesis" | "probe" | "risk";
  label: string;
  status: "locked" | "available" | "probed" | "failed";
  description?: string;
  position: { x: number; y: number };
  connections: string[];
}

interface CognitiveMapProps {
  nodes: MapNode[];
  onProbeNode: (nodeId: string) => void;
}

export function CognitiveMap({ nodes, onProbeNode }: CognitiveMapProps) {
  return (
    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted/20 via-background to-background p-12 overflow-auto flex items-center justify-center min-h-[600px]">
      <div className="relative w-full max-w-5xl h-full min-h-[500px]">
        {/* SVG Connections Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" className="text-border" />
            </marker>
          </defs>
          {nodes.map((node) => 
            node.connections.map((targetId) => {
              const target = nodes.find(n => n.id === targetId);
              if (!target) return null;
              
              const isProbed = node.status === "probed" && target.status !== "locked";
              
              return (
                <line
                  key={`${node.id}-${targetId}`}
                  x1={`${node.position.x}%`}
                  y1={`${node.position.y}%`}
                  x2={`${target.position.x}%`}
                  y2={`${target.position.y}%`}
                  className={cn(
                    "stroke-2 transition-all duration-1000",
                    isProbed ? "stroke-accent/50 [stroke-dasharray:5,2] [animation:dash_5s_linear_infinite]" : "stroke-border"
                  )}
                />
              );
            })
          )}
        </svg>

        {/* Nodes Layer */}
        {nodes.map((node) => (
          <div
            key={node.id}
            onClick={() => node.status === "available" && onProbeNode(node.id)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group",
              node.status === "locked" && "opacity-40 cursor-not-allowed",
              node.status === "available" && "hover:scale-105",
              node.status === "probed" && "scale-100"
            )}
            style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
          >
            <div className={cn(
              "p-4 rounded-xl border-2 bg-background/80 backdrop-blur-md shadow-xl min-w-[180px] flex flex-col gap-2 transition-all",
              node.status === "available" && "border-accent animate-pulse",
              node.status === "probed" && "border-accent bg-accent/5",
              node.status === "failed" && "border-red-500 bg-red-500/5",
              node.status === "locked" && "border-border"
            )}>
              <div className="flex items-center justify-between gap-3">
                <div className={cn(
                  "p-2 rounded-lg bg-muted border border-border",
                  node.status === "probed" && "bg-background border-accent/20"
                )}>
                  {node.type === "root" && <Brain className="h-4 w-4 text-accent" />}
                  {node.type === "hypothesis" && <Search className="h-4 w-4 text-accent/80" />}
                  {node.type === "probe" && <Zap className="h-4 w-4 text-yellow-500" />}
                  {node.type === "risk" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                </div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {node.type}
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-xs font-bold leading-tight uppercase tracking-tight">
                  {node.label}
                </h4>
                {node.description && (
                  <p className="text-[10px] text-muted-foreground leading-tight italic">
                    {node.description}
                  </p>
                )}
              </div>

              {node.status === "available" && (
                <div className="flex items-center gap-1 text-[8px] font-bold uppercase text-accent pt-2">
                  <ArrowRight className="h-3 w-3" />
                  Probe Node
                </div>
              )}
              {node.status === "probed" && (
                <div className="flex items-center gap-1 text-[8px] font-bold uppercase text-accent/60 pt-2">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </div>
              )}
            </div>

            {/* Orbiting effect for available nodes */}
            {node.status === "available" && (
              <div className="absolute inset-0 -m-1 border border-accent/20 rounded-xl animate-[spin_4s_linear_infinite]" />
            )}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -50;
          }
        }
      `}</style>
    </div>
  );
}
