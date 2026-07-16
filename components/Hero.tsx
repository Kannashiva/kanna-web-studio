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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center"
    >
      {/* Background Glow */}

      {/* Premium Background */}
<div className="absolute inset-0 overflow-hidden">
  {/* Main Gold Glow */}
  <div className="absolute -top-60 -left-60 h-[650px] w-[650px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

  {/* Bottom Right Glow */}
  <div className="absolute -bottom-56 -right-56 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />

  {/* Center Accent Glow */}
  <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[150px]" />

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
  <div className="absolute inset-0 bg-[#050505]/90" />
</div>

<div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 pt-32 pb-24 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Premium Web Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-5xl md:text-7xl font-black leading-tight"
          >
            Modern Websites
            <br />

            <span className="text-white">
              That Help
            </span>

            <br />

            <span className="text-[#D4AF37]">
              Businesses Grow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-9 text-slate-400"
          >
            We build modern, responsive and SEO-optimized websites that
            help businesses establish credibility, generate more leads and
            convert visitors into customers.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <a
              href="#contact"
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
              hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
              "
            >
              Start Your Project

              <FaArrowRight />

            </a>

            <a
              href="#projects"
              className="
              rounded-xl
              border
              border-slate-700
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
              hover:bg-slate-900
              "
            >
              View Portfolio
            </a>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6"
          >

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                10+
              </h3>

              <p className="mt-2 text-slate-400">
                Projects
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Responsive
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                24/7
              </h3>

              <p className="mt-2 text-slate-400">
                Support
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-slate-900/70
            backdrop-blur-xl
            p-10
            shadow-[0_20px_70px_rgba(0,0,0,0.45)]
            "
          >

            <h2 className="text-3xl font-bold">
              Why Choose
              <span className="text-[#D4AF37]">
                {" "}Kanna Web Studio
              </span>
            </h2>

            <div className="mt-10 space-y-5">

              {[
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
              ].map((item) => (

                <div
                  key={item.title}
                  className="
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  border
                  border-white/5
                  bg-slate-800/70
                  p-5
                  transition
                  duration-300
                  hover:border-[#D4AF37]
                  hover:translate-x-2
                  "
                >

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D4AF37]/10
                    text-xl
                    text-[#D4AF37]
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="font-medium">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}