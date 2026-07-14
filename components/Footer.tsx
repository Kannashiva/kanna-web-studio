import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Kanna Web Studio
            </h2>

            <p className="mt-2 text-slate-400">
              Building modern, responsive and SEO-friendly websites for
              businesses.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <Link href="#about" className="hover:text-blue-400 transition">
              About
            </Link>

            <Link href="#services" className="hover:text-blue-400 transition">
              Services
            </Link>

            <Link href="#projects" className="hover:text-blue-400 transition">
              Projects
            </Link>

            <Link href="#contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Kanna Web Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}