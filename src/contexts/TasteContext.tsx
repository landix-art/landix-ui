"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Taste = "apple" | "linear" | "ai";

interface TasteContextType {
  taste: Taste;
  setTaste: (taste: Taste) => void;
}

const TasteContext = createContext<TasteContextType | undefined>(undefined);

export function TasteProvider({ children }: { children: ReactNode }) {
  const [taste, setTaste] = useState<Taste>("apple");

  return (
    <TasteContext.Provider value={{ taste, setTaste }}>
      {children}
    </TasteContext.Provider>
  );
}

export function useTaste() {
  const context = useContext(TasteContext);
  if (context === undefined) {
    throw new Error("useTaste must be used within a TasteProvider");
  }
  return context;
}
