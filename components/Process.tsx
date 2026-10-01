import ArrowUpRight from "./ArrowUpRight";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your business, goals, audience and what you want the website to achieve.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We define the structure, visual direction and user experience before moving into development.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "The approved direction is transformed into a responsive, fast and carefully built website.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After final checks, we launch your website and provide support to keep everything running smoothly.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="
        bg-[var(--background-alt)]
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
            HEADER
        ===================================================== */}

        <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              How We Work
            </p>

            <p className="mt-5 max-w-[330px] text-sm leading-7 text-[var(--muted)]">
              A simple and transparent process that takes your project from
              the first conversation to a finished website.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em] lg:whitespace-nowrap">
            From idea to{" "}
            <span className="text-[#FF6B22]">
              launch.
            </span>
          </h2>
        </div>

        {/* =====================================================
            PROCESS STEPS
        ===================================================== */}

        <div>
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="
                group
                grid
                gap-6
                border-b
                border-[var(--border)]
                py-9
                sm:py-11
                lg:grid-cols-[0.22fr_0.78fr_1fr]
                lg:items-center
                lg:gap-10
                lg:py-14
              "
            >
              {/* NUMBER */}

              <p
                className="
                  text-[clamp(2.8rem,5vw,5.5rem)]
                  font-medium
                  leading-none
                  tracking-[-0.06em]
                  text-[var(--foreground)]
                  opacity-[0.16]
                  transition-all
                  duration-300
                  group-hover:text-[#FF6B22]
                  group-hover:opacity-100
                "
              >
                {step.number}
              </p>

              {/* TITLE */}

              <h3
                className="
                  text-[clamp(2rem,3.5vw,3.8rem)]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.05em]
                "
              >
                {step.title}
              </h3>

              {/* DESCRIPTION */}

              <div className="flex items-start justify-between gap-8 lg:items-center">
                <p className="max-w-[520px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] sm:leading-8">
                  {step.description}
                </p>

                <div
                  className="
                    hidden
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-lg
                    text-[var(--foreground)]
                    transition-all
                    duration-300
                    group-hover:border-[#FF6B22]
                    group-hover:bg-[#FF6B22]
                    group-hover:text-[#171717]
                    lg:flex
                  "
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="grid gap-8 pt-10 sm:pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
              Have an idea?
            </p>

            <p className="mt-4 max-w-[620px] text-[clamp(1.7rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]">
              Let&apos;s turn it into something
              <span className="text-[#FF6B22]">
                {" "}worth experiencing.
              </span>
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              justify-center
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
            <span className="transition-colors duration-200 group-hover:text-[var(--background-alt)]">
              Start a project
            </span>

            <span className="transition-colors duration-200 group-hover:text-[var(--background-alt)]">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}