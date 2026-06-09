'use client';
import React, { useState } from 'react';
import { ChevronRight, Folder, FolderOpen } from 'lucide-react';
import { getFileIcon } from './fileTree';
import type { TreeNode } from './types';

interface TreeProps {
  node: TreeNode;
  depth: number;
  activeFile: number;
  onSelect: (i: number) => void;
  isDark: boolean;
}

export const Tree: React.FC<TreeProps> = ({ node, depth, activeFile, onSelect, isDark }) => {
  const entries = Object.values(node.children).sort((a, b) => {
    if (a.isFile !== b.isFile) return a.isFile ? 1 : -1; 
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      {entries.map((child) =>
        child.isFile ? (
          <button
            key={child.name}
            onClick={() => onSelect(child.index!)}
            style={{ paddingLeft: depth * 14 + 12 }}
            className={`w-full flex items-center gap-2 py-1.5 pr-3 rounded-md text-sm transition-colors text-left
              ${
                activeFile === child.index
                  ? isDark
                    ? 'bg-blue-500/15 text-blue-300'
                    : 'bg-blue-50 text-blue-700'
                  : isDark
                  ? 'text-zinc-400 hover:bg-white/5'
                  : 'text-zinc-600 hover:bg-zinc-100'
              }`}
          >
            {getFileIcon(child.name)}
            <span className="truncate">{child.name}</span>
          </button>
        ) : (
          <FolderNode
            key={child.name}
            node={child}
            depth={depth}
            activeFile={activeFile}
            onSelect={onSelect}
            isDark={isDark}
          />
        )
      )}
    </>
  );
};

const FolderNode: React.FC<TreeProps> = ({ node, depth, activeFile, onSelect, isDark }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ paddingLeft: depth * 14 + 8 }}
        className={`w-full flex items-center gap-1.5 py-1.5 pr-3 rounded-md text-sm font-medium transition-colors
          ${isDark ? 'text-zinc-300 hover:bg-white/5' : 'text-zinc-700 hover:bg-zinc-100'}`}
      >
        <ChevronRight size={14} className={`transition-transform ${open ? 'rotate-90' : ''}`} />
        {open ? (
          <FolderOpen size={15} className="text-sky-500" />
        ) : (
          <Folder size={15} className="text-sky-500" />
        )}
        <span className="truncate">{node.name}</span>
      </button>
      {open && (
        <Tree
          node={node}
          depth={depth + 1}
          activeFile={activeFile}
          onSelect={onSelect}
          isDark={isDark}
        />
      )}
    </div>
  );
};
