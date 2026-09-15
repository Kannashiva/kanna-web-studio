import Image from "next/image";
import Reveal from "./Reveal";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaInstagram,
} from "react-icons/fa";

export default function Founder() {
  const strengths = [
    "Responsive Websites",
    "Modern UI/UX Design",
    "Performance Focused",
    "Business-Focused Solutions",
  ];

  return (
    <Reveal>
      <section
        id="about"
        className="
          relative
          overflow-hidden
          bg-[#050505]
          py-20
          text-white
          sm:py-24
          lg:py-28
        "
      >
        {/* ================= BACKGROUND ================= */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Top Gold Line */}

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
              via-[#D4AF37]/25
              to-transparent
            "
          />

          {/* Left Glow */}

          <div
            className="
              absolute
              -left-40
              top-1/3
              h-80
              w-80
              rounded-full
              bg-[#D4AF37]/[0.06]
              blur-[120px]
            "
          />

          {/* Right Glow */}

          <div
            className="
              absolute
              -right-40
              bottom-10
              h-80
              w-80
              rounded-full
              bg-[#D4AF37]/[0.05]
              blur-[120px]
            "
          />
        </div>

        {/* ================= MAIN CONTAINER ================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "
        >
          {/* ================= SECTION HEADING ================= */}

          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/25
                bg-[#D4AF37]/[0.06]
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D4AF37]
                sm:text-sm
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D4AF37]
                "
              />

              Meet The Founder
            </div>

            <h2
              className="
                mt-7
                text-4xl
                font-black
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              The Person Behind

              <span
                className="
                  mt-2
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
                max-w-2xl
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

          {/* ================= FOUNDER CONTENT ================= */}

          <div
            className="
              mt-14
              grid
              items-center
              gap-12
              sm:mt-16
              lg:mt-20
              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-20
            "
          >
            {/* =================================================
                LEFT - FOUNDER PHOTO
            ================================================= */}

            <div className="mx-auto w-full max-w-[430px] lg:mx-0">
              {/* Photo Frame */}

              <div className="relative">

                {/* Actual Photo */}

                <div
                  className="
                    relative
                    z-10
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.08]
                    bg-[#0A0A0A]
                    shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                  "
                >
                  <Image
                    src="/founder/founder.jpeg"
                    alt="Shiva, Founder and Web Developer at Kanna Web Studio"
                    width={1091}
                    height={1441}
                    sizes="
                      (max-width: 640px) 90vw,
                      (max-width: 1024px) 430px,
                      430px
                    "
                    className="
                      block
                      h-auto
                      w-full
                    "
                  />

                  {/* Very Subtle Bottom Gradient */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-1/4
                      bg-gradient-to-t
                      from-black/25
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* Founder Identity */}

              <div
                className="
                  relative
                  z-20
                  mx-4
                  -mt-5
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-[#0A0A0A]
                  px-5
                  py-4
                  shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                  sm:mx-6
                  sm:px-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#D4AF37]
                        sm:text-xs
                      "
                    >
                      Founder & Web Developer
                    </p>

                    <p
                      className="
                        mt-1
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      Shiva
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      text-[#D4AF37]
                    "
                  >
                    <FaCode />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT - FOUNDER DETAILS
            ================================================= */}

            <div>
              {/* Small Badge */}

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

              {/* Introduction */}

              <h3
                className="
                  mt-6
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Hi, I&apos;m Shiva
                <span className="text-[#D4AF37]">.</span>
              </h3>

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

              {/* ================= STRENGTHS ================= */}

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {strengths.map((item) => (
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
                      transition-colors
                      duration-300
                      hover:border-[#D4AF37]/35
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
                  from-[#D4AF37]/30
                  via-white/[0.06]
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
                {/* Contact */}

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
                  <span
                    aria-hidden="true"
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
                    transition-colors
                    duration-300
                    hover:border-[#D4AF37]/40
                    hover:text-[#D4AF37]
                  "
                >
                  <FaInstagram className="text-lg" />

                  Instagram
                </a>
              </div>

              {/* ================= TRUST LINE ================= */}

              <div
                className="
                  mt-7
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-[9px]
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#D4AF37]
                  "
                />

                <p
                  className="
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
        </div>
      </section>
    </Reveal>
  );
}