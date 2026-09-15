"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Process", link: "#process" },
    { name: "Pricing", link: "#pricing" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4">

        {/* ================= MAIN NAVBAR ================= */}

        <div
          className="
            relative
            flex
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#080808]/90
            px-4
            py-3
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            sm:px-6
            sm:py-4
          "
        >

          {/* Top Gold Highlight */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-1/2
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]/70
              to-transparent
            "
          />

          {/* Subtle Navbar Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -left-10
              -top-20
              h-32
              w-32
              rounded-full
              bg-[#D4AF37]/10
              blur-[60px]
            "
          />

          {/* ================= LOGO ================= */}

          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="
              group
              relative
              z-10
              flex
              items-center
              gap-3
              sm:gap-4
            "
          >
            {/* Logo Container */}

            <div
              className="
                relative
                flex
                h-[52px]
                w-[52px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/25
                bg-black
                transition-all
                duration-300
                group-hover:border-[#D4AF37]/60
                group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                sm:h-16
                sm:w-16
              "
            >
              <Image
                src="/Logo.png"
                alt="Kanna Web Studio"
                width={64}
                height={64}
                priority
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* Brand Text */}

            <div className="leading-none">

              <p
                className="
                  text-lg
                  font-black
                  tracking-[0.25em]
                  text-white
                  sm:text-xl
                  md:text-2xl
                  md:tracking-[0.35em]
                "
              >
                KANNA
              </p>

              <p
                className="
                  mt-1.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.38em]
                  text-[#D4AF37]
                  sm:mt-2
                  sm:text-[11px]
                  sm:tracking-[0.5em]
                "
              >
                WEB STUDIO
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <div className="relative z-10 hidden items-center gap-7 lg:flex xl:gap-8">

            {menuItems.map((item) => (

              <Link
                key={item.name}
                href={item.link}
                className="
                  group
                  relative
                  py-2
                  text-[14px]
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-white
                  xl:text-[15px]
                "
              >
                {item.name}

                {/* Gold Hover Line */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </Link>

            ))}

            {/* ================= CTA ================= */}

            <Link
              href="#contact"
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                bg-[#D4AF37]
                px-6
                py-3
                font-semibold
                text-black
                shadow-[0_8px_25px_rgba(212,175,55,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E6C45A]
                hover:shadow-[0_10px_30px_rgba(212,175,55,0.30)]
                xl:px-7
              "
            >

              {/* Shine */}

              <span
                className="
                  absolute
                  inset-y-0
                  -left-16
                  w-10
                  -skew-x-12
                  bg-white/30
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Let's Talk
              </span>

              <FaArrowRight
                className="
                  relative
                  z-10
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="
              relative
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-[#D4AF37]/5
              lg:hidden
            "
          >

            {/* Animated Hamburger */}

            <div className="relative h-5 w-6">

              <span
                className={`
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-6
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  ${
                    open
                      ? "top-[9px] rotate-45 bg-[#D4AF37]"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-[9px]
                  h-[2px]
                  w-6
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  ${
                    open
                      ? "scale-x-0 opacity-0"
                      : "scale-x-100 opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-6
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  ${
                    open
                      ? "bottom-[9px] -rotate-45 bg-[#D4AF37]"
                      : ""
                  }
                `}
              />

            </div>

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-out
            lg:hidden
            ${
              open
                ? "mt-3 max-h-[650px] translate-y-0 opacity-100"
                : "mt-0 max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#080808]/95
              p-4
              shadow-[0_20px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            "
          >

            {/* Gold Top Highlight */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-2/3
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/60
                to-transparent
              "
            />

            {/* Links */}

            <div className="flex flex-col">

              {menuItems.map((item) => (

                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-base
                    font-medium
                    text-slate-300
                    transition-all
                    duration-200
                    hover:bg-[#D4AF37]/5
                    hover:text-[#D4AF37]
                  "
                >
                  <span>
  {item.name}
</span>

                  {/* Small Arrow */}

                  <FaArrowRight
                    className="
                      text-xs
                      text-slate-600
                      transition-all
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-[#D4AF37]
                    "
                  />

                </Link>

              ))}

              {/* Mobile CTA */}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  group
                  relative
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-[#D4AF37]
                  py-4
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#E6C45A]
                "
              >
                <span>
                  Start Your Project
                </span>

                <FaArrowRight
                  className="
                    text-sm
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>
        </div>

      </nav>
    </header>
  );
}