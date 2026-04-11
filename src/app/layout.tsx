import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Columbia, SC Bitcoin",
  description:
    "A local community gathering for Bitcoin enthusiasts in Columbia. Join us for education, discussion, and connection.",
  openGraph: {
    title: "Columbia, SC Bitcoin",
    description:
      "A local community gathering for Bitcoin enthusiasts in Columbia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
