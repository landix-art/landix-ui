import { useEffect, useState } from "react";

export default function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setCurrentText("");
    const startTimeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
        if (i < text.length) {
            setCurrentText((prev) => prev + text.charAt(i));
            i++;
        } else {
            clearInterval(interval);
        }
        }, 50);

        return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {currentText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-zinc-400 dark:text-zinc-500 transition-colors`}>_</span>
    </span>
  );
}
