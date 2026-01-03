"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth-layout";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Recovery email sent.");
    }, 1500);
  };

  return (
    <AuthLayout
      title="Account"
      subtitle="Recovery."
      description="Enter your email to receive a password reset link. We'll help you get back to your simulations."
    >
      <div className="space-y-8">
        <Link 
          href="/auth" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Login
        </Link>

        {!isSubmitted ? (
          <Card className="rounded-none border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0 pb-6 space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight uppercase">Forgot Password?</CardTitle>
              <CardDescription className="text-muted-foreground">We&apos;ll send you a link to reset your password.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="px-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="name@company.com" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
                </div>
              </CardContent>
              <CardFooter className="px-0 pt-6">
                <Button type="submit" className="w-full h-12 rounded-none bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <Card className="rounded-none border border-border bg-muted/5 p-8 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase tracking-tight">Check your Inbox</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We&apos;ve sent a password reset link to your email. Please follow the instructions to reset your password.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="w-full rounded-none border-border font-bold uppercase tracking-widest text-[10px]"
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
          </Card>
        )}
      </div>
    </AuthLayout>
  );
}
