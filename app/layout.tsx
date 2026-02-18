import type { Metadata } from "next";
import { Roboto_Flex, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrandProvider } from "@/components/providers/brand-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["GRAD", "XOPQ", "XTRA", "YOPQ", "YTAS", "YTDE", "YTFI", "YTLC", "YTUC", "wdth", "opsz"],
});


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Far AI Labs",
  description: "Far AI Labs UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoFlex.variable} ${jetbrainsMono.variable}`}
      data-theme="farlabs"
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}  
          storageKey="far-theme"
          enableColorScheme={true}
          disableTransitionOnChange
        >
            <BrandProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </BrandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
