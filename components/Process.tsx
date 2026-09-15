import Reveal from "./Reveal";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Consultation",
    description:
      "We understand your business, goals, audience and website requirements before starting the project.",
    highlights: ["Business Goals", "Requirements"],
  },
  {
    icon: <FaPencilRuler />,
    title: "Planning & Design",
    description:
      "We plan the website structure and create a modern design that reflects your brand and user experience.",
    highlights: ["Page Structure", "UI Design"],
  },
  {
    icon: <FaCode />,
    title: "Development",
    description:
      "We turn the approved design into a responsive, fast and SEO-friendly website using modern technologies.",
    highlights: ["Development", "Optimization"],
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "After final testing and approval, we deploy your website and provide support to keep everything running smoothly.",
    highlights: ["Final Testing", "Deployment"],
  },
];

export default function Process() {
  return (
    <Reveal>

      <section
        id="process"
        className="
          relative
          overflow-hidden
          bg-[#050505]
          pb-16
          pt-1
          text-white
        "
      >

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div
            className="
              absolute
              -left-40
              top-20
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

          {/* Top Accent */}

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
              via-[#D4AF37]/20
              to-transparent
            "
          />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* ================= HEADING ================= */}

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/25
                bg-[#D4AF37]/8
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
                sm:text-sm
              "
            >

              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              Our Process

            </span>

            <h2
              className="
                mt-7
                text-4xl
                font-black
                leading-tight
                tracking-tight
                sm:text-5xl
                md:text-6xl
              "
            >
              From Your Idea

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
                To Your Website
              </span>

            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              A simple and transparent process that takes your business from
              the first conversation to a professionally launched website.
            </p>

          </div>

          {/* ================= PROCESS ================= */}

          <div
            className="
              relative
              mt-14
              grid
              gap-5
              sm:mt-16
              md:grid-cols-2
              md:gap-6
              lg:mt-20
              lg:grid-cols-4
            "
          >

            {/* Desktop Connecting Line */}

            <div
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-10
                hidden
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/30
                to-transparent
                lg:block
              "
            />

            {steps.map((step, index) => (

              <div
                key={step.title}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#0C0C0C]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/50
                  hover:bg-[#10100E]
                  hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
                  sm:p-8
                  lg:p-7
                "
              >

                {/* Top Gold Highlight */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />

                {/* ================= STEP HEADER ================= */}

                <div className="relative flex items-center justify-between">

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#D4AF37]/25
                      bg-[#D4AF37]/10
                      text-2xl
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-[#D4AF37]/60
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-9
                      items-center
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/[0.06]
                      px-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#D4AF37]
                    "
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    relative
                    mt-7
                    text-2xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#D4AF37]
                  "
                >
                  {step.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    relative
                    mt-4
                    leading-7
                    text-gray-400
                  "
                >
                  {step.description}
                </p>

                {/* Divider */}

                <div
                  className="
                    my-6
                    h-px
                    bg-gradient-to-r
                    from-[#D4AF37]/20
                    via-white/[0.05]
                    to-transparent
                  "
                />

                {/* ================= HIGHLIGHTS ================= */}

                <div className="mt-auto space-y-3">

                  {step.highlights.map((highlight) => (

                    <div
                      key={highlight}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-300
                      "
                    >

                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#D4AF37]/10
                          text-[8px]
                          text-[#D4AF37]
                        "
                      >
                        <FaCheck />
                      </span>

                      {highlight}

                    </div>

                  ))}

                </div>

                {/* ================= BOTTOM STEP LINE ================= */}

                <div className="mt-7 flex items-center gap-3">

                  <div
                    className="
                      h-px
                      flex-1
                      bg-[#D4AF37]/15
                      transition-colors
                      duration-300
                      group-hover:bg-[#D4AF37]/40
                    "
                  />

                  {index < steps.length - 1 ? (

                    <FaArrowRight
                      className="
                        text-xs
                        text-[#D4AF37]/40
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#D4AF37]
                      "
                    />

                  ) : (

                    <FaRocket
                      className="
                        text-xs
                        text-[#D4AF37]/40
                        transition-colors
                        duration-300
                        group-hover:text-[#D4AF37]
                      "
                    />

                  )}

                </div>

              </div>

            ))}

          </div>

          {/* ================= CTA ================= */}

          <div className="mt-14 text-center sm:mt-16">

            <p className="text-sm text-gray-400 sm:text-base">
              Have an idea for your business?
            </p>

            <a
              href="#contact"
              className="
                group
                relative
                mt-5
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-[#D4AF37]
                px-7
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#E5C158]
                hover:shadow-[0_10px_30px_rgba(212,175,55,0.20)]
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

            </a>

          </div>

        </div>

      </section>

    </Reveal>
  );
}