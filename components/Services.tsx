"use client";

import { useState } from "react";

const services = [
  {
    title: "Business Websites",
    short: "Business",
    description:
      "Professional websites designed to strengthen your online presence, build trust and turn visitors into potential customers.",
    features: ["Modern UI Design", "Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Restaurant Websites",
    short: "Restaurant",
    description:
      "Customer-friendly restaurant websites built around menu discovery, location access and direct WhatsApp ordering.",
    features: ["Digital Menu", "Google Maps", "WhatsApp Ordering"],
  },
  {
    title: "Product Showcase",
    short: "Showcase",
    description:
      "Clean product experiences that help businesses present collections, organise categories and receive direct enquiries.",
    features: ["Product Catalogue", "Category Filters", "WhatsApp Enquiries"],
  },
  {
    title: "Landing Pages",
    short: "Landing",
    description:
      "Focused landing pages designed around a specific product, service, campaign or business goal.",
    features: ["Fast Loading", "Conversion Focused", "Modern Design"],
  },
  {
    title: "Portfolio Websites",
    short: "Portfolio",
    description:
      "Personal and professional portfolio websites created to showcase your work, experience and identity online.",
    features: ["Personal Branding", "Project Showcase", "Contact Integration"],
  },
  {
    title: "Website Maintenance",
    short: "Support",
    description:
      "Ongoing website support to keep your content updated, performance optimised and digital presence running smoothly.",
    features: [
      "Content Updates",
      "Performance Optimization",
      "Technical Support",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];

  return (
    <section
      id="services"
      className="
        bg-[var(--background)]
        py-16
        text-[var(--foreground)]
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
      "
    >
      <div className="site-container">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              What We Do
            </p>

            <p className="mt-5 max-w-[330px] text-sm leading-7 text-[var(--muted)]">
              Websites built around clear ideas, thoughtful design and
              practical business needs.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            <span className="block lg:whitespace-nowrap">
              Digital experiences
            </span>

            <span className="block lg:whitespace-nowrap">
              built to{" "}
              <span className="text-[#FF6B22]">
                work.
              </span>
            </span>
          </h2>
        </div>

        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT SERVICE LIST */}

          <div className="lg:border-r lg:border-[var(--border)] lg:pr-12">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className="
                    group
                    grid
                    w-full
                    grid-cols-[45px_1fr_auto]
                    items-center
                    gap-3
                    border-b
                    border-[var(--border)]
                    py-6
                    text-left
                    sm:grid-cols-[60px_1fr_auto]
                    sm:py-8
                  "
                >
                  {/* NUMBER */}

                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-200 ${
                      isActive
                        ? "text-[#FF6B22]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TITLE */}

                  <span
                    className={`
                      text-[1.35rem]
                      font-medium
                      tracking-[-0.04em]
                      transition-colors
                      duration-200
                      sm:text-[1.55rem]
                      lg:text-[clamp(1.55rem,3vw,2.7rem)]

                      ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                      }
                    `}
                  >
                    {service.title}
                  </span>

                  {/* ARROW */}

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-sm
                      transition-all
                      duration-200
                      sm:h-11
                      sm:w-11

                      ${
                        isActive
                          ? "border-[#FF6B22] bg-[#FF6B22] text-[#171717]"
                          : "border-[var(--border)] group-hover:border-[#FF6B22]"
                      }
                    `}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              RIGHT DETAILS
          ================================================= */}

          <div className="flex flex-col justify-between pt-12 lg:min-h-[520px] lg:pl-14 lg:pt-14 xl:pl-20">
            <div>
              {/* LABEL */}

              <div className="flex items-center gap-3">
                <span className="h-[9px] w-[9px] rounded-full bg-[#FF6B22]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                  {active.short}
                </p>
              </div>

              {/* TITLE */}

              <h3 className="mt-8 max-w-[520px] text-[2.55rem] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[3rem] lg:text-[clamp(2.8rem,5vw,5rem)]">
                {active.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-8 max-w-[470px] text-base leading-8 text-[var(--muted)] sm:text-[17px]">
                {active.description}
              </p>

              {/* FEATURES */}

              <div className="mt-10 border-t border-[var(--border)]">
                {active.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 border-b border-[var(--border)] py-4"
                  >
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF6B22]" />

                    <span className="text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="mt-12">
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-4
                  border-b
                  border-[var(--foreground)]
                  pb-2
                  text-sm
                  font-bold
                  transition-colors
                  duration-200
                  hover:border-[#FF6B22]
                  hover:text-[#FF6B22]
                "
              >
                Discuss your project
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM META
        ================================================= */}

        <div className="mt-16 flex flex-col gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            Design • Development • Performance
          </p>

          <p className="text-sm text-[var(--muted)]">
            Built for businesses that want a stronger digital presence.
          </p>
        </div>
      </div>
    </section>
  );
}