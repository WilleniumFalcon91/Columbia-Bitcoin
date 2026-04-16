"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c2433",
          color: "#e5e5e5",
          fontFamily: "system-ui, sans-serif",
          padding: "1rem",
        }}
      >
        <div style={{ maxWidth: "560px", textAlign: "center" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              background: "rgba(247,147,26,0.1)",
              border: "1px solid rgba(247,147,26,0.2)",
              color: "#f7931a",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            ₿ Critical Chain Fork Detected
          </div>

          <p
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(5rem, 15vw, 8rem)",
              fontWeight: 700,
              lineHeight: 1,
              color: "rgba(247,147,26,0.2)",
              margin: "0 0 0.5rem",
              userSelect: "none",
            }}
          >
            503
          </p>

          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            The Network Forked
          </h1>

          <p style={{ color: "#a3a3a3", lineHeight: 1.7, marginBottom: "0.75rem" }}>
            Something went catastrophically wrong at the root level — like a
            hard fork nobody voted for.
          </p>
          <p style={{ color: "#a3a3a3", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            We&apos;re reorganizing the chain. Try reloading; consensus is usually
            restored quickly.
          </p>

          {error.digest && (
            <div
              style={{
                display: "inline-block",
                background: "#2a3040",
                border: "1px solid #3d4354",
                borderRadius: "0.75rem",
                padding: "0.75rem 1.25rem",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#a3a3a3",
                marginBottom: "2.5rem",
              }}
            >
              <span style={{ color: "#f7931a" }}>DIGEST</span> · {error.digest}
            </div>
          )}

          <button
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.75rem",
              background: "#f7931a",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            <RefreshCw size={16} />
            Attempt Reorg
          </button>
        </div>
      </body>
    </html>
  );
}
