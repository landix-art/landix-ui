"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sun, Moon, Monitor, Github, Menu, X, 
  ChevronDown, Apple, Command, Sparkles 
} from "lucide-react";
import Image from "next/image";

import { categories, groupOrder } from "@/data/category";
import { useTaste, type Taste } from "@/contexts/TasteContext";

type Theme = "light" | "dark" | "system";

type TasteOption = {
  value: Taste;
  label: string;
  icon: React.ElementType;
};

const TASTE_OPTIONS: TasteOption[] = [
  { value: "apple", label: "Apple taste", icon: Apple },
  { value: "linear", label: "Linear taste", icon: Command },
  { value: "ai", label: "AI taste", icon: Sparkles },
];

function TasteDropdown() {
  const { taste, setTaste } = useTaste();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption =
    TASTE_OPTIONS.find((opt) => opt.value === taste) || TASTE_OPTIONS[0];
  const SelectedIcon = selectedOption.icon;

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2.5 text-sm shadow-sm transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800"
      >
        <div className="flex items-center gap-2.5">
          <SelectedIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
          <span className="font-medium text-neutral-900 dark:text-neutral-100">
            {selectedOption.label}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-neutral-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 flex flex-col gap-0.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-1 shadow-lg animate-in fade-in zoom-in-95 duration-100">
          {TASTE_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isSelected = taste === option.value;

            return (
              <button
                key={option.value}
                onClick={() => {
                  setTaste(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                  isSelected
                    ? "bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-60"
                  }`}
                />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


export default function Navbar() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isMounted, setIsMounted] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const [stars, setStars] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themeMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About us", href: "/about-us" },
  ];

  const groupedDocs = Object.entries(categories).reduce<
    Record<string, { key: string; title: string }[]>
  >((acc, [key, category]) => {
    (acc[category.group] ??= []).push({ key, title: category.title });
    return acc;
  }, {});

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

    // fetchGithubStars();
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

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
          "fixed w-full h-full inset-0 z-1001 md:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={[
            "fixed w-full h-screen inset-0 bg-black/40 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-label="Close menu overlay"
          tabIndex={isMobileMenuOpen ? 0 : -1}
        />

        <aside
          className={[
            "absolute left-0 top-0 bottom-0 h-screen w-[84%] max-w-[320px] flex flex-col",
            "bg-white dark:bg-neutral-950",
            "border-r border-neutral-200 dark:border-neutral-800",
            "shadow-xl",
            "transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between shrink-0 h-16 px-4 border-b border-neutral-200 dark:border-neutral-800">
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

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-2 pb-8">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div key={item.name} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>

                    {/* داکیومنت‌ها و استایل‌ها به صورت زیرمجموعه دقیقا زیر Docs */}
                    {item.name === "Docs" && (
                      <div className="ml-4 mt-2 flex flex-col gap-5 border-l border-neutral-200 dark:border-neutral-800 pl-4 pr-1 mb-4">
                        
                        {/* بخش انتخاب استایل (Taste) */}
                        <div className="pt-2">
                          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                            Theme Taste
                          </h3>
                          <TasteDropdown />
                        </div>

                        {/* بخش دسته‌بندی‌های داکیومنت */}
                        <div className="flex flex-col gap-6">
                          {groupOrder.map((group) => {
                            const items = groupedDocs[group];
                            if (!items?.length) return null;

                            return (
                              <div key={group} className="flex flex-col gap-1.5">
                                <h3 className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                                  {group}
                                </h3>

                                {items.map(({ key, title }) => {
                                  const href = `/docs/${key}`;
                                  const isDocActive = pathname === href;

                                  return (
                                    <Link
                                      key={key}
                                      href={href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors ${
                                        isDocActive
                                          ? "bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white"
                                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
                                      }`}
                                    >
                                      {title}
                                    </Link>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </header>
  );
}
