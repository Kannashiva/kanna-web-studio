import Reveal from "./Reveal";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Consultation",
    description:
      "We discuss your business, goals and target audience to understand exactly what your website needs.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Planning & Design",
    description:
      "A modern, user-friendly design is created to reflect your brand and provide the best user experience.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description:
      "Your website is built using the latest technologies with responsive design, speed and SEO best practices.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "After testing and optimization, your website goes live with continuous support whenever you need it.",
  },
];

export default function Process() {
  return (
    <Reveal>
      <section
        id="process"
        className="relative overflow-hidden bg-[#050505] py-24 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              OUR PROCESS
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
              From Idea
              <span className="block text-[#D4AF37]">
                To Launch
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Building a professional website should be simple and transparent.
              Here's how we transform your idea into a high-performing digital
              experience.
            </p>

          </div>

          {/* Steps */}

          <div className="relative mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => (

              <div
                key={step.title}
                className="
                relative
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-[#111111]
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#D4AF37]
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]
                "
              >

                {/* Number */}

                <div
                  className="
                  absolute
                  right-6
                  top-6
                  text-6xl
                  font-black
                  text-[#D4AF37]/10
                  transition
                  duration-300
                  group-hover:text-[#D4AF37]/20
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  text-3xl
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-[#D4AF37]
                  group-hover:text-black
                  "
                >
                  {step.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {step.description}
                </p>

                {/* Bottom Line */}

                <div
                  className="
                  mt-8
                  h-1
                  w-16
                  rounded-full
                  bg-[#D4AF37]
                  transition-all
                  duration-500
                  group-hover:w-full
                  "
                />

              </div>

            ))}

          </div>

          {/* Bottom CTA */}

          <div className="mt-20 text-center">

            <p className="text-lg text-gray-400">
              Ready to turn your business into a powerful online brand?
            </p>

            <a
              href="#contact"
              className="
              mt-8
              inline-flex
              items-center
              rounded-xl
              bg-[#D4AF37]
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#E5C158]
              hover:shadow-[0_10px_35px_rgba(212,175,55,0.45)]
              "
            >
              Start Your Project
            </a>

          </div>

        </div>
      </section>
    </Reveal>
  );
}