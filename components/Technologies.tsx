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
    color: "text-orange-500",
    icon: <FaHtml5 className="text-6xl" />,
  },
  {
    name: "CSS3",
    color: "text-blue-500",
    icon: <FaCss3Alt className="text-6xl" />,
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    icon: <FaJs className="text-6xl" />,
  },
  {
    name: "TypeScript",
    color: "text-blue-400",
    icon: <SiTypescript className="text-6xl" />,
  },
  {
    name: "React",
    color: "text-cyan-400",
    icon: <FaReact className="text-6xl" />,
  },
  {
    name: "Next.js",
    color: "text-white",
    icon: <SiNextdotjs className="text-6xl" />,
  },
  {
    name: "Tailwind CSS",
    color: "text-sky-400",
    icon: <SiTailwindcss className="text-6xl" />,
  },
  {
    name: "Git",
    color: "text-orange-600",
    icon: <FaGitAlt className="text-6xl" />,
  },
  {
    name: "GitHub",
    color: "text-white",
    icon: <FaGithub className="text-6xl" />,
  },
  {
    name: "Vercel",
    color: "text-white",
    icon: <SiVercel className="text-6xl" />,
  },
];

export default function Technologies() {
  return (
    <Reveal>
      <section
        id="technologies"
        className="relative overflow-hidden bg-[#050505] py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              TECHNOLOGIES
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-black">
              Built With
              <span className="block text-[#D4AF37]">
                Modern Technologies
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
              Every website is built using modern technologies that deliver
              outstanding performance, security and scalability.
            </p>

          </div>

          {/* Technology Grid */}

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

            {technologies.map((tech) => (

              <div
                key={tech.name}
                className="
                group
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#D4AF37]
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]
                "
              >

                {/* Icon */}

                <div
                  className={`
                  flex
                  justify-center
                  transition-all
                  duration-500
                  group-hover:scale-125
                  group-hover:rotate-6
                  ${tech.color}
                  `}
                >
                  {tech.icon}
                </div>

                {/* Divider */}

                <div className="mx-auto mt-6 h-px w-14 bg-[#D4AF37]/40 transition-all duration-300 group-hover:w-20"></div>

                {/* Name */}

                <h3 className="mt-6 text-lg font-bold text-white">
                  {tech.name}
                </h3>

              </div>

            ))}

          </div>

          {/* Bottom Text */}

          <div className="mt-20 text-center">

            <p className="text-gray-400 text-lg">
              Combining modern technologies with creative design to build
              <span className="font-semibold text-[#D4AF37]">
                {" "}fast, secure and high-performing websites.
              </span>
            </p>

          </div>

        </div>
      </section>
    </Reveal>
  );
}