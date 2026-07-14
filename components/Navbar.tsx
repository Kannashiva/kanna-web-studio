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
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/90
      backdrop-blur-xl
      border-b
      border-slate-800
      shadow-lg
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Kanna Web Studio"
              width={58}
              height={58}
              priority
              className="rounded-full"
            />

            <div className="leading-none">
              <h1
                className="
                text-white
                text-xl
                md:text-2xl
                font-extrabold
                uppercase
                tracking-[0.35em]
                "
              >
                KANNA
              </h1>

              <p
                className="
                mt-1
                text-[11px]
                uppercase
                tracking-[0.55em]
                text-[#D4AF37]
                "
              >
                WEB STUDIO
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="
                relative
                text-slate-300
                font-medium
                hover:text-[#D4AF37]
                transition-all
                duration-300
                group
                "
              >
                {item.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-0.5
                  w-0
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
              px-6
              py-3
              font-semibold
              text-black
              hover:bg-[#E5C158]
              transition
              shadow-lg
              "
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-white"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div
            className="
            md:hidden
            mt-5
            rounded-2xl
            bg-slate-900
            border
            border-slate-800
            p-6
            "
          >
            <div className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                  text-slate-300
                  hover:text-[#D4AF37]
                  transition
                  "
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                mt-3
                text-center
                rounded-xl
                bg-[#D4AF37]
                py-3
                text-black
                font-semibold
                hover:bg-[#E5C158]
                transition
                "
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}