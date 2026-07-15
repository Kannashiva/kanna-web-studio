import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

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
              PORTFOLIO
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
              Featured
              <span className="block text-[#D4AF37]">
                Client Project
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Every project is carefully designed with performance,
              premium aesthetics and user experience in mind to help
              businesses grow online.
            </p>

          </div>

          {/* Project Card */}

          <div className="mt-20">

            {projects.map((project) => (

              <div
                key={project.title}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-[#111111]
                transition-all
                duration-500
                hover:border-[#D4AF37]
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]
                "
              >

                {/* Image */}

                <div className="relative h-96 overflow-hidden">

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

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Category */}

                  <div className="absolute top-6 left-6">

                    <span
                      className="
                      rounded-full
                      border
                      border-[#D4AF37]
                      bg-black/70
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                      backdrop-blur-md
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-10">

                  <h3 className="text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-4xl leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* Delivered Badge */}

                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3">

                    <FaCheckCircle className="text-green-400" />

                    <span className="font-semibold text-green-300">
                      Successfully Delivered Client Project
                    </span>

                  </div>

                  {/* Tech Stack */}

                  <div className="mt-8 flex flex-wrap gap-4">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                        rounded-full
                        border
                        border-[#D4AF37]/30
                        bg-[#D4AF37]/10
                        px-5
                        py-2
                        text-sm
                        font-medium
                        text-[#D4AF37]
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Button */}

                  <div className="mt-10">

                    <Link
                      href={project.live}
                      target="_blank"
                      className="
                      inline-flex
                      items-center
                      gap-3
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