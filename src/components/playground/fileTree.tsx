import React from 'react';
import { FileCode2, FileJson, FileText } from 'lucide-react';
import type { FileItem, TreeNode } from './types';

export const getFileIcon = (name: string) => {
  if (/\.(tsx|jsx)$/.test(name)) return <FileCode2 size={15} className="text-[#61DAFB]" />;
  if (/\.(ts|js)$/.test(name)) return <FileCode2 size={15} className="text-yellow-500" />;
  if (/\.json$/.test(name)) return <FileJson size={15} className="text-amber-500" />;
  if (/\.css$/.test(name)) return <FileText size={15} className="text-sky-500" />;
  return <FileText size={15} className="text-zinc-400" />;
};

export const buildTree = (files: FileItem[]): TreeNode => {
  const root: TreeNode = { name: 'root', isFile: false, children: {} };
  files.forEach((file, index) => {
    const parts = file.fileName.split('/');
    let node = root;
    parts.forEach((part, i) => {
      const isFile = i === parts.length - 1;
      if (!node.children[part]) {
        node.children[part] = {
          name: part,
          isFile,
          children: {},
          index: isFile ? index : undefined,
        };
      }
      node = node.children[part];
    });
  });
  return root;
};
