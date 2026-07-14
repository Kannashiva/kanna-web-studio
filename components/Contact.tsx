export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-full border-4 border-blue-500 bg-slate-800 flex items-center justify-center text-7xl">
              👨‍💻
            </div>

          </div>

          {/* Right Side */}

          <div>

            <p className="text-blue-400 uppercase tracking-widest font-semibold">
              About Me
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Hi, I'm Shiva 👋
            </h2>

            <h3 className="mt-2 text-2xl text-slate-300">
              Founder of Kanna Web Studio
            </h3>

            <p className="mt-8 text-slate-400 leading-8">
              I design and develop modern, responsive and SEO-friendly
              websites that help businesses establish a strong online
              presence. My goal is to create websites that are fast,
              visually appealing and focused on delivering results.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                ✅ Responsive Design
              </div>

              <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                ⚡ Fast Performance
              </div>

              <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                🔍 SEO Friendly
              </div>

              <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                🎨 Modern UI
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
              >
                Let's Talk
              </a>

              <button
                className="rounded-xl border border-slate-700 px-8 py-4 hover:border-blue-500 transition"
              >
                Download Resume
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}