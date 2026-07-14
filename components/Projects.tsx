import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";

const projects = [
  {
    title: "Na Kirraak Adda",
    category: "Restaurant Website",
    description:
      "A modern restaurant website featuring menu, gallery, customer reviews, Google Maps and WhatsApp integration.",
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

        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Here are some of the websites I have designed and developed using modern web technologies.
          </p>
        </div>

        <div className="mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden hover:border-blue-500 transition"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 w-full">
  <Image
    src="/projects/na-kirraak-adda.png"
    alt="Na Kirraak Adda Website"
    fill
    className="object-cover"
  />
</div>

              <div className="p-8">
                <span className="text-blue-400 text-sm uppercase">
                  {project.category}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-8 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border border-slate-700 px-6 py-3 text-white hover:border-blue-500 transition"
                  >
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