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
        "Professional websites that help businesses build trust, showcase their services and generate more leads online.",
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
        "Beautiful restaurant websites with digital menus, galleries, maps and WhatsApp ordering integration.",
      features: [
        "Digital Menu",
        "Google Maps Integration",
        "WhatsApp Ordering",
      ],
    },

    {
      icon: <FaRocket />,
      title: "Landing Pages",
      description:
        "High-converting landing pages built for marketing campaigns, product launches and lead generation.",
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
        "Keep your website secure, updated and performing at its best with ongoing maintenance and support.",
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
        className="bg-slate-950 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="max-w-3xl mx-auto text-center">

            <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
              Services
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Solutions Designed To
              <br />
              Grow Your Business Online
            </h2>

            <p className="mt-6 text-lg text-slate-400 leading-8">
              I create modern websites that are visually appealing,
              responsive and built to help businesses establish
              a strong online presence.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]
                "
              >

                {/* Animated Top Border */}

                <div
                  className="
                  absolute
                  top-0
                  left-0
                  h-1
                  w-full
                  scale-x-0
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
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
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  text-3xl
                  text-white
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

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Features */}

                <ul className="mt-8 space-y-4">

                  {service.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <FaCheck className="text-blue-400 text-sm" />

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