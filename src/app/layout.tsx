import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Editor",
  description: "Edit and post your article",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="100%">
          {children}
          <ThemePanel defaultOpen={false}  />
        </Theme>
      </body>
    </html>
  );
}
