import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { FaExternalLinkAlt } from "react-icons/fa";

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

<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

  <span className="text-sm font-semibold text-green-300">
    Successfully Delivered Client Project
  </span>
</div>

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

                  {/* Live Demo Button */}

                  <div className="mt-8 flex items-center gap-4">

                    <Link
  href={project.live}
  target="_blank"
  className="
  inline-flex
  items-center
  gap-3
  rounded-xl
  bg-gradient-to-r
  from-blue-600
  to-cyan-500
  px-7
  py-3
  font-semibold
  text-white
  shadow-lg
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]
  "
>
  <FaExternalLinkAlt />
  Visit Live Website
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