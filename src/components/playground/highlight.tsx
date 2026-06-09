import React from "react";
import type { SyntaxColors } from "./constants";

export function tokenize(code: string, colors: SyntaxColors): React.ReactNode {
  const regex = new RegExp(
    [
      "(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)",
      "(?<string>\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)",
      "(?<keyword>\\b(?:import|from|export|default|const|let|var|function|return|if|else|for|while|new|class|extends|interface|type|async|await|try|catch|switch|case|break|continue|typeof|in|of)\\b)",
      "(?<literal>\\b(?:true|false|null|undefined|this)\\b)",
      "(?<number>\\b\\d+(?:\\.\\d+)?\\b)",
      "(?<tag><\\/?[A-Za-z][\\w.]*|\\/?>)",
      "(?<component>\\b[A-Z][A-Za-z0-9]*\\b)",
      "(?<fn>\\b[a-zA-Z_]\\w*(?=\\s*\\())",
    ].join("|"),
    "g",
  );

  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  while ((m = regex.exec(code)) !== null) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const g = m.groups!;
    const type = Object.keys(g).find(
      (key) => g[key] !== undefined,
    ) as keyof SyntaxColors;
    out.push(
      <span key={k++} style={{ color: colors[type] }}>
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}
