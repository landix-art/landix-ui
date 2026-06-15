"use client";

import { categories, groupOrder } from "@/data/category";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TasteProvider, useTaste, type Taste } from "@/contexts/TasteContext";

import { ChevronDown, Apple, Command, Sparkles, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-md border border-sidebar-border bg-sidebar px-3 py-2 text-sm shadow-sm transition-all hover:bg-sidebar-accent focus:outline-none focus:ring-2 focus:ring-sidebar-border/50"
      >
        <div className="flex items-center gap-2.5">
          <SelectedIcon className="h-4 w-4 text-sidebar-foreground/70" />
          <span className="font-medium text-sidebar-foreground">
            {selectedOption.label}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-sidebar-foreground/50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 flex flex-col gap-0.5 rounded-md border border-sidebar-border bg-sidebar p-1 shadow-md animate-in fade-in zoom-in-95 duration-100">
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
                className={`flex w-full items-center gap-2.5 rounded-sm px-2 py-1.5 text-sm transition-colors ${
                  isSelected
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
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

function DocsLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const grouped = Object.entries(categories).reduce<
    Record<string, { key: string; title: string }[]>
  >((acc, [key, category]) => {
    (acc[category.group] ??= []).push({ key, title: category.title });
    return acc;
  }, {});

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 translate-x-0 hidden lg:block
        `}
      >
        <nav className="flex h-full flex-col gap-6 overflow-y-auto p-4">
          <div>
            <TasteDropdown />
          </div>

          {groupOrder.map((group) => {
            const items = grouped[group];
            if (!items?.length) return null;

            return (
              <div key={group} className="flex flex-col gap-1">
                <h3 className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                  {group}
                </h3>

                {items.map(({ key, title }) => {
                  const href = `/docs/${key}`;
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={key}
                      href={href}
                      className={`rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-background p-6 text-foreground lg:p-8">
        {children}
      </main>
    </div>
  );
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TasteProvider>
      <DocsLayoutContent>{children}</DocsLayoutContent>
    </TasteProvider>
  );
}
