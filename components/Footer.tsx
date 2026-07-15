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
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#050505] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}

          <div className="md:col-span-2">

            <Link
              href="/"
              className="flex items-center gap-5"
            >

              <Image
                src="/Logo.png"
                alt="Kanna Web Studio"
                width={72}
                height={72}
                className="rounded-full shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              />

              <div>

                <h2
                  className="
                  text-3xl
                  font-black
                  uppercase
                  tracking-[0.35em]
                  text-white
                  "
                >
                  KANNA
                </h2>

                <p
                  className="
                  mt-2
                  uppercase
                  tracking-[0.55em]
                  text-[#D4AF37]
                  text-sm
                  font-semibold
                  "
                >
                  WEB STUDIO
                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-lg leading-8 text-gray-400">
              We build premium, responsive and SEO-optimized websites that help
              restaurants, startups and local businesses establish a powerful
              online presence and convert visitors into customers.
            </p>

            <Link
              href="#contact"
              className="
              mt-10
              inline-flex
              items-center
              rounded-full
              bg-[#D4AF37]
              px-8
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#E6C65A]
              shadow-[0_10px_35px_rgba(212,175,55,0.30)]
              "
            >
              🚀 Start Your Project
            </Link>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Navigation
            </h3>

            <div className="mt-8 space-y-4">

              {[
                "Home",
                "Services",
                "Projects",
                "Process",
                "Pricing",
                "About",
                "Contact",
              ].map((item) => (

                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                  block
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-[#D4AF37]
                  hover:translate-x-2
                  "
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Services
            </h3>

            <div className="mt-8 space-y-4">

              {[
                "Business Websites",
                "Restaurant Websites",
                "Landing Pages",
                "Portfolio Websites",
                "Website Maintenance",
              ].map((service) => (

                <p
                  key={service}
                  className="
                  cursor-default
                  text-gray-400
                  transition-all
                  duration-300
                  hover:text-[#D4AF37]
                  hover:translate-x-2
                  "
                >
                  {service}
                </p>

              ))}

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <p className="text-sm tracking-wide text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#D4AF37]">
              KANNA WEB STUDIO
            </span>
            . All Rights Reserved.
          </p>

          {/* Social Icons */}

          <div className="flex items-center gap-5">

            {[
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/918143218054",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/kannawebstudio",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/Kannashiva",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/",
              },
            ].map((social, index) => (

              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/20
                bg-white/[0.03]
                text-xl
                text-gray-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
                "
              >
                {social.icon}
              </a>

            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}