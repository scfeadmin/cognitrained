"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Info, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth-layout";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of auth process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Authentication successful. Opening Curriculum...");
      setTimeout(() => {
        router.push("/curriculum");
      }, 1000);
    }, 1500);
  };

  return (
    <AuthLayout
      title="Access your"
      subtitle="Dashboard."
      description="Log in to access your course simulations and track your certification progress."
    >
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-none bg-muted/20 h-12 p-1">
          <TabsTrigger value="login" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest transition-all">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest transition-all opacity-80">
            Create Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="mt-8">
          <Card className="rounded-none border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0 pb-6 space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight">Welcome Back</CardTitle>
              <CardDescription className="text-muted-foreground">Resume your engineering journey.</CardDescription>
            </CardHeader>
            <form onSubmit={handleAuth}>
              <CardContent className="px-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">Email Address</Label>
                  <Input id="email" type="email" placeholder="name@company.com" required className="rounded-lg border-border bg-muted/10 h-11 px-4 focus-visible:ring-accent shadow-none" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">Password</Label>
                    <Link href="/auth/forgot-password" title="Recover your password" className="text-[11px] font-bold text-accent hover:underline">Forgot Password?</Link>
                  </div>
                  <Input id="password" type="password" required className="rounded-lg border-border bg-muted/10 h-11 px-4 focus-visible:ring-accent shadow-none" />
                </div>
              </CardContent>
              <CardFooter className="px-0 pt-6">
                <Button type="submit" className="w-full h-12 rounded-xl bg-foreground text-background font-bold tracking-tight text-sm hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/5" disabled={isLoading}>
                  {isLoading ? "Authenticating..." : "Enter System"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="register" className="mt-8">
          <Card className="rounded-none border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0 pb-6 space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight">Registration Restricted</CardTitle>
              <CardDescription className="text-muted-foreground italic">
                Cognitrained is currently in private preview. <br />
                Direct signup is only available for select users.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <div className="p-6 border border-dashed border-border bg-muted/5 flex flex-col items-center justify-center text-center gap-4">
                <Lock className="w-8 h-8 text-muted-foreground/30" />
                <p className="text-xs text-muted-foreground leading-loose">
                  Access is handled via manual orchestration. <br />
                  If you are part of a select cohort, please sign in.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Notice */}
      <div className="pt-12 border-t border-border mt-12 flex items-start gap-4 p-6 bg-muted/5">
         <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
         <p className="text-xs text-muted-foreground leading-relaxed italic">
           &quot;We believe accountability is the core of engineering. Every certification is linked to a verified professional profile.&quot;
         </p>
      </div>
    </AuthLayout>
  );
}
