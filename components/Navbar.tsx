"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const menuItems = [
    {
      name: "Technologies",
      link: "#technologies",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Process",
      link: "#process",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];


  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

      <nav className="max-w-7xl mx-auto px-6 py-4">


        <div className="flex items-center justify-between">


          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold text-gray-900"
          >
            Kanna Web Studio
          </Link>



          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

            {menuItems.map((item)=>(
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}

          </div>



          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? "✕" : "☰"}
          </button>


        </div>



        {/* Mobile Menu */}

        {open && (

          <div className="md:hidden mt-5 rounded-xl bg-white border border-gray-200 shadow-lg p-5">


            <div className="flex flex-col gap-4 text-gray-700 font-medium">


              {menuItems.map((item)=>(

                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>

              ))}


            </div>


          </div>

        )}


      </nav>

    </header>
  );
}