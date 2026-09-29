import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#663399" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
];

const mobileRowOne = technologies.slice(0, 5);
const mobileRowTwo = technologies.slice(5);

function TechnologyItem({
  name,
  icon: Icon,
  color,
}: Technology) {
  return (
    <div className="group flex shrink-0 items-center gap-4">
      <div
        className="
          flex
          h-[58px]
          w-[58px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/[0.12]
          bg-white/[0.03]
          transition-all
          duration-300
          group-hover:border-white/[0.28]
          group-hover:bg-white/[0.07]
          sm:h-[66px]
          sm:w-[66px]
        "
      >
        <Icon
          style={{ color }}
          className="
            text-[25px]
            transition-transform
            duration-300
            group-hover:scale-110
            sm:text-[29px]
          "
        />
      </div>

      <p
        className="
          whitespace-nowrap
          text-[1.35rem]
          font-medium
          tracking-[-0.04em]
          text-[#F3F0E9]
          transition-colors
          duration-300
          group-hover:text-[#FF6B22]
          sm:text-[1.6rem]
          lg:text-[1.85rem]
        "
      >
        {name}
      </p>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Technology[];
  reverse?: boolean;
}) {
  return (
    <div className="tech-marquee">
      <div
        className={`tech-marquee-track ${
          reverse ? "tech-marquee-reverse" : ""
        }`}
      >
        <div className="tech-marquee-set">
          {items.map((technology, index) => (
            <TechnologyItem
              key={`first-${technology.name}-${index}`}
              {...technology}
            />
          ))}
        </div>

        <div
          className="tech-marquee-set"
          aria-hidden="true"
        >
          {items.map((technology, index) => (
            <TechnologyItem
              key={`second-${technology.name}-${index}`}
              {...technology}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="
        overflow-hidden
        bg-[#171717]
        py-16
        text-[#F3F0E9]
        sm:py-20
        lg:py-24
      "
    >
      <div className="site-container">
        {/* HEADER */}

        <div className="grid gap-10 border-b border-white/[0.12] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              Our Toolkit
            </p>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[#9A9791]">
              A focused technology stack chosen to create fast,
              responsive and reliable digital experiences.
            </p>
          </div>

          <h2 className="text-[clamp(3.2rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Technology
            <br />
            behind the{" "}
            <span className="text-[#FF6B22]">
              experience.
            </span>
          </h2>
        </div>

        {/* STATEMENT */}

        <div className="border-b border-white/[0.12] py-12 sm:py-16 lg:py-20">
          <p className="max-w-[1150px] text-[clamp(2rem,4.4vw,4.8rem)] font-medium leading-[1.05] tracking-[-0.045em] text-[#77736D]">
            We combine{" "}
            <span className="text-[#F3F0E9]">
              design thinking
            </span>
            , modern technologies and{" "}
            <span className="text-[#F3F0E9]">
              performance-focused
            </span>{" "}
            development to turn ideas into digital experiences.
          </p>
        </div>
      </div>

      {/* =====================================================
          DESKTOP — ONE LINE
      ===================================================== */}

      <div className="hidden py-12 sm:block lg:py-14">
        <MarqueeRow items={technologies} />
      </div>

      {/* =====================================================
          MOBILE — TWO LINES
      ===================================================== */}

      <div className="space-y-7 py-10 sm:hidden">
        <MarqueeRow items={mobileRowOne} />

        <MarqueeRow
          items={mobileRowTwo}
          reverse
        />
      </div>

      {/* BOTTOM META */}

      <div className="site-container">
        <div className="flex flex-col gap-5 border-t border-white/[0.12] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#77736D]">
            Design • Code • Deploy
          </p>

          <p className="text-sm text-[#8E8A84]">
            Tools chosen for performance, flexibility and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}