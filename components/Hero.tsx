import ArrowUpRight from "./ArrowUpRight";
export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        duration-300
      "
    >
      <div className="site-container">
        <div className="flex min-h-[calc(100vh-92px)] flex-col">
          {/* =================================================
              TOP META + STUDIO TAGLINE
          ================================================= */}

          <div
            className="
              border-b
              border-[var(--border)]
              py-5

              lg:grid
              lg:grid-cols-[1fr_auto_1fr]
              lg:items-center
              lg:gap-8
            "
          >
            {/* MOBILE */}

            <div className="flex flex-col items-center text-center lg:hidden">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.27em]
                  text-[var(--muted)]
                "
              >
                Independent Web Studio
              </p>

              <div className="my-4 flex w-full max-w-[310px] items-center gap-3">
                <span className="h-px flex-1 bg-[#FF6B22]/50" />

                <p
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.20em]
                    text-[#FF6B22]
                  "
                >
                  Design • Develop • Deploy
                </p>

                <span className="h-px flex-1 bg-[#FF6B22]/50" />
              </div>

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.27em]
                  text-[var(--muted)]
                "
              >
                Hyderabad • India
              </p>
            </div>

            {/* DESKTOP — LEFT */}

            <p
              className="
                hidden
                text-[10px]
                font-bold
                uppercase
                tracking-[0.27em]
                text-[var(--muted)]
                lg:block
              "
            >
              Independent Web Studio
            </p>

            {/* DESKTOP — CENTER */}

            <div className="hidden items-center justify-center gap-4 lg:flex">
              <span className="h-px w-16 bg-[#FF6B22]/60" />

              <p
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#FF6B22]
                "
              >
                Design • Develop • Deploy
              </p>

              <span className="h-px w-16 bg-[#FF6B22]/60" />
            </div>

            {/* DESKTOP — RIGHT */}

            <p
              className="
                hidden
                text-right
                text-[10px]
                font-bold
                uppercase
                tracking-[0.27em]
                text-[var(--muted)]
                lg:block
              "
            >
              Hyderabad • India
            </p>
          </div>

          {/* =================================================
              MAIN HERO
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-1
              flex-col
              justify-center
              py-10

              sm:py-12

              lg:min-h-[520px]
              lg:py-10
            "
          >
            {/* =================================================
                GIANT TYPOGRAPHY
            ================================================= */}

            <div className="relative mx-auto w-full max-w-[1420px]">
              {/* WEBSITES */}

              <h1
                className="
                  relative
                  z-[1]
                  text-center
                  text-[clamp(4rem,17vw,7rem)]
                  font-medium
                  uppercase
                  leading-[0.78]
                  tracking-[-0.075em]
                  text-[var(--foreground)]

                  sm:text-[clamp(6rem,12vw,10.5rem)]

                  lg:text-[clamp(7.3rem,10.4vw,10.7rem)]
                "
              >
                Websites
              </h1>

              {/* PEOPLE REMEMBER */}

              <p
                className="
                  relative
                  z-[1]
                  mt-4
                  text-center
                  text-[clamp(2.65rem,10.5vw,4.8rem)]
                  font-medium
                  uppercase
                  leading-[0.84]
                  tracking-[-0.065em]
                  text-[#FF6B22]

                  sm:mt-5
                  sm:text-[clamp(4.2rem,8vw,8rem)]

                  lg:mt-6
                  lg:text-[clamp(5rem,7.1vw,7.5rem)]
                "
              >
                People Remember.
              </p>
            </div>

            {/* =================================================
                LOWER CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-20
                mt-10
                grid
                gap-9
                border-t
                border-[var(--border)]
                pt-7

                sm:mt-12
                sm:grid-cols-2
                sm:items-end

                lg:mt-12
                lg:grid-cols-[1fr_1fr]
                lg:gap-16
              "
            >
              {/* LEFT — DESCRIPTION */}

              <div className="max-w-[410px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#FF6B22]">
                  Digital Experiences
                </p>

                <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
                  We design and develop thoughtful digital experiences for
                  businesses that want to look professional, build trust and
                  grow online.
                </p>
              </div>

              {/* RIGHT — ACTIONS */}

              <div
                className="
                  flex
                  items-end
                  justify-between
                  gap-7

                  sm:flex-col
                  sm:items-end
                  sm:justify-end

                  lg:flex-row
                  lg:items-end
                  lg:justify-end
                  lg:gap-9
                "
              >
                {/* EXPLORE */}

                <a
                  href="#work"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                  "
                >
                  <span
                    className="
                      border-b
                      border-[var(--border)]
                      pb-1
                      transition-colors
                      duration-200
                      group-hover:border-[#FF6B22]
                      group-hover:text-[#FF6B22]
                    "
                  >
                    Explore our work
                  </span>

                  <ArrowUpRight size={20} />
                </a>

                {/* START PROJECT */}

                <a
                  href="#contact"
                  aria-label="Start a project"
                  className="
                    group
                    inline-flex
                    h-[100px]
                    w-[100px]
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--foreground)]
                    text-center
                    text-[11px]
                    font-bold
                    leading-[1.35]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#FF6B22]

                    sm:h-[108px]
                    sm:w-[108px]

                    lg:h-[116px]
                    lg:w-[116px]
                    lg:text-[12px]
                  "
                >
                  <span className="block text-[var(--background)] transition-colors duration-300 group-hover:text-[#171717]">
                    Start
                    <br />
                    a project
                  </span>

                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM META
          ================================================= */}

          <div className="border-t border-[var(--border)] py-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
              {/* FOCUS */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium">
                  Design-led digital experiences
                </p>
              </div>

              {/* SERVICES */}

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
                  Services
                </p>

                <p className="mt-2 text-sm font-medium">
                  Design • Development • SEO
                </p>
              </div>

              {/* SCROLL */}

              <div className="pt-1 sm:col-span-2 sm:text-right lg:col-span-1 lg:pt-0">
                <a
                  href="#work"
                  aria-label="View selected work"
                  className="
                    inline-flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-lg
                    transition-all
                    duration-200

                    hover:border-[#FF6B22]
                    hover:bg-[#FF6B22]
                    hover:text-[#171717]
                  "
                >
                  ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}