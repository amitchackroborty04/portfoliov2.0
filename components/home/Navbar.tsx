"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (typeof window === "undefined") return;
    const navbar = document.getElementById("site-navbar");
    const navbarHeight = navbar?.offsetHeight ?? 96;
    const lenis = (window as any).__lenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(href, {
        offset: -navbarHeight - 8,
        duration: 0.8,
      });
      window.history.replaceState(null, "", href);
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="site-navbar"
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-white/10 dark:bg-[#080D27]/95 dark:supports-[backdrop-filter]:bg-[#080D27]/80"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-0">

        {/* Logo */}
        <Link
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="h-[56px] w-[171px] transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="h-full w-full"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="text-base text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-200 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <ModeToggle />

          <Button
            asChild
            className="hidden h-[48px] rounded-full border border-slate-300 bg-white px-6 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-100 dark:border-white/15 dark:bg-white dark:text-[#1E1E1E] dark:hover:bg-gray-100 md:inline-flex"
          >
            <Link href="#contact" onClick={(event) => handleNavClick(event, "#contact")}>
              Get in Touch
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[260px]">
              <div className="flex flex-col gap-6 mt-10">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}

                <Button
                  asChild
                  className="mt-4 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Link
                    href="#contact"
                    onClick={(event) => handleNavClick(event, "#contact")}
                  >
                    Get in Touch
                  </Link>
                </Button>

              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
