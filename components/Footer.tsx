const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
    <footer className="overflow-hidden bg-[#171717] text-[#F3F0E9]">
      <div className="site-container">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-12 border-b border-white/[0.12] py-14 sm:py-16 lg:grid-cols-[1.35fr_0.65fr_0.9fr_0.8fr] lg:gap-12 lg:py-20">
          {/* BRAND */}

          <div>
            <p className="text-[clamp(1.8rem,3vw,3rem)] font-medium tracking-[-0.05em]">
              Kanna
              <span className="text-[#FF6B22]">
                {" "}Web Studio
              </span>
            </p>

            <p className="mt-5 max-w-[360px] text-sm leading-7 text-[#9A9791]">
              We design and develop modern, responsive and
              performance-focused websites for businesses, brands and
              entrepreneurs.
            </p>

            <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.27em] text-[#706E69]">
              Design • Develop • Deploy
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#706E69]">
              Navigate
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    hover:text-[#FF6B22]
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#706E69]">
              Services
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="
                    text-sm
                    text-[#B7B3AD]
                    transition-colors
                    duration-200
                    hover:text-[#FF6B22]
                  "
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#706E69]">
              Connect
            </p>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a
                href="mailto:kannawebstudio@gmail.com"
                className="
                  break-all
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[#FF6B22]
                "
              >
                kannawebstudio@gmail.com
              </a>

              <a
                href="https://wa.me/918143218054?text=Hi%20Kanna%20Web%20Studio%2C%20I%27m%20interested%20in%20building%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[#FF6B22]
                "
              >
                WhatsApp ↗
              </a>

              <a
                href="https://www.instagram.com/kannawebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[#FF6B22]
                "
              >
                Instagram ↗
              </a>

              <p className="pt-2 text-sm text-[#8E8A84]">
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-[#77736D]">
            © {new Date().getFullYear()} Kanna Web Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#"
              className="
                text-[10px]
                text-[#77736D]
                transition-colors
                duration-200
                hover:text-[#F3F0E9]
              "
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          LARGE BRAND SIGN-OFF
      ===================================================== */}

      <div className="site-container overflow-hidden pb-5 pt-5 sm:pb-7">
        <p
          className="
            whitespace-nowrap
            text-center
            text-[clamp(2.05rem,9.6vw,10rem)]
            font-medium
            leading-[0.82]
            tracking-[-0.075em]
            text-white/[0.055]
            sm:text-[clamp(3.4rem,10.4vw,10rem)]
          "
        >
          KANNA WEB STUDIO
        </p>
      </div>
    </footer>
  );
}