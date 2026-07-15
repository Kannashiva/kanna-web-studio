import Reveal from "./Reveal";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes around 2–4 weeks depending on the number of pages and custom features required.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. I can help you purchase the right domain, choose reliable hosting, and complete the entire setup process.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely! Every website is fully responsive and optimized for mobile, tablet, laptop, and desktop devices.",
  },
  {
    question: "Can I update my website in the future?",
    answer:
      "Yes. You can request updates anytime, and I also offer website maintenance plans for ongoing support.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. Every website is built with SEO best practices, fast loading speed, clean code, and optimized structure.",
  },
];

export default function FAQ() {
  return (
    <Reveal>
      <section
        id="faq"
        className="relative overflow-hidden bg-[#050505] py-28 text-white"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              FAQ
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-black">
              Frequently Asked
              <span className="block text-[#D4AF37]">
                Questions
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 max-w-3xl mx-auto">
              Everything you need to know before starting your website project
              with Kanna Web Studio.
            </p>

          </div>

          {/* FAQ Cards */}

          <div className="mt-16 space-y-8">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="
                group
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D4AF37]
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]
                "
              >

                <div className="flex items-start gap-5">

                  {/* Icon */}

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#D4AF37]
                    text-black
                    text-2xl
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                    "
                  >
                    <FaQuestionCircle />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {faq.question}
                    </h3>

                    <div className="my-5 h-px w-24 bg-[#D4AF37]/40"></div>

                    <p className="leading-8 text-gray-400">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}