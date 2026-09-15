import {
  FaGlobe,
  FaUtensils,
  FaRocket,
  FaTools,
  FaShoppingBag,
  FaUserTie,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

import Reveal from "./Reveal";

const services = [
  {
    icon: <FaGlobe />,
    title: "Business Websites",
    description:
      "Professional websites that help businesses build trust, showcase services and generate more leads online.",
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
      "Modern restaurant websites designed to showcase menus, locations, galleries and make ordering easier.",
    features: [
      "Digital Menu",
      "Google Maps",
      "WhatsApp Ordering",
    ],
  },

  {
    icon: <FaShoppingBag />,
    title: "Product Showcase",
    description:
      "Beautiful product and catalogue websites that help businesses showcase collections and receive enquiries online.",
    features: [
      "Product Catalogue",
      "Category Filters",
      "WhatsApp Enquiries",
    ],
  },

  {
    icon: <FaRocket />,
    title: "Landing Pages",
    description:
      "Focused landing pages built for promotions, product launches, campaigns and lead generation.",
    features: [
      "Fast Loading",
      "Conversion Focused",
      "Modern Design",
    ],
  },

  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
    description:
      "Professional personal and portfolio websites designed for freelancers, creators and professionals.",
    features: [
      "Personal Branding",
      "Project Showcase",
      "Contact Integration",
    ],
  },

  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Reliable website support to keep your content updated, performance optimized and website running smoothly.",
    features: [
      "Content Updates",
      "Performance Optimization",
      "Technical Support",
    ],
  },
];

export default function Services() {
  return (
    <Reveal>

      <section
        id="services"
        className="
          relative
          overflow-hidden
          bg-[#050505]
          pb-16
          pt-1
          text-white
        "
      >

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Left Glow */}
          <div
            className="
              absolute
              -left-40
              top-20
              h-80
              w-80
              rounded-full
              bg-[#D4AF37]/8
              blur-[120px]
            "
          />

          {/* Right Glow */}
          <div
            className="
              absolute
              -right-40
              bottom-0
              h-80
              w-80
              rounded-full
              bg-[#D4AF37]/8
              blur-[120px]
            "
          />

          {/* Top Gold Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]/20
              to-transparent
            "
          />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* ================= HEADING ================= */}

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}

            <span
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/25
                bg-[#D4AF37]/8
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
                sm:text-sm
              "
            >

              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              Our Services

            </span>

            {/* Heading */}

            <h2
              className="
                mt-7
                text-4xl
                font-black
                leading-tight
                tracking-tight
                sm:text-5xl
                md:text-6xl
              "
            >

              Digital Solutions That

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#F3DA7A]
                  to-[#D4AF37]
                  bg-clip-text
                  text-transparent
                "
              >
                Grow Your Business
              </span>

            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              We create modern, responsive and performance-focused websites
              designed to strengthen your online presence and help your
              business connect with more customers.
            </p>

          </div>

          {/* ================= SERVICES GRID ================= */}

          <div
            className="
              mt-14
              grid
              gap-5
              sm:mt-16
              sm:gap-6
              md:grid-cols-2
              lg:mt-20
              lg:grid-cols-3
            "
          >

            {services.map((service) => (

              <div
                key={service.title}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#0C0C0C]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/50
                  hover:bg-[#10100E]
                  hover:shadow-[0_18px_45px_rgba(212,175,55,0.10)]
                  sm:p-8
                "
              >

                {/* ================= TOP GOLD LINE ================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />

                {/* ================= HOVER GLOW ================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-[#D4AF37]/0
                    blur-[55px]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/8
                  "
                />

                {/* ================= ICON ================= */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#D4AF37]/25
                    bg-[#D4AF37]/10
                    text-2xl
                    text-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:border-[#D4AF37]/60
                    group-hover:bg-[#D4AF37]
                    group-hover:text-black
                    sm:h-16
                    sm:w-16
                    sm:text-3xl
                  "
                >
                  {service.icon}
                </div>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    relative
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#D4AF37]
                  "
                >
                  {service.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    relative
                    mt-4
                    leading-7
                    text-gray-400
                  "
                >
                  {service.description}
                </p>

                {/* ================= DIVIDER ================= */}

                <div
                  className="
                    my-6
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#D4AF37]/25
                    via-white/[0.05]
                    to-transparent
                  "
                />

                {/* ================= FEATURES ================= */}

                <ul className="relative space-y-3">

                  {service.features.map((feature) => (

                    <li
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-300
                        sm:text-base
                      "
                    >

                      {/* Check Circle */}

                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#D4AF37]/10
                          text-[9px]
                          text-[#D4AF37]
                        "
                      >
                        <FaCheck />
                      </span>

                      {feature}

                    </li>

                  ))}

                </ul>

                {/* ================= BOTTOM DECORATION ================= */}

                <div
                  className="
                    relative
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-7
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#D4AF37]/50
                    transition-colors
                    duration-300
                    group-hover:text-[#D4AF37]
                  "
                >

                  Kanna Web Studio

                  <FaArrowRight
                    className="
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </div>

              </div>

            ))}

          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div className="mt-14 text-center sm:mt-16">

            <p className="text-sm text-gray-500 sm:text-base">
              Have something different in mind?
            </p>

            <a
              href="#contact"
              className="
                group
                mt-4
                inline-flex
                items-center
                gap-3
                font-semibold
                text-[#D4AF37]
                transition-colors
                duration-300
                hover:text-[#F3DA7A]
              "
            >

              Tell us about your project

              <FaArrowRight
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

        </div>

      </section>

    </Reveal>
  );
}