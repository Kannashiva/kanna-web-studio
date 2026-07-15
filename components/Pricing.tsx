import Reveal from "./Reveal";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

const plans = [
  {
    name: "Starter Website",
    description:
      "Perfect for startups and small businesses beginning their online journey.",
    price: "₹15,000",
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
    price: "₹30,000",
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
    price: "₹50,000+",
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
        className="relative overflow-hidden bg-[#050505] py-24 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              PRICING
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
              Website Packages
              <span className="block text-[#D4AF37]">
                For Every Business
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Transparent pricing with no hidden costs. Choose the perfect
              package to grow your business online.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  ${
                    plan.popular
                      ? "border-[#D4AF37] bg-[#111111] shadow-[0_20px_60px_rgba(212,175,55,0.25)] scale-105"
                      : "border-[#D4AF37]/20 bg-[#111111] hover:border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]"
                  }
                `}
              >

                {/* Popular Badge */}

                {plan.popular && (

                  <div
                    className="
                    absolute
                    left-1/2
                    -top-5
                    -translate-x-1/2
                    rounded-full
                    bg-[#D4AF37]
                    px-6
                    py-2
                    text-sm
                    font-bold
                    text-black
                    shadow-lg
                    "
                  >
                    <div className="flex items-center gap-2">
                      <FaCrown />
                      Most Popular
                    </div>
                  </div>

                )}

                <h3 className="mt-4 text-3xl font-bold">
                  {plan.name}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {plan.description}
                </p>

                {/* Price */}

                <div className="mt-10">

                  <span className="text-5xl font-black text-[#D4AF37]">
                    {plan.price}
                  </span>

                  <p className="mt-2 text-gray-500">
                    One-time payment
                  </p>

                </div>

                {/* Features */}

                <ul className="mt-10 space-y-5">

                  {plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-300"
                    >

                      <FaCheckCircle className="text-[#D4AF37]" />

                      {feature}

                    </li>

                  ))}

                </ul>

                {/* CTA */}

                <a
                  href="#contact"
                  className={`
                    mt-12
                    block
                    rounded-xl
                    py-4
                    text-center
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      plan.popular
                        ? "bg-[#D4AF37] text-black hover:bg-[#E5C158] hover:scale-105 hover:shadow-[0_10px_35px_rgba(212,175,55,0.45)]"
                        : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-105"
                    }
                  `}
                >
                  Get Free Consultation
                </a>

              </div>

            ))}

          </div>

          {/* Bottom Text */}

          <div className="mt-20 text-center">

            <p className="text-gray-400 text-lg">
              Need something unique?
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              We also build
              <span className="text-[#D4AF37]">
                {" "}Custom Websites
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              Every business is different. If your requirements don't fit into
              these packages, we'll create a custom solution tailored to your
              goals and budget.
            </p>

          </div>

        </div>
      </section>
    </Reveal>
  );
}