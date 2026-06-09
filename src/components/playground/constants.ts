import { Monitor, Tablet, Smartphone } from 'lucide-react';

export const VIEWPORTS = {
  desktop: { width: '100%', icon: Monitor },
  tablet: { width: '768px', icon: Tablet },
  mobile: { width: '375px', icon: Smartphone },
} as const;

export type ViewportKey = keyof typeof VIEWPORTS;

export interface SyntaxColors {
  comment: string;
  string: string;
  keyword: string;
  literal: string;
  number: string;
  tag: string;
  component: string;
  fn: string;
  plain: string;
}

export const SYNTAX: Record<'light' | 'dark', SyntaxColors> = {
  dark: {
    comment: '#8b949e',
    string: '#a5d6ff',
    keyword: '#ff7b72',
    literal: '#79c0ff',
    number: '#79c0ff',
    tag: '#7ee787',
    component: '#d2a8ff',
    fn: '#d2a8ff',
    plain: '#c9d1d9',
  },
  light: {
    comment: '#6e7781',
    string: '#0a3069',
    keyword: '#cf222e',
    literal: '#0550ae',
    number: '#0550ae',
    tag: '#116329',
    component: '#8250df',
    fn: '#8250df',
    plain: '#24292f',
  },
};
