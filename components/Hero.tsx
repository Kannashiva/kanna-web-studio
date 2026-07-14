export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          🚀 Welcome to Kanna Web Studio
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Modern Websites That
          <span className="text-blue-500"> Help Businesses Grow</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300">
          We design and develop premium, responsive and SEO-friendly
          websites for restaurants, salons, startups and local businesses.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#portfolio"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            Get Free Quote
          </a>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400">

          <div>
            <h2 className="text-3xl font-bold text-white">1+</h2>
            <p>Live Projects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">100%</h2>
            <p>Responsive Design</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}