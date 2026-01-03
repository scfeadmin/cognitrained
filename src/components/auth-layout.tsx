"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Lock } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

export function AuthLayout({ children, title, subtitle, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Toaster position="top-center" />
      
      {/* Left Side: Branding & Manifesto */}
      <div className="hidden lg:flex w-1/2 bg-muted/5 border-r border-border flex-col justify-between p-16">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
              <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">Cognitrained</span>
          </Link>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tighter leading-none">
              {title} <br />
              <span className="italic text-muted-foreground">{subtitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Secure Learning</h4>
                <p className="text-sm text-muted-foreground leading-snug">Every simulation is isolated to ensure a focused, high-stakes training environment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lock className="w-6 h-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Trackable Mastery</h4>
                <p className="text-sm text-muted-foreground leading-snug">Your progress and certifications are securely tracked and verifiable by employers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold px-0.5">
          Engineering Access System v2.1
        </div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background relative overflow-hidden">
        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="lg:hidden flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-7 h-7">
                <Image src="/cognitrained-black.png" alt="Logo" fill className="object-contain dark:hidden" />
                <Image src="/cognitrained-white.png" alt="Logo" fill className="object-contain hidden dark:block" />
              </div>
              <span className="text-base font-bold tracking-tight uppercase">Cognitrained</span>
            </Link>
          </div>

          {children}
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>
    </div>
  );
}
