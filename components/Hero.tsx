"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Website Design",
  },
  {
    icon: <FaMobileAlt />,
    title: "Fully Mobile Responsive",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimized Structure",
  },
  {
    icon: <FaRocket />,
    title: "Fast Loading Performance",
  },
  {
    icon: <FaCheckCircle />,
    title: "Free Deployment Support",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Static Gold Glow - Top Left */}
        <div
          className="
            absolute
            -left-60
            -top-60
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D4AF37]/10
            blur-[140px]
          "
        />

        {/* Static Gold Glow - Bottom Right */}
        <div
          className="
            absolute
            -bottom-56
            -right-56
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#D4AF37]/8
            blur-[140px]
          "
        />

        {/* Center Accent */}
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/5
            blur-[120px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050505]/88" />

        {/* Subtle Top Spotlight */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[250px]
            w-[600px]
            -translate-x-1/2
            bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)]
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          px-6
          pb-20
          pt-32
          lg:grid-cols-2
          lg:gap-20
          lg:pb-24
        "
      >
        {/* ================= LEFT ================= */}

        <div>

          {/* Premium Badge */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <span
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/30
                bg-[#D4AF37]/10
                px-5
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D4AF37]
                sm:text-sm
              "
            >
              {/* Static Gold Dot */}

              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              Premium Web Development
            </span>
          </motion.div>

          {/* ================= HEADING ================= */}

          {/*
            IMPORTANT:
            H1 intentionally stays STATIC.
            This helps protect LCP / PageSpeed performance.
          */}

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-[1.08]
              tracking-tight
              sm:text-6xl
              md:text-7xl
            "
          >
            Modern Websites

            <br />

            <span className="text-white">
              That Help
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#F3DA7A]
                to-[#D4AF37]
                bg-clip-text
                text-transparent
              "
            >
              Businesses Grow
            </span>
          </h1>

          {/* ================= DESCRIPTION ================= */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              mt-8
              max-w-xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
              sm:leading-9
            "
          >
            We build modern, responsive and SEO-optimized websites that
            help businesses establish credibility, generate more leads and
            convert visitors into customers.
          </motion.p>

          {/* ================= BUTTONS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-10 flex flex-wrap gap-4 sm:gap-5"
          >
            {/* Primary CTA */}

            <a
              href="#contact"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-[#D4AF37]
                px-7
                py-4
                font-semibold
                text-black
                shadow-[0_10px_30px_rgba(212,175,55,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E5C158]
                hover:shadow-[0_12px_40px_rgba(212,175,55,0.30)]
                sm:px-8
              "
            >
              {/* Hover Shine */}

              <span
                className="
                  absolute
                  inset-y-0
                  -left-20
                  w-12
                  -skew-x-12
                  bg-white/30
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative z-10">
                Start Your Project
              </span>

              <FaArrowRight
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Secondary CTA */}

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/15
                bg-white/[0.03]
                px-7
                py-4
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D4AF37]/70
                hover:bg-[#D4AF37]/5
                hover:text-[#D4AF37]
                sm:px-8
              "
            >
              View Portfolio
            </a>

          </motion.div>

          {/* ================= TRUST POINTS ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              text-sm
              text-slate-500
            "
          >
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D4AF37]" />
              Responsive Design
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D4AF37]" />
              SEO Ready
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-[#D4AF37]" />
              Fast Deployment
            </span>

          </motion.div>

        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative"
        >

          {/* Static Outer Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -inset-5
              rounded-[40px]
              bg-[#D4AF37]/5
              blur-2xl
            "
          />

          {/* Main Card */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#0D0D0D]
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              sm:p-8
              lg:p-10
            "
          >

            {/* Gold Top Line */}

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
                via-[#D4AF37]
                to-transparent
              "
            />

            {/* Small Static Accent Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-[#D4AF37]/8
                blur-[70px]
              "
            />

            {/* Card Heading */}

            <h2
              className="
                relative
                text-2xl
                font-bold
                leading-tight
                sm:text-3xl
              "
            >
              Why Choose

              <span className="text-[#D4AF37]">
                {" "}Kanna Web Studio
              </span>
            </h2>

            {/* ================= FEATURES ================= */}

            <div className="relative mt-8 space-y-4 sm:mt-10">

              {features.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:border-[#D4AF37]/45
                    hover:bg-[#D4AF37]/[0.05]
                    sm:gap-5
                    sm:p-5
                  "
                >

                  {/* Feature Icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      text-lg
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]/50
                      group-hover:bg-[#D4AF37]/15
                      sm:h-12
                      sm:w-12
                      sm:text-xl
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Feature Text */}

                  <p className="font-medium text-slate-100">
                    {item.title}
                  </p>

                  {/* Desktop Accent Dot */}

                  <span
                    className="
                      ml-auto
                      hidden
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#D4AF37]/40
                      transition-colors
                      duration-300
                      group-hover:bg-[#D4AF37]
                      sm:block
                    "
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

      {/* ================= BOTTOM FADE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

    </section>
  );
}