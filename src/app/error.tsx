"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Bitcoin, RefreshCw, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-destructive/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Bitcoin className="w-4 h-4" />
            Unconfirmed Transaction
          </div>

          <p className="font-mono text-[8rem] sm:text-[10rem] font-bold leading-none text-primary/20 select-none mb-2">
            500
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Transaction Failed to Broadcast
          </h1>

          <p className="text-muted-foreground text-lg mb-3 leading-relaxed">
            Something went wrong before this page could reach the mempool.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Don&apos;t panic — even the best nodes have bad days. Hit retry to
            rebroadcast, or head home and pretend this never happened. Your
            sats are safe.
          </p>

          {/* Error digest */}
          {error.digest && (
            <div className="inline-block bg-card border border-border rounded-xl px-5 py-3 font-mono text-xs text-muted-foreground mb-10">
              <span className="text-primary">DIGEST</span> · {error.digest}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-150 shadow-card"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-150 shadow-card"
            >
              <Home className="w-4 h-4" />
              Back to Genesis Block
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
