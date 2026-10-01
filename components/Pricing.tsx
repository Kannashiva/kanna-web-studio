import ArrowUpRight from "./ArrowUpRight";

const plans = [
  {
    name: "Starter",
    price: "₹4,999+",
    description:
      "A focused website for individuals and small businesses that need a professional online presence.",
    features: [
      "Single-page website",
      "Responsive design",
      "Modern UI / UX",
      "WhatsApp integration",
      "Basic SEO setup",
      "Deployment support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "₹9,999+",
    description:
      "A complete multi-page website for businesses ready to build a stronger digital presence.",
    features: [
      "Multi-page website",
      "Responsive design",
      "Premium UI / UX",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO setup",
      "Performance optimization",
      "Deployment support",
    ],
    cta: "Choose Business",
    popular: true,
  },
  {
    name: "Premium",
    price: "Let’s Talk",
    description:
      "For custom websites and digital experiences that need more advanced functionality and flexibility.",
    features: [
      "Custom website solution",
      "Advanced UI / UX",
      "Custom functionality",
      "E-commerce options",
      "Third-party integrations",
      "Performance optimization",
      "SEO setup",
      "Launch & support",
    ],
    cta: "Discuss Project",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        bg-[#171717]
        py-16
        text-[#F3F0E9]
        sm:py-20
        lg:py-24
      "
    >
      <div className="site-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 border-b border-white/[0.12] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              Pricing
            </p>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[#9A9791]">
              Clear starting prices designed for different stages of your
              business and digital journey.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Choose what
            <br />
            fits your{" "}
            <span className="text-[#FF6B22]">
              vision.
            </span>
          </h2>
        </div>

        {/* =====================================================
            PRICING
        ===================================================== */}

        <div className="grid lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`
                relative
                flex
                flex-col
                border-white/[0.12]
                py-10
                sm:py-12
                lg:min-h-[690px]
                lg:px-9
                lg:py-12
                xl:px-11

                ${index !== 0 ? "border-t lg:border-l lg:border-t-0" : ""}
              `}
            >
              {/* PLAN HEADER */}

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className={`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]

                      ${
                        plan.popular
                          ? "text-[#FF6B22]"
                          : "text-[#77736D]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-5 text-[clamp(2.2rem,3.4vw,3.8rem)] font-medium leading-none tracking-[-0.055em]">
                    {plan.name}
                  </h3>
                </div>

                {plan.popular && (
                  <span className="rounded-full bg-[#FF6B22] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#171717]">
                    Popular
                  </span>
                )}
              </div>

              {/* PRICE */}

              <div className="mt-10 border-b border-white/[0.12] pb-9">
                <p
                  className={`
                    font-medium
                    leading-none
                    tracking-[-0.055em]

                    ${
                      plan.popular
                        ? "text-[#FF6B22]"
                        : "text-[#F3F0E9]"
                    }

                    ${
                      plan.name === "Premium"
                        ? "text-[clamp(2.4rem,4vw,4.2rem)]"
                        : "text-[clamp(3rem,4.5vw,5rem)]"
                    }
                  `}
                >
                  {plan.price}
                </p>

                <p className="mt-6 max-w-[380px] text-sm leading-7 text-[#9A9791]">
                  {plan.description}
                </p>
              </div>

              {/* FEATURES */}

              <div className="py-8">
                <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#77736D]">
                  Includes
                </p>

                <div>
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 border-b border-white/[0.08] py-3.5"
                    >
                      <span className="text-xs text-[#FF6B22]">
                        +
                      </span>

                      <p className="text-sm text-[#C7C3BC]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className={`
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    hover:-translate-y-0.5

                    ${
                      plan.popular
                        ? "bg-[#FF6B22] hover:bg-[#F3F0E9]"
                        : "border border-white/[0.16] hover:border-[#FF6B22] hover:bg-[#FF6B22]"
                    }
                  `}
                >
                  {/* CTA TEXT */}
                  <span
                    className={`
                      transition-colors
                      duration-200

                      ${
                        plan.popular
                          ? "text-[#171717]"
                          : "text-[#F3F0E9] group-hover:text-[#171717]"
                      }
                    `}
                  >
                    {plan.cta}
                  </span>

                  {/* SVG ARROW */}
                  <span
                    className={`
                      transition-all
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      ${
                        plan.popular
                          ? "text-[#171717]"
                          : "text-[#F3F0E9] group-hover:text-[#171717]"
                      }
                    `}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            PRICING NOTE
        ===================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/[0.12] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#77736D]">
            Transparent • Flexible • Project-Based
          </p>

          <p className="max-w-[620px] text-sm leading-6 text-[#8E8A84] sm:text-right">
            Prices shown are starting prices. Final pricing may vary depending
            on project scope, features, content and custom requirements.
          </p>
        </div>
      </div>
    </section>
  );
}