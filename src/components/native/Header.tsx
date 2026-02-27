"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sun, Moon, Monitor, Github, Menu, X } from "lucide-react";
import Image from "next/image";

type Theme = "light" | "dark" | "system";

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isMounted, setIsMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const [stars, setStars] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themeMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "About Us", href: "/about" },
  ];

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.add(isSystemDark ? "dark" : "light");
      localStorage.setItem("theme", "system");
    } else {
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/landix-art/landix-ui",
          {
            next: { revalidate: 3600 },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchGithubStars();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node)
      ) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const renderThemeIcon = () => {
    if (!isMounted)
      return (
        <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      );

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return <Moon className="h-4 w-4" />;
    }
    return <Sun className="h-4 w-4" />;
  };

  return (
    <header className="sticky top-0 z-1000 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/70 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg tracking-tight text-neutral-900 dark:text-white"
            >
              <Image
                className="w-9 h-9"
                width={600}
                height={600}
                src={"/assets/img/landix-logo.svg"}
                alt="Landix - UI library for Engineers"
              />
              Landix
            </Link>

            <nav className="hidden lg:flex! items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/landix-art/landix-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline-block">Star</span>
              {stars !== null && (
                <div className="flex items-center gap-1.5 border-l border-neutral-300 pl-2 ml-1 dark:border-neutral-700">
                  <span>{new Intl.NumberFormat("en-US").format(stars)}</span>
                </div>
              )}
            </Link>

            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Toggle theme"
              >
                {renderThemeIcon()}
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                  <button
                    onClick={() => {
                      setTheme("light");
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors ${
                      theme === "light"
                        ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white font-medium"
                        : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <Sun className="h-4 w-4" /> Light
                  </button>
                  <button
                    onClick={() => {
                      setTheme("dark");
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors ${
                      theme === "dark"
                        ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white font-medium"
                        : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <Moon className="h-4 w-4" /> Dark
                  </button>
                  <button
                    onClick={() => {
                      setTheme("system");
                      setIsThemeMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors ${
                      theme === "system"
                        ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white font-medium"
                        : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <Monitor className="h-4 w-4" /> System
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "fixed w-full h-full inset-0 z-999 md:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={[
            "fixed! w-full! h-screen! inset-0 bg-black/40 ",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Close menu overlay"
          tabIndex={isMobileMenuOpen ? 0 : -1}
        />

        <aside
          className={[
            "absolute left-0 top-0 bottom-0 h-screen w-[84%] max-w-[320px]",
            "bg-white dark:bg-neutral-950",
            "border-r border-neutral-200 dark:border-neutral-800",
            "shadow-xl",
            "transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200 dark:border-neutral-800">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 font-bold text-lg tracking-tight text-neutral-900 dark:text-white"
            >
              <Image
                className="w-9 h-9"
                width={600}
                height={600}
                src={"/assets/img/landix-logo.svg"}
                alt="Landix - UI library for Engineers"
              />
              Landix
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
