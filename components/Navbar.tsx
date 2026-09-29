"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowUpRight from "./ArrowUpRight";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("kws-theme");

    const shouldUseDark =
      savedTheme === "dark"
        ? true
        : savedTheme === "light"
          ? false
          : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(shouldUseDark);

    document.documentElement.classList.toggle(
      "dark",
      shouldUseDark
    );

    setThemeReady(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme
    );

    localStorage.setItem(
      "kws-theme",
      nextTheme ? "dark" : "light"
    );
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* MAIN NAVBAR */}

      <header
        className={`
          sticky
          left-0
          right-0
          top-0
          z-50
          w-full
          transition-[background-color,border-color]
          duration-300

          ${
            isScrolled
              ? "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
              : "border-b border-transparent bg-[var(--background)]"
          }
        `}
      >
        <div className="site-container">
          <nav
            className={`
              flex
              h-[92px]
              items-center
              justify-between
              transition-[border-color]
              duration-300

              ${
                isScrolled
                  ? "border-b border-transparent"
                  : "border-b border-[var(--border)]"
              }
            `}
          >
            {/* BRAND */}

            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
              aria-label="Kanna Web Studio home"
            >
              <Image
                src="/images/logo/kanna-logo-premium.png"
                alt="Kanna Web Studio"
                width={64}
                height={64}
                priority
                className="
                  h-[56px]
                  w-[56px]
                  rounded-full
                  object-cover
                  sm:h-[62px]
                  sm:w-[62px]
                "
              />

              <div className="hidden sm:block">
                <p className="text-[13px] font-black tracking-[0.16em] text-[var(--foreground)]">
                  KANNA
                </p>

                <p className="mt-[2px] text-[9px] font-bold tracking-[0.24em] text-[#FF6B22]">
                  WEB STUDIO
                </p>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}

            <div className="hidden items-center gap-9 lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-[13px]
                    font-medium
                    text-[var(--muted)]
                    transition-colors
                    duration-200
                    hover:text-[#FF6B22]
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              {/* THEME TOGGLE */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={isDark ? "Light mode" : "Dark mode"}
                className="
                  group
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  text-[var(--foreground)]
                  transition-all
                  duration-200
                  hover:border-[#FF6B22]
                  hover:bg-[#FF6B22]
                  hover:text-[#171717]
                "
              >
                {themeReady && (
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      text-[19px]
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  >
                    {isDark ? "☀" : "☾"}
                  </span>
                )}
              </button>

              {/* DESKTOP CTA */}

              <a
                href="#contact"
                className="
                  group
                  hidden
                  items-center
                  gap-3
                  rounded-full
                  bg-[#FF6B22]
                  px-6
                  py-3.5
                  text-[13px]
                  font-semibold
                  text-[#171717]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--foreground)]
                  sm:inline-flex
                "
              >
                <span
                  className="
                    transition-colors
                    duration-200
                    group-hover:text-[var(--background)]
                  "
                >
                  Start a Project
                </span>

                <span
                  className="
                    transition-colors
                    duration-200
                    group-hover:text-[var(--background)]
                  "
                >
                  <ArrowUpRight size={17} />
                </span>
              </a>

              {/* MOBILE MENU BUTTON */}

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  transition-colors
                  duration-200
                  hover:border-[#FF6B22]
                  lg:hidden
                "
              >
                <div className="flex w-5 flex-col gap-[5px]">
                  <span className="h-[1.5px] w-full bg-[var(--foreground)]" />
                  <span className="h-[1.5px] w-full bg-[var(--foreground)]" />
                  <span className="h-[1.5px] w-full bg-[var(--foreground)]" />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}

      {menuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            overflow-y-auto
            bg-[var(--background)]/95
            backdrop-blur-md
            lg:hidden
          "
        >
          <div className="site-container flex min-h-screen flex-col">
            {/* MOBILE MENU HEADER */}

            <div className="flex h-[92px] shrink-0 items-center justify-between border-b border-[var(--border)]">
              <a
                href="#home"
                onClick={closeMenu}
                aria-label="Kanna Web Studio home"
              >
                <Image
                  src="/images/logo/kanna-logo-premium.png"
                  alt="Kanna Web Studio"
                  width={52}
                  height={52}
                  className="
                    h-[52px]
                    w-[52px]
                    rounded-full
                    object-cover
                  "
                />
              </a>

              <div className="flex items-center gap-3">
                {/* MOBILE THEME TOGGLE */}

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    isDark
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-[19px]
                    text-[var(--foreground)]
                    transition-colors
                    duration-200
                    hover:border-[#FF6B22]
                    hover:bg-[#FF6B22]
                    hover:text-[#171717]
                  "
                >
                  {themeReady && (isDark ? "☾" : "☀")}
                </button>

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                  "
                >
                  <span className="absolute h-[1.5px] w-5 rotate-45 bg-[var(--foreground)]" />
                  <span className="absolute h-[1.5px] w-5 -rotate-45 bg-[var(--foreground)]" />
                </button>
              </div>
            </div>

            {/* LABEL */}

            <div className="pt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#FF6B22]">
                Navigation
              </p>
            </div>

            {/* LINKS */}

            <nav className="mt-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[var(--border)]
                    py-6
                    text-[clamp(1.45rem,6vw,1.9rem)]
                    font-medium
                    tracking-[-0.035em]
                    text-[var(--foreground)]
                  "
                >
                  <span>{link.label}</span>

                  <span className="text-[#FF6B22]">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA */}

            <div className="mt-8">
              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#FF6B22]
                  px-6
                  py-5
                  text-base
                  font-bold
                  text-[#171717]
                "
              >
                Start a Project
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* BOTTOM */}

            <div className="mt-auto flex items-end justify-between gap-6 py-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                  Kanna Web Studio
                </p>

                <p className="mt-2 text-xs text-[var(--muted)]">
                  Hyderabad • India
                </p>
              </div>

              <p className="text-right text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                Design • Develop • Deploy
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}