export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Kanna <span className="text-blue-500">Web Studio</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  );
}