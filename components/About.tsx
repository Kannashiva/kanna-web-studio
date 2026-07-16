import Image from "next/image";
import Reveal from "./Reveal";
import {
  FaLaptopCode,
  FaBolt,
  FaSearch,
  FaPalette,
} from "react-icons/fa";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="relative overflow-hidden bg-[#050505] py-24 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Founder */}

            <div className="flex justify-center">

              <div className="relative">

                <div
                  className="
                  relative
                  h-[500px]
                  w-[380px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#D4AF37]/30
                  bg-[#111111]
                  shadow-[0_20px_60px_rgba(212,175,55,0.18)]
                  "
                >

                  <Image
                    src="/founder/founder.jpeg"
                    alt="Founder"
                    fill
                    priority
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div
                  className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-[#D4AF37]
                  px-8
                  py-3
                  text-sm
                  font-bold
                  text-black
                  shadow-lg
                  "
                >
                  Founder
                </div>

              </div>

            </div>

            {/* Content */}

            <div>

              <span
                className="
                inline-block
                rounded-full
                border
                border-[#D4AF37]/30
                bg-[#D4AF37]/10
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#D4AF37]
                "
              >
                ABOUT
              </span>

              <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">

                Building Websites

                <span className="block text-[#D4AF37]">
                  That Grow Businesses
                </span>

              </h2>

              <h3 className="mt-8 text-3xl font-semibold">
                Hi, I'm Shiva 👋
              </h3>

              <p className="mt-6 leading-8 text-gray-400 text-lg">

                I'm the founder of
                <span className="font-semibold text-[#D4AF37]">
                  {" "}Kanna Web Studio
                </span>
                , where I help businesses establish a strong online
                presence through modern, responsive and high-performing
                websites.

              </p>

              <p className="mt-5 leading-8 text-gray-400 text-lg">

                Every website is designed with a focus on speed,
                user experience, mobile responsiveness and SEO,
                ensuring your business stands out and converts
                visitors into customers.

              </p>

              {/* Features */}

              <div className="mt-10 grid grid-cols-2 gap-5">

                {[
                  {
                    icon: <FaLaptopCode />,
                    title: "Responsive Design",
                  },
                  {
                    icon: <FaBolt />,
                    title: "Fast Performance",
                  },
                  {
                    icon: <FaSearch />,
                    title: "SEO Optimized",
                  },
                  {
                    icon: <FaPalette />,
                    title: "Modern UI / UX",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-[#D4AF37]/20
                    bg-[#111111]
                    p-5
                    transition
                    duration-300
                    hover:border-[#D4AF37]
                    hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]
                    "
                  >

                    <div className="text-2xl text-[#D4AF37]">
                      {item.icon}
                    </div>

                    <span>{item.title}</span>

                  </div>

                ))}

              </div>

              {/* Stats */}

              <div className="mt-12 grid grid-cols-3 gap-6">

                <div>

                  <h4 className="text-4xl font-black text-[#D4AF37]">
                    10+
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Projects
                  </p>

                </div>

                <div>

                  <h4 className="text-4xl font-black text-[#D4AF37]">
                    100%
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Client Support
                  </p>

                </div>

                <div>

                  <h4 className="text-4xl font-black text-[#D4AF37]">
                    24/7
                  </h4>

                  <p className="mt-2 text-gray-500">
                    Availability
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#contact"
                  className="
                  rounded-xl
                  bg-[#D4AF37]
                  px-8
                  py-4
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#E5C158]
                  hover:shadow-[0_10px_35px_rgba(212,175,55,0.45)]
                  "
                >
                  Start Your Project
                </a>

                <a
                  href="#projects"
                  className="
                  rounded-xl
                  border
                  border-[#D4AF37]
                  px-8
                  py-4
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:scale-105
                  "
                >
                  View Portfolio
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}