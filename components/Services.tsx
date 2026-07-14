import Reveal from "./Reveal";
export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Business Websites",
      description:
        "Professional websites that help businesses build trust, showcase services, and attract more customers online.",
      features: [
        "Modern UI Design",
        "Mobile Responsive",
        "SEO Optimized",
      ],
    },

    {
      icon: "🍔",
      title: "Restaurant Websites",
      description:
        "Beautiful restaurant websites with menus, galleries, location details, and easy customer engagement.",
      features: [
        "Digital Menu",
        "Google Maps Integration",
        "WhatsApp Booking",
      ],
    },

    {
      icon: "🚀",
      title: "Landing Pages",
      description:
        "High-converting landing pages designed for promotions, campaigns, and product launches.",
      features: [
        "Fast Loading",
        "Conversion Focused",
        "Call-to-Action Design",
      ],
    },

    {
      icon: "⚙️",
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated, and running smoothly with ongoing support.",
      features: [
        "Content Updates",
        "Performance Checks",
        "Technical Support",
      ],
    },
  ];


  return (
  <Reveal>
    <section
      id="services"
      className="bg-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Solutions Designed To
            <br />
            Grow Your Business Online
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            I create modern digital experiences that help businesses
            establish a strong online presence.
          </p>

        </div>



        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {services.map((service, index) => (

            <div
              key={index}
              className="
              group
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition
              duration-300
              "
            >


              <div className="text-4xl">
                {service.icon}
              </div>


              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>


              <p className="mt-4 text-slate-600 leading-7">
                {service.description}
              </p>


              <ul className="mt-6 space-y-3 text-sm text-slate-700">

                {service.features.map((feature, i) => (

                  <li key={i}>
                    ✓ {feature}
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