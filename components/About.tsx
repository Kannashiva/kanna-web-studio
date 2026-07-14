import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="bg-slate-950 py-24 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Founder Image */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-blue-500 shadow-2xl">

                  <Image
                    src="/founder/founder.jpeg"
                    alt="Shiva - Founder of Kanna Web Studio"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Founder
                </div>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
                Founder
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Building Digital Experiences
                <br />
                That Help Businesses Grow
              </h2>

              <h3 className="mt-6 text-2xl text-slate-300">
                Hi, I'm Shiva 👋
              </h3>

              <p className="mt-6 text-slate-400 leading-8">
                I'm the founder of <span className="text-white font-semibold">Kanna Web Studio</span>.
                I specialize in designing and developing modern,
                responsive and SEO-friendly websites for restaurants,
                startups and local businesses.
              </p>

              <p className="mt-4 text-slate-400 leading-8">
                My mission is to help businesses establish a strong online
                presence through fast, visually appealing and user-friendly
                websites that convert visitors into customers.
              </p>

              {/* Skills */}

              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 hover:border-blue-500 transition">
                  🚀 Responsive Design
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 hover:border-blue-500 transition">
                  ⚡ Fast Performance
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 hover:border-blue-500 transition">
                  🔍 SEO Optimized
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 hover:border-blue-500 transition">
                  🎨 Modern UI/UX
                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#contact"
                  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
                >
                  Let's Talk
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="rounded-xl border border-slate-700 px-8 py-4 hover:border-blue-500 transition"
                >
                  Download Resume
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}