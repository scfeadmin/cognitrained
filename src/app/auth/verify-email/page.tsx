"use client";

import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthLayout } from "@/components/auth-layout";

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Check your"
      subtitle="Inbox."
      description="We've sent a verification link to your email. Please click the link to activate your account."
    >
      <Card className="rounded-none border border-border bg-muted/5 p-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-accent" />
        </div>
        
        <div className="space-y-3">
          <CardTitle className="text-2xl font-bold tracking-tight uppercase">Verify Email</CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            To maintain a high-stakes engineering environment, all accounts must be verified. 
            Check your email for the activation link.
          </CardDescription>
        </div>

        <div className="space-y-4">
          <Button className="w-full h-12 rounded-none bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all">
            Resend Link
          </Button>
          <Link 
            href="/auth" 
            className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Login
          </Link>
        </div>

        <div className="pt-6 border-t border-border flex items-center justify-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
          <CheckCircle2 className="w-3 h-3" /> Security Protocol Active
        </div>
      </Card>
      
      {/* Notice */}
      <div className="pt-12 border-t border-border mt-12 text-center">
         <p className="text-xs text-muted-foreground leading-relaxed italic">
           Didn&apos;t receive anything? Check your spam folder or try another email address.
         </p>
      </div>
    </AuthLayout>
  );
}
