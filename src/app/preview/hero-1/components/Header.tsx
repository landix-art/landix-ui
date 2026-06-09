"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";


const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navItemClassName =
    "py-2 px-3 rounded-3xl transition-all duration-300 ease-in-out relative text-[#ffffffa3] hover:text-white";
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-20">
      <nav className="py-3">
        <div className="container flex justify-between items-center">
          <div className="lg:hidden">
            <button
              className={`text-white text-3xl`}
              data-label="Hamburger menu"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <Menu size={30} />
            </button>
          </div>
          <div
            className={`${
              showMenu ? "left-0" : "-left-75"
            }  fixed top-0 bottom-0 h-screen lg:h-auto transition-all ease-in-out duration-300 w-75 lg:static lg:flex lg:col-span-6 justify-start flex-wrap z-70 mr-auto`}
          >
            {showMenu && (
              <div
                className="lg:hidden left-0 right-0 top-0 bottom-0 h-screen w-full fixed bg-[#4f50315a] backdrop-blur-sm z-70"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              ></div>
            )}
            <ul
              className={`relative lg:min-w-100 z-80 inline-flex gap-y-7 lg:gap-3 py-10 lg:py-4 px-4 bg-[#000000d8] lg:bg-transparent lg:rounded-3xl h-screen lg:h-auto lg:w-auto rounded-none flex-col w-75 lg:flex-row`}
            >
              <li>
                <Link
                  className={`${
                    pathname === "/" && "font-bold text-white! after:w-full"
                  } ${navItemClassName}`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/pricing" &&
                    "font-bold text-white! after:w-full"
                  } ${navItemClassName}`}
                  href="/pricing"
                >
                  Pricings
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/about-us" &&
                    "font-bold text-white! after:w-full"
                  } ${navItemClassName}`}
                  href="/about-us"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/blog" &&
                    "font-bold text-white! after:w-full"
                  } ${navItemClassName}`}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn glass rounded-xl text-white " type="button">
            Call to action
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
