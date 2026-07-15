import {
  FaGlobe,
  FaUtensils,
  FaRocket,
  FaTools,
  FaCheck,
} from "react-icons/fa";
import Reveal from "./Reveal";

export default function Services() {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Business Websites",
      description:
        "Professional websites that help businesses build trust, showcase services, and generate more leads online.",
      features: [
        "Modern UI Design",
        "Mobile Responsive",
        "SEO Optimized",
      ],
    },

    {
      icon: <FaUtensils />,
      title: "Restaurant Websites",
      description:
        "Beautiful restaurant websites with digital menus, image galleries, Google Maps and WhatsApp ordering integration.",
      features: [
        "Digital Menu",
        "Google Maps",
        "WhatsApp Ordering",
      ],
    },

    {
      icon: <FaRocket />,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed for product launches, marketing campaigns and lead generation.",
      features: [
        "Fast Loading",
        "Conversion Focused",
        "Modern Design",
      ],
    },

    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated and running smoothly with ongoing maintenance and support.",
      features: [
        "Content Updates",
        "Performance Optimization",
        "Technical Support",
      ],
    },
  ];

  return (
    <Reveal>
      <section
        id="services"
        className="relative overflow-hidden bg-[#050505] py-24 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-52 -left-44 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              OUR SERVICES
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
              Digital Solutions That
              <br />

              <span className="text-[#D4AF37]">
                Grow Your Business
              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              We build premium websites that are visually stunning,
              lightning-fast, mobile-friendly and designed to help
              businesses attract more customers online.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-[#111111]
                p-8
                transition-all
                duration-500
                hover:-translate-y-4
                hover:border-[#D4AF37]
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)]
                "
              >

                {/* Gold Line */}

                <div
                  className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  scale-x-0
                  bg-[#D4AF37]
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                  "
                />

                {/* Icon */}

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D4AF37]
                  text-3xl
                  text-black
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                  "
                >
                  {service.icon}
                </div>

                {/* Title */}

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Divider */}

                <div className="my-7 h-px bg-[#D4AF37]/20" />

                {/* Features */}

                <ul className="space-y-4">

                  {service.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >

                      <FaCheck className="text-[#D4AF37]" />

                      {feature}

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}