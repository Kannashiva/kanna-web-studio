import Reveal from "./Reveal";

import {
  FaCheck,
  FaCrown,
  FaArrowRight,
  FaRegLightbulb,
} from "react-icons/fa";

const plans = [
  {
    name: "Starter Website",
    description:
      "Perfect for startups and small businesses beginning their online journey.",
    price: "₹4,999+",
    priceNote: "One-time payment",
    features: [
      "3–5 Page Website",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO Setup",
      "1 Month Support",
    ],
  },

  {
    name: "Business Website",
    description:
      "Ideal for businesses looking to attract more customers and build credibility.",
    price: "₹9,999+",
    priceNote: "One-time payment",
    popular: true,
    features: [
      "5–8 Page Website",
      "Custom UI Design",
      "Google Maps Integration",
      "Gallery / Menu",
      "Advanced SEO",
      "Performance Optimization",
      "3 Months Support",
    ],
  },

  {
    name: "Premium Website",
    description:
      "Complete digital solution for brands that want a premium online presence.",
    price: "Contact Us",
    priceNote: "Custom quote based on requirements",
    features: [
      "Unlimited Pages",
      "Premium UI/UX",
      "Advanced Animations",
      "Custom Features",
      "High Performance",
      "Priority Support",
      "Premium SEO",
    ],
  },
];

export default function Pricing() {
  return (
    <Reveal>
      <section
        id="pricing"
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

              Pricing
            </span>

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
              Website Packages

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
                For Every Business
              </span>
            </h2>

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
              Simple and flexible website packages designed for businesses at
              different stages of their online journey.
            </p>
          </div>

          {/* ================= PRICING GRID ================= */}

          <div
            className="
              mt-14
              grid
              gap-6
              sm:mt-16
              lg:mt-20
              lg:grid-cols-3
              lg:items-stretch
            "
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  sm:p-8
                  ${
                    plan.popular
                      ? "border-[#D4AF37]/70 bg-[#10100D] shadow-[0_20px_55px_rgba(212,175,55,0.10)]"
                      : "border-white/[0.07] bg-[#0C0C0C] hover:border-[#D4AF37]/45 hover:bg-[#10100E]"
                  }
                `}
              >
                {/* Gold Top Highlight */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-0
                    h-px
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#D4AF37]
                    to-transparent
                    transition-all
                    duration-500
                    ${
                      plan.popular
                        ? "w-3/4"
                        : "w-0 group-hover:w-2/3"
                    }
                  `}
                />

                {/* Subtle Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#D4AF37]/0
                    blur-[60px]
                    transition-all
                    duration-500
                    group-hover:bg-[#D4AF37]/8
                  "
                />

                {/* ================= POPULAR BADGE ================= */}

                {plan.popular && (
                  <div className="relative mb-6">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#D4AF37]
                        px-4
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-black
                      "
                    >
                      <FaCrown />

                      Most Popular
                    </span>
                  </div>
                )}

                {/* ================= PLAN NAME ================= */}

                <h3
                  className={`
                    relative
                    text-2xl
                    font-bold
                    transition-colors
                    duration-300
                    sm:text-3xl
                    ${
                      plan.popular
                        ? "text-[#D4AF37]"
                        : "text-white group-hover:text-[#D4AF37]"
                    }
                  `}
                >
                  {plan.name}
                </h3>

                {/* Description */}

                <p className="relative mt-4 min-h-[84px] leading-7 text-gray-400">
                  {plan.description}
                </p>

                {/* ================= PRICE ================= */}

                <div className="relative mt-7">
                  <span
                    className={`
                      font-black
                      tracking-tight
                      text-[#D4AF37]
                      ${
                        plan.price === "Contact Us"
                          ? "text-4xl"
                          : "text-4xl sm:text-5xl"
                      }
                    `}
                  >
                    {plan.price}
                  </span>

                  <p className="mt-2 text-sm text-gray-500">
                    {plan.priceNote}
                  </p>
                </div>

                {/* Divider */}

                <div
                  className="
                    my-7
                    h-px
                    bg-gradient-to-r
                    from-[#D4AF37]/25
                    via-white/[0.05]
                    to-transparent
                  "
                />

                {/* ================= INCLUDED ================= */}

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gray-600
                  "
                >
                  What&apos;s Included
                </p>

                {/* ================= FEATURES ================= */}

                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
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
                          text-[8px]
                          text-[#D4AF37]
                        "
                      >
                        <FaCheck />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ================= CTA ================= */}

                <div className="mt-auto pt-9">
                  <a
                    href="#contact"
                    className={`
                      group/button
                      relative
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      px-6
                      py-4
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        plan.popular
                          ? "bg-[#D4AF37] text-black hover:bg-[#E5C158] hover:shadow-[0_10px_30px_rgba(212,175,55,0.20)]"
                          : "border border-[#D4AF37]/50 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                      }
                    `}
                  >
                    {plan.popular && (
                      <span
                        className="
                          absolute
                          inset-y-0
                          -left-16
                          w-10
                          -skew-x-12
                          bg-white/30
                          transition-all
                          duration-700
                          group-hover/button:left-[120%]
                        "
                      />
                    )}

                    <span className="relative z-10">
                      Get Free Consultation
                    </span>

                    <FaArrowRight
                      className="
                        relative
                        z-10
                        text-xs
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ================= CUSTOM PROJECT CTA ================= */}

          <div
            className="
              relative
              mx-auto
              mt-14
              max-w-4xl
              overflow-hidden
              rounded-3xl
              border
              border-[#D4AF37]/15
              bg-[#0C0C0C]
              px-6
              py-8
              text-center
              sm:mt-16
              sm:px-10
              sm:py-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-1/2
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#D4AF37]/60
                to-transparent
              "
            />

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/10
                text-xl
                text-[#D4AF37]
              "
            >
              <FaRegLightbulb />
            </div>

            <p
              className="
                mt-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#D4AF37]
              "
            >
              Custom Requirements?
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Need Something
              <span className="text-[#D4AF37]"> Unique?</span>
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-7
                text-gray-400
              "
            >
              Every business is different. If your requirements don&apos;t fit
              these packages, we&apos;ll create a custom solution based on your
              goals, features and budget.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-6
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
              Discuss a Custom Project

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

          {/* ================= DISCLAIMER ================= */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-center
              text-xs
              leading-6
              text-gray-600
            "
          >
            Final pricing may vary depending on project requirements,
            functionality, content and third-party integrations.
          </p>

        </div>
      </section>
    </Reveal>
  );
}