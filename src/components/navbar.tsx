"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/framework", label: "Framework" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8">
            <Image 
              src="/cognitrained-black.png" 
              alt="Cognitrained Logo" 
              fill 
              className="object-contain dark:hidden"
            />
            <Image 
              src="/cognitrained-white.png" 
              alt="Cognitrained Logo" 
              fill 
              className="object-contain hidden dark:block"
            />
          </div>
          <span className="text-lg font-bold tracking-tight uppercase">Cognitrained</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`nav-link ${pathname === link.href ? "text-foreground" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="h-4 w-[1px] bg-border mx-2" />
        <ThemeToggle />
        <Link href="/auth" className="btn-primary">Get Started</Link>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-4">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border bg-background p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <SheetHeader className="text-left">
                <SheetTitle className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold uppercase tracking-tighter hover:text-accent transition-colors ${pathname === link.href ? "text-accent" : "text-foreground"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Link 
                href="/auth" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-4 text-center block text-sm uppercase tracking-widest font-bold"
              >
                Get Started
              </Link>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
                Institutional Access Only
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
