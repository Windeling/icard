import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "iCard - Windelingの間",
  description: "来看看 iCard 的精彩世界，这里有 iCard Plus、iCard Pro 和 iCard Studio 。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
