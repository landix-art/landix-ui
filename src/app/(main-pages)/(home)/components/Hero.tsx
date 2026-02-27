"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Terminal, Github, ChevronRight } from "lucide-react";
import Typewriter from "./Typewriter";

export function Hero() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const cycle = async () => {
      setStep(1);
      await new Promise((r) => setTimeout(r, 4600));
      setStep(2);
      await new Promise((r) => setTimeout(r, 3300));
      setStep(3);
      await new Promise((r) => setTimeout(r, 4000));
      cycle();
    };
    cycle();
  }, []);

  return (
    <section className="relative w-full text-center pb-10 pt-10 overflow-hidden">
      <div className="container">
        <div className="rounded-3xl py-10 ">
          <div className="opacity-80">
            <div className="absolute top-[30%] left-[25%] w-[45%] h-[60%] bg-[#6911b4]/30 rounded-[100%] blur-[160px] opacity-80 pointer-events-none transform-gpu"></div>

            <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[40%] bg-indigo-500/70 rounded-[100%] blur-[140px] opacity-90 pointer-events-none transform-gpu"></div>

            <div className="absolute -bottom-[10%] left-[25%] w-[50%] h-[40%] bg-indigo-600 rounded-[100%] blur-[140px] opacity-90 pointer-events-none transform-gpu"></div>

            <div className="absolute -bottom-[5%] left-[42%] w-[16%] h-[20%] bg-[#e3dbff] rounded-[100%] blur-[90px] opacity-100 pointer-events-none transform-gpu"></div>

            <div className="absolute -bottom-[10%] -right-[5%] w-[45%] h-[45%] bg-[#52b3ff] rounded-[100%] blur-[140px] opacity-85 pointer-events-none transform-gpu"></div>

            <div className="absolute top-[35%] -right-[5%] w-[35%] h-[55%] bg-[#4433da] rounded-[100%] blur-[150px] opacity-70 pointer-events-none transform-gpu"></div>
          </div>
          <div className="flex flex-col justify-center items-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10 text-sm font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-md transition-colors"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Currently in Public Beta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl text-zinc-900 dark:text-white mb-6 text-balance transition-colors"
            >
              The ultimate playground for <br className="hidden sm:block" />
              <span className="text-indigo-500  dark:text-indigo-400">
                UI engineers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl text-lg font-normal leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-xl mb-10 text-balance transition-colors"
            >
              A premium library of copy-and-paste elements designed for maximum
              customizability. Fully typed and engineered with Next.js,
              Typescript, Tailwind CSS, Shadcn, and Motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-13"
            >
              <Link
                href="/docs"
                className="group h-12 px-8 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-semibold flex items-center gap-2 transition-all shadow-xl shadow-black/5 dark:shadow-white/10"
              >
                Browse Components{" "}
                <ChevronRight className="w-4 h-4 relative left-0 group-hover:left-1 transition-all ease-in-out duration-200" />
              </Link>
              <Link
                href="https://github.com/landix-art/landix-ui"
                className="h-12 px-8 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white font-medium flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" /> GitHub
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto flex w-full max-w-56 items-center mb-10 justify-center"
            >
              <div className="flex-row gap-2 mx-auto flex w-full items-center justify-between">
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="React"
                    className="size-8"
                    fill="currentColor"
                  >
                    <title>React</title>
                    <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Tailwind css"
                    className="size-8"
                    fill="currentColor"
                  >
                    <title>Tailwind CSS</title>
                    <path d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Typescript"
                    className="size-8"
                    fill="currentColor"
                  >
                    <path d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z"></path>
                  </svg>
                </div>

                <div>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Motion"
                    className="size-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Motion</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                    <path d="M20 12l-8 8l-4 -4"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="shadcn"
                    viewBox="0 0 256 256"
                    className="size-8"
                    fill="none"
                    stroke="currentColor"
                  >
                    <line
                      x1="208"
                      y1="128"
                      x2="128"
                      y2="208"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <line
                      x1="192"
                      y1="40"
                      x2="40"
                      y2="192"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-3xl relative mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute -inset-1 bg-linear-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-50" />

              <div className="relative bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl h-90 flex flex-col ring-1 ring-black/5 dark:ring-white/5 transition-colors">
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#09090b] transition-colors">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-300 dark:bg-red-700" />
                    <div className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-700" />
                    <div className="w-3 h-3 rounded-full bg-green-300 dark:bg-green-700" />
                  </div>
                  <div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                    {step === 1 ? <Terminal className="w-3 h-3" /> : null}
                    {step === 1
                      ? "terminal"
                      : step === 2
                        ? "page.tsx"
                        : "preview"}
                  </div>
                  <div className="w-10" />
                </div>

                <div className="flex-1 relative p-6 font-mono text-sm flex flex-col items-center justify-center w-full bg-white dark:bg-[#09090b] transition-colors">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full h-full flex flex-col justify-start items-start text-left"
                      >
                        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
                          <span className="text-indigo-600 dark:text-indigo-400">
                            ~/project
                          </span>
                          <span className="text-zinc-400 dark:text-zinc-500">
                            $
                          </span>
                          <Typewriter
                            text=" npx shadcn@latest add @landix/AnimatedButton "
                            delay={500}
                          />
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3.7 }}
                          className="mt-4 flex flex-col gap-1 text-zinc-500 dark:text-zinc-400"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-500">
                              ✔
                            </span>{" "}
                            Installing dependencies.
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-500">
                              ✔
                            </span>{" "}
                            Created{" "}
                            <span className="text-zinc-900 dark:text-white font-medium">
                              components/ui/animated-button.tsx
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        className="w-full h-full text-left overflow-hidden text-xs md:text-[15px] leading-relaxed"
                      >
                        <div className="text-pink-600 dark:text-pink-400">
                          import
                        </div>
                        <div className="pl-4 text-zinc-700 dark:text-zinc-300">
                          <span className="text-blue-600 dark:text-blue-400">{`{ AnimatedButton }`}</span>{" "}
                          from{" "}
                          <span className="text-amber-600 dark:text-amber-300">
                            "@/components/ui/animated-button"
                          </span>
                        </div>
                        <div className="mt-4 text-pink-600 dark:text-pink-400">
                          export default function{" "}
                          <span className="text-blue-600 dark:text-blue-300">
                            Page
                          </span>
                          () {"{"}
                        </div>
                        <div className="pl-4 text-pink-600 dark:text-pink-400">
                          return (
                        </div>
                        <div className="pl-8 bg-zinc-100/50 dark:bg-white/5 border-l-2 border-indigo-500 block w-full py-2 rounded-r-md">
                          <span className="text-zinc-500 dark:text-zinc-400">
                            {"<"}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            AnimatedButton
                          </span>{" "}
                          <span className="text-cyan-600 dark:text-cyan-300">
                            variant
                          </span>
                          =
                          <span className="text-amber-600 dark:text-amber-300">
                            "glow"
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-400">
                            {">"}
                          </span>
                          <br />
                          <span className="text-zinc-900 dark:text-white pl-4">
                            {" "}
                            Get Started{" "}
                          </span>
                          <br />
                          <span className="text-zinc-500 dark:text-zinc-400">
                            {"</"}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            AnimatedButton
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-400">
                            {">"}
                          </span>
                        </div>
                        <div className="pl-4 text-pink-600 dark:text-pink-400">
                          )
                        </div>
                        <div className="text-pink-600 dark:text-pink-400">
                          {"}"}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="w-full h-full flex flex-col items-center justify-center gap-4"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group cursor-pointer z-10"
                        >
                          <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300" />
                          <div className="relative px-8 py-3 bg-zinc-900 dark:bg-zinc-950 rounded-lg text-white font-medium flex items-center gap-2">
                            Get Started{" "}
                            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                          </div>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="h-0.5 bg-zinc-100 dark:bg-zinc-900 w-full flex transition-colors">
                  <div
                    className="h-full dark:bg-zinc-600 bg-zinc-400 transition-all duration-300 ease-out"
                    style={{
                      width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
