import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter Website",
    description:
      "Perfect for small businesses starting their online presence.",
    price: "₹15,000",
    features: [
      "3-5 Page Website",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO Setup",
    ],
  },

  {
    name: "Business Website",
    description:
      "Best for businesses looking to attract more customers online.",
    price: "₹30,000",
    popular: true,
    features: [
      "5-8 Page Website",
      "Custom UI Design",
      "Google Maps Integration",
      "Gallery / Menu Section",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },

  {
    name: "Premium Website",
    description:
      "Complete digital solution for growing brands.",
    price: "₹50,000+",
    features: [
      "Advanced UI/UX",
      "Premium Animations",
      "Custom Features",
      "Advanced SEO",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <Reveal>
      <section
        id="pricing"
        className="bg-slate-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
              Pricing
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Simple Packages For Every Business
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Transparent pricing with no hidden charges.
              Choose the package that best suits your business.
            </p>

          </div>

          {/* Pricing Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`
                  relative
                  rounded-3xl
                  border
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  ${
                    plan.popular
                      ? "border-blue-500 bg-slate-950 shadow-2xl scale-105"
                      : "border-slate-700 bg-slate-950 hover:border-blue-500"
                  }
                `}
              >

                {plan.popular && (
                  <span
                    className="
                      absolute
                      -top-4
                      left-1/2
                      -translate-x-1/2
                      rounded-full
                      bg-blue-600
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    ⭐ Most Popular
                  </span>
                )}

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-8">
                  <span className="text-5xl font-bold text-blue-500">
                    {plan.price}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">

                  {plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <span className="text-blue-400 font-bold">
                        ✓
                      </span>

                      {feature}
                    </li>

                  ))}

                </ul>

                <a
                  href="#contact"
                  className="
                    mt-10
                    block
                    rounded-xl
                    bg-blue-600
                    py-4
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Get Started
                </a>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}