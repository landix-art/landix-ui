"use client";

import { categories, groupOrder } from "@/data/category";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TasteProvider, useTaste, type Taste } from "@/contexts/TasteContext";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const TASTE_OPTIONS: { value: Taste; label: string }[] = [
  { value: "apple", label: "Apple taste" },
  { value: "linear", label: "Linear taste" },
  { value: "ai", label: "AI taste" },
];

function TasteDropdown() {
  const { taste, setTaste } = useTaste();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const selectedOption = TASTE_OPTIONS.find((opt) => opt.value === taste);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 w-full px-3 py-2 text-sm font-medium rounded-lg border border-sidebar-border bg-sidebar hover:bg-sidebar-accent transition-colors"
      >
        <span className="text-sidebar-foreground">{selectedOption?.label}</span>
        <ChevronDown
          size={16}
          className={`text-sidebar-foreground/50 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 py-1 bg-sidebar border border-sidebar-border rounded-lg shadow-lg z-50">
          {TASTE_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTaste(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                taste === option.value
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
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
      <aside className="w-64 shrink-0 border-r border-sidebar-border bg-sidebar p-4">
        <div className="mb-4">
          <TasteDropdown />
        </div>
        
        <nav className="flex flex-col gap-6">
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
      <main className="flex-1 bg-background p-8 text-foreground">
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
