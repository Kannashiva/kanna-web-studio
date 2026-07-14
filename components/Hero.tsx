"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <p className="text-blue-600 font-semibold mb-4">
            Kanna Web Studio
          </p>

          <motion.h1
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  className="text-5xl md:text-7xl font-bold"
>
  Modern Websites That Help Businesses Grow Online
</motion.h1>


          <motion.p
  initial={{
    opacity:0,
    y:30,
  }}
  animate={{
    opacity:1,
    y:0,
  }}
  transition={{
    duration:0.8,
    delay:0.2,
  }}
>
I design and develop fast, responsive and SEO-friendly websites for restaurants, startups and local businesses.
</motion.p>


          <div className="mt-8 flex gap-4">

            <motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.4}}
>

{/* Your buttons */}

</motion.div>


            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Let's Talk
            </a>

          </div>

        </div>


        {/* Right Side Visual */}
        <div className="flex justify-center">

          <div className="w-full max-w-md bg-gray-100 rounded-2xl p-8 shadow-lg">

            <h3 className="text-2xl font-semibold mb-4">
              Website Solutions
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>
                ✓ Business Websites
              </li>

              <li>
                ✓ Restaurant Websites
              </li>

              <li>
                ✓ Portfolio Websites
              </li>

              <li>
                ✓ SEO Optimized Design
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}