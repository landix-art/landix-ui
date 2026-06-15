"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Eye, Code2, Copy, Check, RefreshCw, ExternalLink } from "lucide-react";
import { VIEWPORTS, SYNTAX, type ViewportKey } from "./constants";
import { buildTree, getFileIcon } from "./fileTree";
import { tokenize } from "./highlight";
import { Tree } from "./Tree";
import { AskAIDropdown } from "./AskAIDropdown";
import type { ComponentPlaygroundProps } from "./types";

function useIsDark(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      if (root.classList.contains("dark")) return true;
      if (root.classList.contains("light")) return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    setIsDark(read());

    const observer = new MutationObserver(() => setIsDark(read()));
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onMq = () => setIsDark(read());
    mq.addEventListener("change", onMq);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return isDark;
}

export const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  data,
}) => {
  const isDark = useIsDark();
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<ViewportKey>("desktop");
  const [activeFile, setActiveFile] = useState(0);
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const files = data?.files || [];
  const tree = useMemo(() => buildTree(files), [files]);
  const current = files[activeFile] || null;

  const colors = SYNTAX[isDark ? "dark" : "light"];

  const editorBgColor = isDark ? "#0d1117" : "#fafafa";
  const editorHeaderBgColor = isDark ? "#161b22" : "#f0f0f0";

  const copyCode = async () => {
    if (!current?.code) return;
    await navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!current) {
    return (
      <div className="w-full p-8 text-center text-sm text-muted-foreground border border-border rounded-2xl bg-muted/10">
        No file found to display.
      </div>
    );
  }

  const fileName = current.fileName.split("/").pop() || "";

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border transition-colors bg-background">
      {/* Header Container */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-border bg-muted/20">
        <span className="text-sm font-semibold text-foreground">
          {data?.title || "Component Preview"}
        </span>

        <div className="flex items-center gap-2">
          {/* Ask AI dropdown */}
          <AskAIDropdown
            title={data?.title || "Component"}
            fileName={current.fileName}
            code={current.code || ""}
            description={data?.description}
          />

          {/* Mode Toggles */}
          <div className="flex rounded-lg p-0.5 bg-muted">
            {(["preview", "code"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200
                  ${
                    mode === m
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
                  }`}
              >
                {m === "preview" ? <Eye size={14} /> : <Code2 size={14} />}
                {m === "preview" ? "Preview" : "Code"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-160">
        {mode === "preview" ? (
          <PreviewPane
            viewport={viewport}
            setViewport={setViewport}
            url={data?.previewUrl || ""}
            iframeKey={iframeKey}
            reload={() => setIframeKey((k) => k + 1)}
          />
        ) : (
          <div className="flex h-full">
            {/* Sidebar / Tree Container */}
            <div className="w-60 shrink-0 overflow-y-auto p-2 border-r border-border bg-muted/10">
              <Tree
                node={tree}
                depth={0}
                activeFile={activeFile}
                onSelect={setActiveFile}
                isDark={isDark}
              />
            </div>

            {/* Code Content Container */}
            <div className="flex-1 flex flex-col min-w-0">
              <div
                className="flex items-center justify-between px-4 h-10 border-b border-border"
                style={{ backgroundColor: editorHeaderBgColor }}
              >
                <div className="flex items-center gap-2">
                  {getFileIcon(fileName)}
                  <span className="text-xs font-medium text-muted-foreground">
                    {current.fileName}
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {copied ? (
                    <Check size={13} className="text-green-500" />
                  ) : (
                    <Copy size={13} />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div
                className="flex-1 overflow-auto transition-colors duration-200"
                style={{ backgroundColor: editorBgColor }}
              >
                <pre
                  dir="ltr"
                  className="p-4 text-[13px] leading-6 font-mono selection:bg-blue-500/30"
                  style={{ color: colors.plain }}
                >
                  <code>{tokenize(current.code || "", colors)}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PreviewPane: React.FC<{
  viewport: ViewportKey;
  setViewport: (v: ViewportKey) => void;
  url: string;
  iframeKey: number;
  reload: () => void;
}> = ({ viewport, setViewport, url, iframeKey, reload }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !url) return;
    setLoaded(false);
    iframeRef.current.src =
      url + (url.includes("?") ? "&" : "?") + "_r=" + iframeKey;
  }, [iframeKey, url]);

  if (!url) {
    return (
      <div className="flex items-center justify-center h-full bg-muted/30">
        <span className="text-sm text-muted-foreground">Preview link not found.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center justify-between px-4 h-10 border-b border-border">
        <div className="flex rounded-lg p-0.5 bg-muted">
          {(Object.keys(VIEWPORTS) as ViewportKey[]).map((key) => {
            const Icon = VIEWPORTS[key].icon;
            return (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`p-1.5 rounded-md transition-all duration-200
                  ${
                    viewport === key
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
                  }`}
              >
                <Icon size={15} />
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open preview in new tab"
            className="p-1.5 rounded-md transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <ExternalLink size={15} />
          </a>
          <button
            onClick={reload}
            title="Reload preview"
            className="p-1.5 rounded-md transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <RefreshCw size={15} className={!loaded ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center overflow-auto p-4 bg-muted/30">
        <div
          className="relative h-full bg-background rounded-lg border border-border overflow-hidden transition-all duration-300 shadow-sm"
          style={{ width: VIEWPORTS[viewport].width }}
        >
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 bg-background
              ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-muted-foreground animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              Loading preview…
            </span>
          </div>

          <iframe
            ref={iframeRef}
            title="preview"
            onLoad={() => setLoaded(true)}
            className="absolute top-0 left-0 border-0 bg-white dark:bg-transparent"
            style={{
              width: "125%",
              height: "125%",
              transform: "scale(0.8)",
              transformOrigin: "top left",
            }}
          />
        </div>
      </div>
    </div>
  );
};
