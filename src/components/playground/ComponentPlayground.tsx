'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Eye, Code2, Copy, Check, RefreshCw } from 'lucide-react';
import { VIEWPORTS, SYNTAX, type ViewportKey } from './constants';
import { buildTree, getFileIcon } from './fileTree';
import { tokenize } from './highlight';
import { Tree } from './Tree';
import type { ComponentPlaygroundProps } from './types';

function useIsDark(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      if (root.classList.contains('dark')) return true;
      if (root.classList.contains('light')) return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    setIsDark(read());

    const observer = new MutationObserver(() => setIsDark(read()));
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMq = () => setIsDark(read());
    mq.addEventListener('change', onMq);

    return () => {
      observer.disconnect();
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return isDark;
}

export const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({ data }) => {
  const isDark = useIsDark();
  const [mode, setMode] = useState<'preview' | 'code'>('preview');
  const [viewport, setViewport] = useState<ViewportKey>('desktop');
  const [activeFile, setActiveFile] = useState(0);
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const tree = useMemo(() => buildTree(data.files), [data.files]);
  const current = data.files[activeFile];
  const colors = SYNTAX[isDark ? 'dark' : 'light'];

  const copyCode = async () => {
    await navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const fileName = current.fileName.split('/').pop();

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border transition-colors
        ${isDark ? 'bg-[#0d1117] border-white/10' : 'bg-white border-zinc-200'}`}
    >
      <div
        className={`flex items-center justify-between px-4 h-14 border-b
          ${isDark ? 'border-white/10 bg-[#161b22]' : 'border-zinc-200 bg-zinc-50'}`}
      >
        <span className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
          {data.title}
        </span>

        <div className={`flex rounded-lg p-0.5 ${isDark ? 'bg-black/30' : 'bg-zinc-200'}`}>
          {(['preview', 'code'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors
                ${
                  mode === m
                    ? isDark
                      ? 'bg-zinc-700 text-white'
                      : 'bg-white text-zinc-900 shadow-sm'
                    : isDark
                    ? 'text-zinc-400'
                    : 'text-zinc-500'
                }`}
            >
              {m === 'preview' ? <Eye size={14} /> : <Code2 size={14} />}
              {m === 'preview' ? 'Preview' : 'Code'}
            </button>
          ))}
        </div>
      </div>

      <div className="h-130">
        {mode === 'preview' ? (
          <PreviewPane
            isDark={isDark}
            viewport={viewport}
            setViewport={setViewport}
            url={data.previewUrl}
            iframeKey={iframeKey}
            reload={() => setIframeKey((k) => k + 1)}
          />
        ) : (
          <div className="flex h-full">
            <div
              className={`w-60 shrink-0 overflow-y-auto p-2 border-r
                ${isDark ? 'border-white/10 bg-[#0d1117]' : 'border-zinc-200 bg-zinc-50'}`}
            >
              <Tree
                node={tree}
                depth={0}
                activeFile={activeFile}
                onSelect={setActiveFile}
                isDark={isDark}
              />
            </div>

            <div className="flex-1 flex flex-col min-w-0">
              <div
                className={`flex items-center justify-between px-4 h-10 border-b
                  ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
              >
                <div className="flex items-center gap-2">
                  {getFileIcon(fileName || '')}
                  <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {current.fileName}
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-colors
                    ${isDark ? 'text-zinc-400 hover:bg-white/10' : 'text-zinc-500 hover:bg-zinc-100'}`}
                >
                  {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="flex-1 overflow-auto">
                <pre
                  dir="ltr"
                  className="p-4 text-[13px] leading-6 font-mono"
                  style={{ color: colors.plain }}
                >
                  <code>{tokenize(current.code, colors)}</code>
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
  isDark: boolean;
  viewport: ViewportKey;
  setViewport: (v: ViewportKey) => void;
  url: string;
  iframeKey: number;
  reload: () => void;
}> = ({ isDark, viewport, setViewport, url, iframeKey, reload }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // reload بدون unmount/remount iframe
  useEffect(() => {
    if (!iframeRef.current) return;
    setLoaded(false);
    iframeRef.current.src = url + (url.includes('?') ? '&' : '?') + '_r=' + iframeKey;
  }, [iframeKey, url]);

  return (
    <div className="flex flex-col h-full">
      {/* toolbar */}
      <div
        className={`flex items-center justify-between px-4 h-10 border-b
          ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
      >
        <div className={`flex rounded-lg p-0.5 ${isDark ? 'bg-black/30' : 'bg-zinc-100'}`}>
          {(Object.keys(VIEWPORTS) as ViewportKey[]).map((key) => {
            const Icon = VIEWPORTS[key].icon;
            return (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`p-1.5 rounded-md transition-colors
                  ${
                    viewport === key
                      ? isDark ? 'bg-zinc-700 text-white' : 'bg-white text-zinc-900 shadow-sm'
                      : isDark ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
              >
                <Icon size={15} />
              </button>
            );
          })}
        </div>
        <button
          onClick={reload}
          className={`p-1.5 rounded-md transition-colors
            ${isDark ? 'text-zinc-400 hover:bg-white/10' : 'text-zinc-500 hover:bg-zinc-100'}`}
        >
          <RefreshCw size={15} className={!loaded ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* preview area */}
      <div
        className={`relative flex-1 flex justify-center overflow-auto p-4
          ${isDark ? 'bg-[#010409]' : 'bg-zinc-100'}`}
      >
        <div
          className="relative h-full bg-white rounded-lg border border-black/10 overflow-hidden transition-all duration-300"
          style={{ width: VIEWPORTS[viewport].width }}
        >
          {/* لودینگ فقط داخل باکس iframe، با fade-out */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500
              ${isDark ? 'bg-[#0d1117]' : 'bg-zinc-50'}
              ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            {/* سه دایره با انیمیشن staggered */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full animate-bounce
                    ${isDark ? 'bg-zinc-400' : 'bg-zinc-500'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Loading preview…
            </span>
          </div>

          <iframe
            ref={iframeRef}
            src={url}
            title="preview"
            onLoad={() => setLoaded(true)}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

