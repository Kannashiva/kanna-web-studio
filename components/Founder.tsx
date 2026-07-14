import Image from "next/image";
import Reveal from "./Reveal";

export default function Founder() {
  return (
    <Reveal>
      <section
        id="about"
        className="bg-slate-950 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
              Founder
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Building Digital Experiences
              <br />
              That Help Businesses Grow
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
              Passionate about creating modern websites that help businesses
              build trust, attract customers and grow online.
            </p>

          </div>

          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Founder Image */}

            <div className="flex justify-center">

              <div className="relative h-[450px] w-[350px] overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">

  <Image
  src="/Founder/Founder.jpeg"
  alt="Shiva - Founder of Kanna Web Studio"
  fill
  priority
  className="object-cover transition duration-500 hover:scale-105"
/>

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400">
                Founder & Web Developer
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                Hi, I'm Shiva 👋
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                I'm the founder of <strong className="text-white">Kanna Web Studio</strong>.
                I specialize in building fast, modern and responsive websites
                that help restaurants, startups and local businesses establish
                a strong online presence.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Every website I build focuses on performance, clean design,
                mobile responsiveness and SEO to help businesses attract more
                customers and grow with confidence.
              </p>

              {/* Skills */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">
                  ✅ Responsive Websites
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">
                  ✅ Modern UI/UX Design
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">
                  ✅ SEO Optimized
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-white">
                  ✅ Business-Focused Solutions
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}