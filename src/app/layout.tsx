import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { App } from './pages/_app';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Story's Lab Fishing",
  description: "Provided by Story's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
