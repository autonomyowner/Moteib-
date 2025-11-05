import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "TRAVoices Voice Call",
  description: "Premium voice calling with TRAVoices",
};

export default function CallLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
