import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ConfigProvider from "@/component/ConfigProvider";
import Layout from "@/component/Layout";

import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filme",
  description: "First Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
