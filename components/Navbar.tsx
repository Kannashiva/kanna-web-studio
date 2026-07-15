"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-slate-950/70
            backdrop-blur-2xl
            px-6
            py-4
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/Logo.png"
              alt="Kanna Web Studio"
              width={64}
              height={64}
              priority
              className="rounded-full"
            />

            <div className="leading-none">
              <h1 className="text-xl md:text-2xl font-black tracking-[0.35em] text-white">
                KANNA
              </h1>

              <p className="mt-2 text-[11px] tracking-[0.55em] uppercase text-[#D4AF37]">
                WEB STUDIO
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:text-white
                  group
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

            {/* CTA */}

            <Link
              href="#contact"
              className="
                rounded-xl
                bg-[#D4AF37]
                px-7
                py-3
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#E6C45A]
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
              "
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              text-white
              text-3xl
              transition
            "
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              open
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-950/90
              backdrop-blur-2xl
              p-6
              shadow-xl
            "
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                    text-slate-300
                    text-lg
                    font-medium
                    transition
                    hover:text-[#D4AF37]
                  "
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  mt-2
                  rounded-xl
                  bg-[#D4AF37]
                  py-4
                  text-center
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#E6C45A]
                "
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}