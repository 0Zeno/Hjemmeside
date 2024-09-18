import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeno Elio Leonardi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="app/favicon/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/app/favicon/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/app/favicon/favicon-16x16.png"></link>
          <link rel="manifest" href="app/favicon/site.webmanifest"></link>
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >
        <body className={inter.className}>
          <div className="max-h-screen">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
