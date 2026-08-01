import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Terreno Galapa — 24 hectáreas en venta, Galapa, Atlántico",
  description:
    "Terreno estratégico de 24 hectáreas en Galapa, Atlántico, con 200 metros de frente sobre la Circunvalar de la Prosperidad. Potencial industrial, logístico y agropecuario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-background py-4 text-center text-xs text-muted-foreground">
          Construido por{" "}
          <a
            href="https://helmutfritz.fyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground"
          >
            Helmut Fritz
          </a>
        </footer>
      </body>
    </html>
  );
}
