import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center h-6 gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide">
    {children}
  </div>
);

export default Badge;
