import Reveal from "./Reveal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const technologies = [
  {
    name: "HTML5",
    label: "Structure",
    color: "text-orange-500",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    label: "Styling",
    color: "text-blue-500",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    label: "Development",
    color: "text-yellow-400",
    icon: <FaJs />,
  },
  {
    name: "TypeScript",
    label: "Type Safety",
    color: "text-blue-400",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    label: "User Interface",
    color: "text-cyan-400",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    label: "Framework",
    color: "text-white",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    label: "Modern Styling",
    color: "text-sky-400",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    label: "Version Control",
    color: "text-orange-600",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    label: "Code Management",
    color: "text-white",
    icon: <FaGithub />,
  },
  {
    name: "Vercel",
    label: "Deployment",
    color: "text-white",
    icon: <SiVercel />,
  },
];

export default function Technologies() {
  return (
    <Reveal>
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#050505] pb-16 pt-1 text-white"
      >
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Left Glow */}
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

          {/* Right Glow */}
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

          {/* Subtle Center Line */}
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

          <div className="text-center">

            {/* Section Badge */}

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

              Technologies
            </span>

            {/* Heading */}

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
              Built With

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
                Modern Technologies
              </span>
            </h2>

            {/* Description */}

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
              Every website is built using modern technologies that deliver
              outstanding performance, security and scalability.
            </p>

          </div>

          {/* ================= TECHNOLOGY GRID ================= */}

          <div
            className="
              mt-14
              grid
              grid-cols-2
              gap-4
              sm:mt-16
              sm:gap-6
              md:grid-cols-3
              lg:mt-20
              lg:grid-cols-5
            "
          >

            {technologies.map((tech) => (

              <div
                key={tech.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#0C0C0C]
                  p-5
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/55
                  hover:bg-[#10100E]
                  hover:shadow-[0_15px_40px_rgba(212,175,55,0.10)]
                  sm:rounded-3xl
                  sm:p-7
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

                {/* Subtle Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/3
                    h-24
                    w-24
                    -translate-x-1/2
                    rounded-full
                    bg-[#D4AF37]/0
                    blur-[45px]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/8
                  "
                />

                {/* ================= ICON ================= */}

                <div
                  className={`
                    relative
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    text-5xl
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:border-[#D4AF37]/20
                    sm:h-[72px]
                    sm:w-[72px]
                    sm:text-6xl
                    ${tech.color}
                  `}
                >
                  {tech.icon}
                </div>

                {/* ================= NAME ================= */}

                <h3
                  className="
                    relative
                    mt-5
                    text-base
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#D4AF37]
                    sm:text-lg
                  "
                >
                  {tech.name}
                </h3>

                {/* Small Description */}

                <p
                  className="
                    relative
                    mt-1.5
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-gray-600
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                    sm:text-xs
                  "
                >
                  {tech.label}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    mx-auto
                    mt-5
                    h-px
                    w-8
                    bg-[#D4AF37]/25
                    transition-all
                    duration-300
                    group-hover:w-14
                    group-hover:bg-[#D4AF37]/60
                  "
                />

              </div>

            ))}

          </div>

          {/* ================= BOTTOM MESSAGE ================= */}

          <div className="mt-14 text-center sm:mt-16 lg:mt-20">

            <div
              className="
                mx-auto
                inline-flex
                max-w-3xl
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-5
                py-4
                sm:px-8
              "
            >
              <p className="text-sm leading-7 text-gray-400 sm:text-base">

                Combining modern technologies with creative design to build

                <span className="font-semibold text-[#D4AF37]">
                  {" "}fast, secure and high-performing websites.
                </span>

              </p>
            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}