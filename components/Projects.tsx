import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaArrowRight,
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
  },

  {
    title: "SwaSra Collections",
    category: "Saree Showcase Website",
    description:
      "A modern and responsive saree showcase website featuring product collections, category filters, search, colour variants and direct WhatsApp ordering for a seamless shopping experience.",
    image: "/projects/swasra-collections.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],
    live: "https://swa-sra-collections.vercel.app",
  },
];

export default function Projects() {
  return (
    <Reveal>

      <section
        id="projects"
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

              Portfolio

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
              Featured

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
                Client Projects
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
              Explore some of our recently delivered websites, crafted with
              modern design, responsive experiences and business-focused
              functionality.
            </p>

          </div>

          {/* ================= PROJECT GRID ================= */}

          <div
            className="
              mt-14
              grid
              grid-cols-1
              gap-6
              sm:mt-16
              lg:mt-20
              lg:grid-cols-2
              lg:gap-8
            "
          >

            {projects.map((project) => (

              <article
                key={project.title}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-[#0C0C0C]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/50
                  hover:shadow-[0_20px_50px_rgba(212,175,55,0.10)]
                "
              >

                {/* ================= IMAGE ================= */}

                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                    bg-[#111111]
                    sm:h-72
                    md:h-80
                  "
                >

                  <Image
                    src={project.image}
                    alt={`${project.title} website project`}
                    fill
                    sizes="
                      (max-width: 1024px) 100vw,
                      50vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* Image Gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0C0C0C]
                      via-transparent
                      to-black/10
                    "
                  />

                  {/* Category */}

                  <div className="absolute left-4 top-4 sm:left-6 sm:top-6">

                    <span
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-[#090909]/90
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-[#D4AF37]
                        sm:px-5
                        sm:text-sm
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                  {/* Live Project Badge */}

                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-[#090909]/90
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-gray-300
                        sm:px-4
                      "
                    >

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-green-400
                        "
                      />

                      Live

                    </span>

                  </div>

                  {/* Gold Bottom Highlight */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#D4AF37]
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:w-3/4
                    "
                  />

                </div>

                {/* ================= PROJECT CONTENT ================= */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-6
                    sm:p-8
                  "
                >

                  {/* Delivered */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-green-400
                    "
                  >

                    <FaCheckCircle />

                    Project Successfully Delivered

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-bold
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#D4AF37]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      leading-7
                      text-gray-400
                    "
                  >
                    {project.description}
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

                  {/* Tech Label */}

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-gray-600
                    "
                  >
                    Technologies Used
                  </p>

                  {/* Tech Stack */}

                  <div className="mt-3 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-[#D4AF37]/20
                          bg-[#D4AF37]/[0.06]
                          px-3.5
                          py-1.5
                          text-xs
                          font-medium
                          text-[#D4AF37]
                          transition-colors
                          duration-300
                          hover:border-[#D4AF37]/50
                          hover:bg-[#D4AF37]/10
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* ================= CTA ================= */}

                  <div className="mt-auto pt-8">

                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/button
                        relative
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        overflow-hidden
                        rounded-xl
                        bg-[#D4AF37]
                        px-6
                        py-4
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:bg-[#E5C158]
                        hover:shadow-[0_10px_30px_rgba(212,175,55,0.20)]
                        sm:w-fit
                      "
                    >

                      {/* Button Shine */}

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
                          group-hover/button:left-[120%]
                        "
                      />

                      <FaExternalLinkAlt className="relative z-10 text-sm" />

                      <span className="relative z-10">
                        Visit Live Website
                      </span>

                      <FaArrowRight
                        className="
                          relative
                          z-10
                          text-xs
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-1
                        "
                      />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* ================= BOTTOM MESSAGE ================= */}

          <div className="mt-14 text-center sm:mt-16">

            <p className="text-sm text-gray-500 sm:text-base">
              Your business could be our next featured project.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-4
                inline-flex
                items-center
                gap-3
                font-semibold
                text-[#D4AF37]
                transition-colors
                duration-300
                hover:text-[#F3DA7A]
              "
            >

              Start your project with us

              <FaArrowRight
                className="
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