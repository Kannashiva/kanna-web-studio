import Image from "next/image";
import ArrowUpRight from "./ArrowUpRight";

const strengths = [
  "Responsive Websites",
  "Modern UI / UX Design",
  "Performance Focused",
  "Business-Focused Solutions",
];

export default function Founder() {
  return (
    <section
      id="about"
      className="
        bg-[var(--background)]
        py-16
        text-[var(--foreground)]
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
      "
    >
      <div className="site-container">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              Meet the Founder
            </p>

            <p className="mt-5 max-w-[330px] text-sm leading-7 text-[var(--muted)]">
              The person behind the design, development and digital
              experiences at Kanna Web Studio.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Building with
            <br />
            purpose &{" "}
            <span className="text-[#FF6B22]">
              passion.
            </span>
          </h2>
        </div>

        {/* =====================================================
            FOUNDER CONTENT
        ===================================================== */}

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 lg:py-20">
          {/* LEFT — CONTENT */}

          <div className="flex flex-col">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#FF6B22]">
                Hello, I&apos;m Shiva
              </p>

              <h3 className="mt-6 max-w-[720px] text-[clamp(2.5rem,4.6vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
                I turn ideas into{" "}
                <span className="text-[#FF6B22]">
                  digital experiences
                </span>{" "}
                that help businesses stand out.
              </h3>

              <div className="mt-9 max-w-[620px] space-y-5 text-[16px] leading-8 text-[var(--muted)]">
                <p>
                  I&apos;m the founder and web developer behind Kanna Web
                  Studio, focused on creating modern, responsive and
                  performance-conscious websites for businesses and brands.
                </p>

                <p>
                  My approach combines thoughtful design with practical
                  development — keeping every website visually strong,
                  easy to use and focused on the goals of the business.
                </p>
              </div>
            </div>

            {/* MOBILE PORTRAIT */}

            <div className="mt-10 lg:hidden">
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  bg-[var(--background-alt)]
                  transition-[border-radius,background-color]
                  duration-500
                  ease-out
                  hover:rounded-[42px]
                "
              >
                <Image
                  src="/images/founder/shiva.jpeg"
                  alt="Shiva — Founder of Kanna Web Studio"
                  width={900}
                  height={1200}
                  className="
                    h-auto
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.025]
                  "
                  sizes="100vw"
                />

                <div className="absolute bottom-0 left-0 bg-[#FF6B22] px-5 py-4 text-[#171717]">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em]">
                    Founder • Web Developer
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--muted)]">
                  Hyderabad • India
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--muted)]">
                  Kanna Web Studio
                </p>
              </div>
            </div>

            {/* STRENGTHS */}

            <div className="mt-12 border-t border-[var(--border)] lg:mt-16">
              {strengths.map((strength, index) => (
                <div
                  key={strength}
                  className="flex items-center justify-between gap-6 border-b border-[var(--border)] py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#FF6B22]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[16px] font-medium sm:text-lg">
                      {strength}
                    </p>
                  </div>

                  <span className="text-[#FF6B22]">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#FF6B22]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-[#171717]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--foreground)]
                "
              >
                <span className="transition-colors duration-200 group-hover:text-[var(--background)]">
                  Work With Me
                </span>

                <span className="transition-colors duration-200 group-hover:text-[var(--background)]">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <a
                href="https://www.instagram.com/_shiva_kanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[var(--muted)]
                  transition-colors
                  duration-200
                  hover:text-[#FF6B22]
                "
              >
                Instagram
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT — DESKTOP PORTRAIT */}

          <div className="hidden lg:block">
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                bg-[var(--background-alt)]
                transition-[border-radius,background-color]
                duration-500
                ease-out
                hover:rounded-[42px]
              "
            >
              <Image
                src="/images/founder/shiva.jpeg"
                alt="Shiva — Founder of Kanna Web Studio"
                width={900}
                height={1200}
                className="
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
                sizes="42vw"
              />

              <div className="absolute bottom-0 left-0 bg-[#FF6B22] px-6 py-4 text-[#171717]">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em]">
                  Founder • Web Developer
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--muted)]">
                Hyderabad • India
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[var(--muted)]">
                Kanna Web Studio
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            Design • Develop • Deploy
          </p>

          <p className="text-sm text-[var(--muted)]">
            Every project starts with an idea worth building.
          </p>
        </div>
      </div>
    </section>
  );
}