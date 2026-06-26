import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import SmoothScrollProvider from "@/components/provider/SmoothScrollProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Amit's Portfolio",
  description: "Showcasing my projects, skills, and experience as a web developer. Built with Next.js, Tailwind CSS, and React. Explore my work and get in touch! ",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <SmoothScrollProvider>
          {children}
             <Toaster/>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
