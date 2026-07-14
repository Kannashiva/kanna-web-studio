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
      "Animations",
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
      className="bg-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Simple Packages For Every Business
          </h2>

          <p className="mt-5 text-slate-600">
            Choose a package that fits your business goals.
          </p>

        </div>



        <div className="mt-16 grid md:grid-cols-3 gap-8">


          {plans.map((plan,index)=>(

            <div
              key={index}
              className={`
              rounded-2xl
              p-8
              border
              ${
                plan.popular
                ? "border-blue-600 shadow-xl scale-105"
                : "border-slate-200"
              }
              `}
            >


              {plan.popular && (
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}


              <h3 className="mt-5 text-2xl font-bold">
                {plan.name}
              </h3>


              <p className="mt-3 text-slate-600">
                {plan.description}
              </p>


              <h4 className="mt-6 text-4xl font-bold text-blue-600">
                {plan.price}
              </h4>


              <ul className="mt-6 space-y-3">

                {plan.features.map((feature,i)=>(

                  <li key={i}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>


              <a
                href="#contact"
                className="
                mt-8
                block
                text-center
                rounded-xl
                bg-blue-600
                text-white
                py-3
                hover:bg-blue-700
                transition
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