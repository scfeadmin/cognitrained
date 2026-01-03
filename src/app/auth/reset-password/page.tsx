"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AuthLayout } from "@/components/auth-layout";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of reset process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password updated successfully.");
      setTimeout(() => {
        router.push("/auth");
      }, 1000);
    }, 1500);
  };

  return (
    <AuthLayout
      title="Create New"
      subtitle="Password."
      description="Define a new password for your account. Ensure it is secure and unique."
    >
      <Card className="rounded-none border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pt-0 pb-6 space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tight uppercase">Reset Password</CardTitle>
          <CardDescription className="text-muted-foreground">Please enter your new password below.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="px-0 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">New Password</Label>
              <Input id="password" type="password" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Confirm New Password</Label>
              <Input id="confirm-password" type="password" required className="rounded-none border-border bg-muted/10 h-10 px-4 focus-visible:ring-accent" />
            </div>
          </CardContent>
          <CardFooter className="px-0 pt-6">
            <Button type="submit" className="w-full h-12 rounded-none bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {/* Security Tip */}
      <div className="pt-12 border-t border-border mt-12 flex items-start gap-4 p-6 bg-muted/5">
         <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
         <p className="text-xs text-muted-foreground leading-relaxed italic">
           &quot;A secure password is your first line of defense in high-stakes engineering. Avoid common phrases and reuse.&quot;
         </p>
      </div>
    </AuthLayout>
  );
}
