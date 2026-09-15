import Image from "next/image";
import Reveal from "./Reveal";

import {
  FaCheck,
  FaCode,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";

export default function Founder() {
  return (
    <Reveal>
      <section
        id="about"
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

              Meet The Founder

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
              The Person Behind

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
                Kanna Web Studio
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
              Combining modern technology, thoughtful design and personal
              attention to create websites that help businesses build a
              stronger online presence.
            </p>

          </div>

          {/* ================= FOUNDER AREA ================= */}

          <div
            className="
              mt-14
              grid
              items-center
              gap-10
              sm:mt-16
              lg:mt-20
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-16
            "
          >

            {/* ================= IMAGE SIDE ================= */}

            <div className="flex justify-center lg:justify-start">

              <div className="relative w-full max-w-[420px]">

                {/* Decorative Border */}

                <div
                  className="
                    absolute
                    -bottom-3
                    -right-3
                    h-full
                    w-full
                    rounded-3xl
                    border
                    border-[#D4AF37]/20
                    sm:-bottom-4
                    sm:-right-4
                  "
                />

                {/* Image Container */}

                <div
                  className="
                    group
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.08]
                    bg-[#0C0C0C]
                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  "
                >

                  <Image
                    src="/founder/founder.jpeg"
                    alt="Shiva, Founder of Kanna Web Studio"
                    fill
                    sizes="
                      (max-width: 1024px) 90vw,
                      420px
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  {/* Image Gradient */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Founder Label */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#090909]/90
                      px-5
                      py-4
                    "
                  >

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#D4AF37]
                      "
                    >
                      Founder & Web Developer
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      Shiva
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= TEXT SIDE ================= */}

            <div>

              {/* Small Label */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/[0.06]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#D4AF37]
                "
              >

                <FaCode />

                Founder & Web Developer

              </div>

              {/* Name */}

              <h3
                className="
                  mt-6
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Hi, I&apos;m Shiva
                <span className="text-[#D4AF37]">.</span>
              </h3>

              {/* Paragraph 1 */}

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-gray-400
                  sm:text-lg
                "
              >
                I&apos;m the founder of{" "}

                <strong className="font-semibold text-white">
                  Kanna Web Studio
                </strong>

                . I create modern, fast and responsive websites for businesses
                that want to establish a professional and trustworthy online
                presence.
              </p>

              {/* Paragraph 2 */}

              <p
                className="
                  mt-5
                  text-base
                  leading-8
                  text-gray-400
                  sm:text-lg
                "
              >
                From understanding your requirements to design, development
                and deployment, I personally focus on creating a website that
                looks professional, performs smoothly and represents your
                business effectively.
              </p>

              {/* ================= VALUE CARDS ================= */}

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                  sm:gap-4
                "
              >

                {[
                  "Responsive Websites",
                  "Modern UI/UX Design",
                  "Performance Focused",
                  "Business-Focused Solutions",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-[#0C0C0C]
                      px-4
                      py-4
                      text-sm
                      font-medium
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-[#D4AF37]/40
                      hover:bg-[#10100E]
                      hover:text-white
                      sm:text-base
                    "
                  >

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D4AF37]/10
                        text-[9px]
                        text-[#D4AF37]
                        transition-colors
                        duration-300
                        group-hover:bg-[#D4AF37]
                        group-hover:text-black
                      "
                    >
                      <FaCheck />
                    </span>

                    {item}

                  </div>

                ))}

              </div>

              {/* ================= DIVIDER ================= */}

              <div
                className="
                  my-8
                  h-px
                  bg-gradient-to-r
                  from-[#D4AF37]/25
                  via-white/[0.05]
                  to-transparent
                "
              />

              {/* ================= CTA ================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
              >

                {/* Contact Button */}

                <a
                  href="#contact"
                  className="
                    group
                    relative
                    inline-flex
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
                  "
                >

                  {/* Shine */}

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
                      group-hover:left-[120%]
                    "
                  />

                  <span className="relative z-10">
                    Let&apos;s Work Together
                  </span>

                  <FaArrowRight
                    className="
                      relative
                      z-10
                      text-xs
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/_shiva_kanna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shiva on Instagram"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#0C0C0C]
                    px-6
                    py-4
                    font-semibold
                    text-gray-300
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/40
                    hover:text-[#D4AF37]
                  "
                >

                  <FaInstagram className="text-lg" />

                  Instagram

                </a>

              </div>

              {/* Personal Attention */}

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-gray-500
                "
              >
                Every project receives direct communication and personal
                attention from start to launch.
              </p>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}