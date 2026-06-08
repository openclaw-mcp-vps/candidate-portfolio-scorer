import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candidate Portfolio Scorer — Score Developer Portfolios Automatically",
  description: "Analyzes GitHub profiles, personal websites, and project quality to generate hiring scores and insights for technical recruiters and hiring managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c11614cc-f541-45b6-9aa4-44fdedaf9007"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
