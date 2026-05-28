import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zhe Cao",
  description:
    "Personal academic homepage for Zhe Cao, featuring research in LLMs, MLLMs, robot learning, evaluation, model quantization, and AI infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
