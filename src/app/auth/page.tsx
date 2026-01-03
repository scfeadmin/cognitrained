"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Shield, Lock, UserPlus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of auth process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Verification successful. Redirecting to Entry Gate...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }, 1500);
  };

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
              The Entry <br />
              <span className="italic text-muted-foreground">Gate.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Enter the simulation environment. Our verification engine requires an authenticated session to track your cognitive audit history and certification progress.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Encrypted Sessions</h4>
                <p className="text-sm text-muted-foreground leading-snug">Every simulation is containerized and isolated for high-fidelity auditing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lock className="w-6 h-6 text-accent shrink-0" />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Verifiable Credentials</h4>
                <p className="text-sm text-muted-foreground leading-snug">Your identity is cryptographically linked to your certification accomplishments.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold px-0.5">
          Socife Institutional Access System v2.1
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

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-none bg-muted/20 h-12 p-1">
              <TabsTrigger value="login" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest transition-all">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest transition-all">
                Create Account
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-8">
              <Card className="rounded-none border-none shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6 space-y-2">
                  <CardTitle className="text-2xl font-bold tracking-tight uppercase">Welcome Back</CardTitle>
                  <CardDescription className="text-muted-foreground">Resume your engineering verification path.</CardDescription>
                </CardHeader>
                <form onSubmit={handleAuth}>
                  <CardContent className="px-0 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Institutional Email</Label>
                      <Input id="email" type="email" placeholder="name@company.com" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Credential</Label>
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline">Forgot Access?</Link>
                      </div>
                      <Input id="password" type="password" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-6">
                    <Button type="submit" className="w-full h-12 rounded-none bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all" disabled={isLoading}>
                      {isLoading ? "Verifying..." : "Access Gate"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="register" className="mt-8">
              <Card className="rounded-none border-none shadow-none bg-transparent">
                <CardHeader className="px-0 pt-0 pb-6 space-y-2">
                  <CardTitle className="text-2xl font-bold tracking-tight uppercase">New Auditor</CardTitle>
                  <CardDescription className="text-muted-foreground">Start your journey toward systemic mastery.</CardDescription>
                </CardHeader>
                <form onSubmit={handleAuth}>
                  <CardContent className="px-0 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-reg" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Institutional Email</Label>
                      <Input id="email-reg" type="email" placeholder="name@company.com" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-reg" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Define Credential</Label>
                      <Input id="password-reg" type="password" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-6 flex flex-col gap-4">
                    <Button type="submit" className="w-full h-12 rounded-none bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all" disabled={isLoading}>
                      {isLoading ? "Creating Profile..." : "Initialize Profile"}
                    </Button>
                    <p className="text-[10px] text-muted-foreground text-center">
                      By creating an account, you agree to our <Link href="/terms" className="text-accent underline">Terms of Audit</Link> and <Link href="/privacy" className="text-accent underline">Privacy Scoping</Link>.
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Social Proof/Notice */}
          <div className="pt-12 border-t border-border mt-12 flex items-start gap-4 p-6 bg-muted/5">
             <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
             <p className="text-xs text-muted-foreground leading-relaxed italic">
               &quot;Authenticity in AI-assisted engineering starts with accountability. Every certification level requires a verified individual profile.&quot;
             </p>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>
    </div>
  );
}
