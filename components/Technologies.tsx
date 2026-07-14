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
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-5xl text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-5xl text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-5xl text-white" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-sky-400" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-5xl text-orange-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-white" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-5xl text-white" />,
  },
];

export default function Technologies() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Technologies
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Built with Modern Technologies
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
            I use the latest web technologies to build fast, secure and
            responsive websites that deliver excellent user experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-center transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              <h3 className="mt-5 text-white font-semibold">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}