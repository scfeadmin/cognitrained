"use client";

import React, { useState, useEffect } from "react";
import { SimulationLayout } from "@/components/simulation/simulation-layout";
import { CognitiveMap } from "@/components/simulation/cognitive-map";
import { AuditCanvas } from "@/components/simulation/audit-canvas";
import { toast } from "sonner";

// Initial Nodes for Cognitive Cartography
const INITIAL_NODES = [
  {
    id: "root",
    type: "root" as const,
    label: "Incident: Latency Spike",
    description: "System latency increased by 400% after patch v1.0.2.",
    status: "probed" as const,
    position: { x: 20, y: 50 },
    connections: ["h1", "h2"],
  },
  {
    id: "h1",
    type: "hypothesis" as const,
    label: "Memory Leak",
    description: "Possible leak in the new caching layer.",
    status: "available" as const,
    position: { x: 45, y: 30 },
    connections: ["p1"],
  },
  {
    id: "h2",
    type: "hypothesis" as const,
    label: "Context Decay",
    description: "The AI missed the global singleton state.",
    status: "available" as const,
    position: { x: 45, y: 70 },
    connections: ["p2"],
  },
  {
    id: "p1",
    type: "probe" as const,
    label: "Audit Cache Logic",
    status: "locked" as const,
    position: { x: 70, y: 30 },
    connections: [],
  },
  {
    id: "p2",
    type: "probe" as const,
    label: "Audit State Handoff",
    status: "locked" as const,
    position: { x: 70, y: 70 },
    connections: [],
  },
];

const INITIAL_CODE: { number: number; content: string; isLiability?: boolean; hallucination?: string; isFound?: boolean; }[] = [
  { number: 1, content: "export function updateAppState(payload: any) {" },
  { number: 2, content: "  const { data, meta } = payload;" },
  { number: 3, content: "  " },
  { number: 4, content: "  // AI Optimized Caching" },
  { number: 5, content: "  if (meta.cache && !GLOBAL_REGISTRY.has(data.id)) {" },
  { number: 6, content: "    GLOBAL_REGISTRY.set(data.id, data);" },
  { number: 7, content: "  }" },
  { number: 8, content: "  " },
  { number: 9, content: "  // Problematic AI Handoff" },
  { number: 10, content: "  const session = createSession(data.user);", isLiability: true, hallucination: "The 'createSession' function expects an ID, not the user object. This triggers an infinite retry loop.", isFound: false },
  { number: 11, content: "  " },
  { number: 12, content: "  return { ...data, session };" },
  { number: 13, content: "}" },
];

export default function InternParadoxSimulation() {
  const [phase, setPhase] = useState<"map" | "audit">("map");
  const [nodes, setNodes] = useState<any[]>(INITIAL_NODES);
  const [code, setCode] = useState(INITIAL_CODE);
  const [systemHealth, setSystemHealth] = useState(100);
  const [judgmentScore, setJudgmentScore] = useState(0);

  const handleProbeNode = (nodeId: string) => {
    setNodes(prev => prev.map(node => {
      if (node.id === nodeId) {
        return { ...node, status: "probed" };
      }
      // Unlock child connections
      const parent = prev.find(n => n.id === nodeId);
      if (parent && node.id === parent.connections[0]) {
         return { ...node, status: "available" };
      }
      return node;
    }));

    if (nodeId === "p2") {
      toast.success("Structural Doubt localized. Entering Audit Canvas.");
      setTimeout(() => setPhase("audit"), 1000);
    } else if (nodeId === "p1") {
      setSystemHealth(prev => Math.max(0, prev - 20));
      toast.error("False Lead. System health degraded.");
    }
  };

  const handleFlagLine = (lineNumber: number) => {
    setCode(prev => prev.map(line => {
      if (line.number === lineNumber) {
        if (line.isLiability) {
          setJudgmentScore(prev => Math.min(100, prev + 50));
          toast.success("Liability identified. Judgement metric increased.");
          return { ...line, isFound: true };
        } else {
          setSystemHealth(prev => Math.max(0, prev - 10));
          toast.error("False Flag. You are introducing noise into the audit.");
        }
      }
      return line;
    }));
  };

  const handleSubmitAudit = () => {
    const foundAll = code.filter(l => l.isLiability).every(l => l.isFound);
    if (foundAll) {
      toast.success("Simulation Complete. Judgment rewiring successful.");
    } else {
      toast.error("Audit incomplete. Systemic risks still present.");
    }
  };

  return (
    <SimulationLayout
      title="The Intern Paradox"
      subtitle="M01 • Certification"
      systemHealth={systemHealth}
      judgmentScore={judgmentScore}
    >
      {phase === "map" ? (
        <CognitiveMap nodes={nodes} onProbeNode={handleProbeNode} />
      ) : (
        <AuditCanvas 
          code={code} 
          signals={{ entropy: 42, surface: 78, intent: "Strict Context Singularity" }} 
          onFlagLine={handleFlagLine}
          onVerify={handleSubmitAudit}
        />
      )}
    </SimulationLayout>
  );
}
