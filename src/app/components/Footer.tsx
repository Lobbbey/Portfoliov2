'use client';
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Joshua Bandy © 2026
        </p>
      </div>
    </footer>
  );
}
