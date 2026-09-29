"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Na Kirraak Adda",
    category: "Restaurant Website",
    description:
      "A modern restaurant experience designed around menu discovery, location access and quick WhatsApp ordering.",
    image: "/images/projects/nakirraakadda.png",
    technologies: "Next.js • React • Tailwind CSS • Vercel",
    detail: "Restaurant experience • Hyderabad",
    url: "https://na-kirraak-adda.vercel.app",
  },
  {
    title: "SwaSra Collections",
    category: "Product Showcase",
    description:
      "A saree showcase experience with collections, category filters, search, colour variants and direct WhatsApp ordering.",
    image: "/images/projects/swasra-collections.png",
    technologies: "HTML • CSS • JavaScript • Vercel",
    detail: "Product showcase • Fashion",
    url: "https://swa-sra-collections.vercel.app",
  },
  {
    title: "The Stud House Elite",
    category: "Jewellery E-Commerce",
    description:
      "A premium jewellery shopping experience designed to showcase elegant collections, simplify product discovery and make online shopping effortless.",
    image: "/images/projects/thestudhouseelite.png",
    technologies: "Next.js • React • Tailwind CSS • Vercel",
    detail: "Jewellery e-commerce • India",
    url: "https://www.thestudhouseelite.co.in/",
  },
];

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="work"
      className="
        bg-[#171717]
        py-8
        text-[var(--foreground)]
        sm:py-10
        lg:py-12
      "
    >
      <div className="site-container">
        {/* SECTION HEADER */}

        <div className="mb-7 flex items-end justify-between text-[#F3F0E9] sm:mb-9">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.27em] text-[#FF6B22] sm:text-[10px]">
              Selected Portfolio
            </p>

            <h2
              className="
                mt-3
                text-[clamp(2.8rem,5vw,5.8rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              Selected work.
            </h2>
          </div>

          <p className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 sm:block">
            Kanna Web Studio • {String(activeProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        {/* MAIN PROJECT */}

        <div
          className="
            overflow-hidden
            rounded-[22px]
            bg-[var(--background)]
            text-[var(--foreground)]
            transition-colors
            duration-300

            lg:grid
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* =============================================
              LEFT — PROJECT INFORMATION
          ============================================= */}

          <div
            className="
              flex
              flex-col
              p-7

              sm:p-10

              lg:border-r
              lg:border-[var(--border)]
              lg:p-12

              xl:p-14
            "
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#FF6B22]">
                  {project.category}
                </p>

                <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)]">
                  {String(activeProject + 1).padStart(2, "0")}

                  <span className="mx-2 opacity-30">/</span>

                  {String(projects.length).padStart(2, "0")}
                </p>
              </div>

              <h3
                className="
                  mt-6
                  max-w-[500px]
                  text-[clamp(3rem,4.7vw,5.4rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.065em]
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-7
                  max-w-[420px]
                  text-[15px]
                  leading-7
                  text-[var(--muted)]

                  sm:text-[16px]
                  sm:leading-8
                "
              >
                {project.description}
              </p>
            </div>

            {/* PROJECT META */}

            <div className="mt-9 border-t border-[var(--border)] pt-6 lg:mt-auto lg:pt-7">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                Digital Experience
              </p>

              <p className="mt-2 text-sm font-medium">
                {project.detail}
              </p>

              <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                Technologies
              </p>

              <p className="mt-2 text-sm font-medium leading-6">
                {project.technologies}
              </p>
            </div>

            {/* DESKTOP ACTIONS */}

            <div className="mt-8 hidden items-end justify-between lg:flex">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={previousProject}
                  aria-label="Previous project"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-lg
                    transition-all
                    duration-200

                    hover:border-[#FF6B22]
                    hover:bg-[#FF6B22]
                    hover:text-[#171717]
                  "
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    text-lg
                    transition-all
                    duration-200

                    hover:border-[#FF6B22]
                    hover:bg-[#FF6B22]
                    hover:text-[#171717]
                  "
                >
                  →
                </button>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-bold
                "
              >
                <span
                  className="
                    border-b
                    border-[var(--border)]
                    pb-1
                    transition-colors
                    duration-200

                    group-hover:border-[#FF6B22]
                    group-hover:text-[#FF6B22]
                  "
                >
                  View project
                </span>

                <span
                  className="
                    text-[#FF6B22]
                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* =============================================
              RIGHT — PROJECT SCREENSHOT
          ============================================= */}

          <div
            className="
              relative
              flex
              items-center
              bg-[var(--background-alt)]
              p-5
              transition-colors
              duration-300

              sm:p-8

              lg:min-h-[600px]
              lg:p-10

              xl:p-12
            "
          >
            {/* SMALL META */}

            <div className="absolute left-5 right-5 top-5 z-10 hidden items-center justify-between sm:left-8 sm:right-8 lg:flex xl:left-12 xl:right-12">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[var(--muted)] opacity-60">
                Kanna Web Studio
              </p>

              <div className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-[#FF6B22]" />

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[var(--muted)] opacity-60">
                  Design • Develop • Deploy
                </p>
              </div>
            </div>

            {/* IMAGE */}

            <div className="relative w-full lg:mt-4">
              <div
                className="
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-[var(--border)]
                  bg-white
                  shadow-[0_22px_55px_rgba(0,0,0,0.12)]

                  sm:rounded-[16px]
                "
              >
                <Image
                  key={project.image}
                  src={project.image}
                  alt={`${project.title} website`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 90vw, 60vw"
                />
              </div>

              {/* MOBILE VIEW PROJECT */}

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute
                  -bottom-5
                  right-2
                  z-20
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FF6B22]
                  text-center
                  text-[10px]
                  font-bold
                  leading-4
                  text-[#171717]
                  shadow-[0_12px_30px_rgba(0,0,0,0.16)]

                  sm:h-[82px]
                  sm:w-[82px]

                  lg:hidden
                "
              >
                View
                <br />
                project ↗
              </a>
            </div>

            {/* DESKTOP PROJECT NUMBER */}

            <span
              aria-hidden="true"
              className="
                absolute
                bottom-1
                right-5
                hidden
                select-none
                text-[150px]
                font-medium
                leading-none
                tracking-[-0.08em]
                text-[var(--foreground)]
                opacity-[0.025]

                lg:block
              "
            >
              {String(activeProject + 1).padStart(2, "0")}
            </span>
          </div>

          {/* =============================================
              MOBILE NAVIGATION
          ============================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-[var(--border)]
              px-7
              py-6

              lg:hidden
            "
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)]">
              {String(activeProject + 1).padStart(2, "0")}

              <span className="mx-2 opacity-30">/</span>

              {String(projects.length).padStart(2, "0")}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  transition-all
                  duration-200
                  hover:border-[#FF6B22]
                  hover:bg-[#FF6B22]
                  hover:text-[#171717]
                "
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  transition-all
                  duration-200
                  hover:border-[#FF6B22]
                  hover:bg-[#FF6B22]
                  hover:text-[#171717]
                "
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}