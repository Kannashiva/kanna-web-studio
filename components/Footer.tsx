import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div className="md:col-span-2">

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <Image
                src="/Logo.png"
                alt="Kanna Web Studio"
                width={65}
                height={65}
                className="rounded-full"
              />

              <div className="leading-none">

                <h2
                  className="
                  text-white
                  text-2xl
                  font-extrabold
                  uppercase
                  tracking-[0.35em]
                  "
                >
                  KANNA
                </h2>

                <p
                  className="
                  mt-1
                  text-[12px]
                  uppercase
                  tracking-[0.55em]
                  text-[#D4AF37]
                  "
                >
                  WEB STUDIO
                </p>

              </div>

            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Building premium, responsive and SEO-friendly websites
              that help restaurants, startups and local businesses
              grow their online presence.
            </p>

            <Link
              href="#contact"
              className="
              inline-block
              mt-8
              rounded-xl
              bg-[#D4AF37]
              px-7
              py-3
              font-semibold
              text-black
              hover:bg-[#E5C158]
              transition
              shadow-lg
              "
            >
              Start a Project
            </Link>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Navigation
            </h3>

            <div className="mt-6 space-y-4">

              <Link
                href="#home"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                Home
              </Link>

              <Link
                href="#services"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                Services
              </Link>

              <Link
                href="#projects"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                Projects
              </Link>

              <Link
                href="#pricing"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                Pricing
              </Link>

              <Link
                href="#about"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                About
              </Link>

              <Link
                href="#contact"
                className="block text-slate-400 hover:text-[#D4AF37] transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Services
            </h3>

            <div className="mt-6 space-y-4 text-slate-400">

              <p className="hover:text-[#D4AF37] transition cursor-default">
                Business Websites
              </p>

              <p className="hover:text-[#D4AF37] transition cursor-default">
                Restaurant Websites
              </p>

              <p className="hover:text-[#D4AF37] transition cursor-default">
                Landing Pages
              </p>

              <p className="hover:text-[#D4AF37] transition cursor-default">
                Website Maintenance
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
          mt-14
          border-t
          border-slate-800
          pt-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} KANNA WEB STUDIO. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-2xl">

            <a
              href="https://wa.me/918143218054"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-slate-400
              hover:text-[#D4AF37]
              hover:scale-110
              transition
              "
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/kannawebstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-slate-400
              hover:text-[#D4AF37]
              hover:scale-110
              transition
              "
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/Kannashiva"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-slate-400
              hover:text-[#D4AF37]
              hover:scale-110
              transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-slate-400
              hover:text-[#D4AF37]
              hover:scale-110
              transition
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}