import {
  FaBriefcase,
  FaUtensils,
  FaDumbbell,
  FaLaptopCode,
} from "react-icons/fa";

import {
  MdSpa,
  MdRocketLaunch,
} from "react-icons/md";

const services = [
  {
    title: "Business Website",
    description:
      "Professional websites that help businesses establish a strong online presence.",
    icon: <FaBriefcase className="text-5xl text-blue-500" />,
  },
  {
    title: "Restaurant Website",
    description:
      "Beautiful websites with menu, gallery, Google Maps and WhatsApp integration.",
    icon: <FaUtensils className="text-5xl text-orange-500" />,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio websites for freelancers, professionals and creators.",
    icon: <FaLaptopCode className="text-5xl text-cyan-400" />,
  },
  {
    title: "Gym Website",
    description:
      "Modern fitness websites with membership plans and trainer profiles.",
    icon: <FaDumbbell className="text-5xl text-red-500" />,
  },
  {
    title: "Salon Website",
    description:
      "Elegant salon and spa websites with service listings and booking information.",
    icon: <MdSpa className="text-5xl text-pink-500" />,
  },
  {
    title: "Landing Page",
    description:
      "High-converting landing pages designed to generate leads and sales.",
    icon: <MdRocketLaunch className="text-5xl text-green-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            What I Can Build for You
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
            From business websites to restaurant websites, I create modern,
            responsive and SEO-friendly solutions tailored to your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div>{service.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}