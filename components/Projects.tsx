import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    title: "Na Kirraak Adda",
    category: "Restaurant Website",
    description:
      "A modern restaurant website featuring menu, gallery, customer reviews, Google Maps integration and WhatsApp ordering for a seamless customer experience.",
    image: "/projects/na-kirraak-adda.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
    ],
    live: "https://na-kirraak-adda.vercel.app",
    github: "https://github.com/Kannashiva/Na-Kirraak-Adda",
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="bg-slate-950 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
              Portfolio
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Every project is crafted with performance,
              modern design and user experience in mind.
            </p>

          </div>

          {/* Projects */}

          <div className="mt-16">

            {projects.map((project) => (

              <div
                key={project.title}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                transition-all
                duration-500
                hover:border-blue-500
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                "
              >

                {/* Image */}

                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    "
                  />

                  {/* Category */}

                  <div className="absolute top-6 left-6">

                    <span
                      className="
                      rounded-full
                      bg-blue-600
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                        rounded-full
                        border
                        border-blue-500/30
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        text-blue-300
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 flex flex-wrap gap-4">

                    <Link
                      href={project.live}
                      target="_blank"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-700
                      hover:scale-105
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-700
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:border-blue-500
                      hover:bg-slate-800
                      hover:scale-105
                      "
                    >
                      <FaGithub />
                      GitHub
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}