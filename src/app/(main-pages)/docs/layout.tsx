"use client";

import { categories, groupOrder } from "@/data/category";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsLayout({
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
