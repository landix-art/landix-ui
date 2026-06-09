export interface FileItem {
  fileName: string; 
  code: string;
  language: string;
}

export interface PlaygroundData {
  title: string;
  files: FileItem[];
  previewUrl: string;
}

export interface ComponentPlaygroundProps {
  data: PlaygroundData;
}

export type TreeNode = {
  name: string;
  isFile: boolean;
  index?: number;
  children: Record<string, TreeNode>;
};
