"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center"
    ><div className="absolute inset-0 overflow-hidden">

  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

</div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold tracking-wider text-blue-400"
          >
            🚀 Kanna Web Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
          >
            Modern Websites That Help
            <span className="block text-blue-500">
              Businesses Grow Online
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            I design and develop fast, responsive and SEO-friendly
            websites for restaurants, startups and local businesses.
            Every website is built to look great, perform fast and
            convert visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="
rounded-xl
bg-blue-600
px-8
py-4
font-semibold
transition-all
duration-300
hover:bg-blue-700
hover:scale-105
"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
rounded-xl
border
border-slate-700
px-8
py-4
transition-all
duration-300
hover:border-blue-500
hover:bg-slate-900
hover:scale-105
"
            >
              Let's Talk
            </a>
          </motion.div>

        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-8 shadow-[0_0_50px_rgba(59,130,246,0.12)]">

            <h3 className="text-3xl font-bold text-white">
              What You'll Get
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-slate-800 p-5">
                ⚡ Fast Performance
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                📱 Mobile Responsive Design
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                🔍 SEO Friendly Structure
              </div>

              <div className="rounded-xl bg-slate-800 p-5">
                🚀 Modern UI & User Experience
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}