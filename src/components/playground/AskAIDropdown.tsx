// AskAIDropdown.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ChevronDown, Check } from "lucide-react";

type AIProvider = {
  id: string;
  name: string;
  buildUrl: (prompt: string) => string;
  prefillsPrompt: boolean;
  color: string;
};

const PROVIDERS: AIProvider[] = [
  {
    id: "claude",
    name: "Claude",
    buildUrl: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
    prefillsPrompt: true,
    color: "#D97757",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    buildUrl: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
    prefillsPrompt: true,
    color: "#10A37F",
  },
  {
    id: "gemini",
    name: "Gemini",
    buildUrl: () => "https://gemini.google.com/app",
    prefillsPrompt: false,
    color: "#4285F4",
  },
];

function buildPrompt(opts: {
  title: string;
  fileName: string;
  code: string;
  description?: string;
}): string {
  const { title, fileName, code } = opts;

  const ext = fileName.split(".").pop()?.toLowerCase() || "";
  const lang =
    ext === "tsx" || ext === "ts"
      ? "tsx"
      : ext === "jsx" || ext === "js"
      ? "jsx"
      : ext === "css"
      ? "css"
      : ext;

  return `I have this copy-paste UI block${
    title ? ` ("${title}")` : ""
  }. Do NOT modify or rewrite the code — keep it exactly as is.

File: \`${fileName}\`

\`\`\`${lang}
${code}
\`\`\`

Answer ONLY these two things, briefly:

1. Install command: a single line with all dependencies this code needs (e.g. \`npm install lucide-react clsx tailwind-merge\`).

2. Where to put it: which folder/path this file should go in a Next.js project (e.g. \`components/ui/${fileName}\`), and what to import in my page.

Keep it short. No explanations of how the code works, no customization tips, no edits to the code.`;
}



export const AskAIDropdown: React.FC<{
  title: string;
  fileName: string;
  code: string;
  description?: string;
}> = ({ title, fileName, code, description }) => {
  const [open, setOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSelect = async (provider: AIProvider) => {
    const prompt = buildPrompt({ title, fileName, code, description });

    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(provider.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
    }

    window.open(provider.buildUrl(prompt), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium
          text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        <Sparkles size={14} />
        Ask AI
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1.5 w-52 z-50 rounded-xl border border-border
            bg-popover shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95"
        >
          <div className="p-1">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p)}
                className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg
                  text-sm text-foreground hover:bg-muted transition-colors text-left"
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.name}
                </span>
                {copiedId === p.id ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <span className="text-[10px] text-muted-foreground">
                    {p.prefillsPrompt ? "Open" : "Copy"}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-border bg-muted/30">
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              Prompt is copied to clipboard. For Gemini, just paste it.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
