import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRAVoices - تَحدَّث بطبيعتك",
  description: "منصّة ترجمة صوتية فورية مدعومة بالذكاء الاصطناعي",
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

