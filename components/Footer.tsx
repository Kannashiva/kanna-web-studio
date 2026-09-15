import Image from "next/image";
import Link from "next/link";

import {
  FaWhatsapp,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Business Websites",
  "Restaurant Websites",
  "Product Showcase",
  "Landing Pages",
  "Portfolio Websites",
  "Website Maintenance",
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#D4AF37]/15
        bg-[#050505]
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-[#D4AF37]/8
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#D4AF37]/8
            blur-[120px]
          "
        />
      </div>

      {/* ================= FINAL CTA ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-[#0C0C0C]
            px-6
            py-10
            sm:px-10
            lg:px-12
            lg:py-12
          "
        >
          {/* CTA Accent */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]
              to-transparent
            "
          />

          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4AF37]
                "
              >
                Let&apos;s Build Together
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Ready to Take Your Business
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-[#D4AF37]
                    via-[#F3DA7A]
                    to-[#D4AF37]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Online?
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                "
              >
                Let&apos;s create a professional website that represents your
                business and helps customers discover you online.
              </p>
            </div>

            {/* CTA Button */}

            <Link
              href="#contact"
              className="
                group
                relative
                inline-flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-[#D4AF37]
                px-7
                py-4
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-[#E5C158]
                hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]
                sm:w-fit
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
                Start Your Project
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
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-8
          pt-16
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.7fr_0.9fr_1fr]
            lg:gap-10
          "
        >
          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="#home"
              aria-label="Kanna Web Studio Home"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/Logo.png"
                alt="Kanna Web Studio logo"
                width={68}
                height={68}
                className="
                  rounded-full
                  border
                  border-[#D4AF37]/20
                "
              />

              <div>
                <p
                  className="
                    text-xl
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-white
                    sm:text-2xl
                  "
                >
                  KANNA
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.38em]
                    text-[#D4AF37]
                    sm:text-xs
                  "
                >
                  WEB STUDIO
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-gray-500
              "
            >
              Modern website design and development for businesses,
              restaurants, startups and brands that want a professional
              online presence.
            </p>

            {/* Brand Tagline */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-600
              "
            >
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              Design
              <span className="text-[#D4AF37]/50">•</span>
              Develop
              <span className="text-[#D4AF37]/50">•</span>
              Deploy
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Navigation
            </h3>

            <div className="mt-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  <span
                    className="
                      h-px
                      w-0
                      bg-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Services
            </h3>

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <Link
                  key={service}
                  href="#services"
                  className="
                    block
                    w-fit
                    text-sm
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
              "
            >
              Contact
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+918143218054"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-[#D4AF37]
                "
              >
                <FaPhoneAlt
                  className="
                    mt-1
                    shrink-0
                    text-xs
                    text-[#D4AF37]
                  "
                />

                +91 8143218054
              </a>

              <a
                href="mailto:kannawebstudio@gmail.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  break-all
                  text-sm
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-[#D4AF37]
                "
              >
                <FaEnvelope
                  className="
                    mt-1
                    shrink-0
                    text-xs
                    text-[#D4AF37]
                  "
                />

                kannawebstudio@gmail.com
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-gray-500
                "
              >
                <FaMapMarkerAlt
                  className="
                    mt-1
                    shrink-0
                    text-xs
                    text-[#D4AF37]
                  "
                />

                Hyderabad, India
              </div>
            </div>

            {/* Socials */}

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://wa.me/918143218054"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Kanna Web Studio on WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#0C0C0C]
                  text-base
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:text-[#D4AF37]
                "
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/kannawebstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Kanna Web Studio on Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-[#0C0C0C]
                  text-base
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:text-[#D4AF37]
                "
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}

        <div
          className="
            my-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        />

        {/* ================= BOTTOM ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-xs leading-6 text-gray-600 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#D4AF37]">
              Kanna Web Studio
            </span>
            . All Rights Reserved.
          </p>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-gray-700
            "
          >
            Design • Develop • Deploy
          </p>
        </div>
      </div>
    </footer>
  );
}