export const metadata = { title: "FIM 5→6–7 Cheatsheet" };

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
