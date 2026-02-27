import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t dark:border-white/10 dark:bg-black/50 bg-zinc-100/60 backdrop-blur-xl">
      <div className="container py-8">
        <p className="text-center text-sm leading-loose dark:text-zinc-400 md:text-left">
          Built by{" "}
          <Link
            href="https://x.com/salarbuilds"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-700 dark:text-zinc-200 underline underline-offset-4 dark:hover:text-white transition-colors"
          >
            Salar
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/landix-art/landix-ui"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-700 dark:text-zinc-200 underline underline-offset-4 dark:hover:text-white transition-colors"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
