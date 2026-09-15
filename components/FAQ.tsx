"use client";

import { useState } from "react";
import Reveal from "./Reveal";

import {
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and requirements of the project. A standard business website can usually be completed within 1–3 weeks once the required content and details are available.",
  },

  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. We can guide you in choosing and purchasing a suitable domain and hosting solution, and we can also help with the complete setup and deployment process.",
  },

  {
    question: "Will my website work properly on mobile devices?",
    answer:
      "Yes. Every website we build is designed to be responsive across mobile phones, tablets, laptops and desktop screens.",
  },

  {
    question: "Can I update my website in the future?",
    answer:
      "Yes. Your website can be updated whenever required. We can also provide ongoing maintenance and support for content changes, improvements and technical updates.",
  },

  {
    question: "Is SEO included with the website?",
    answer:
      "Basic SEO setup is included with our standard websites. Depending on the selected package and requirements, additional SEO optimization can also be included.",
  },

  {
    question: "How much does a website cost?",
    answer:
      "Our Starter Website package begins at ₹4,999 and Business Website packages begin at ₹9,999. Final pricing depends on the number of pages, functionality, design requirements and integrations.",
  },

  {
    question: "How does the payment process work?",
    answer:
      "Payment terms are discussed before the project begins and depend on the project scope. The complete pricing, deliverables and payment schedule will be confirmed before development starts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Reveal>

      <section
        id="faq"
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

          {/* Top Accent */}

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

        <div className="relative z-10 mx-auto max-w-5xl px-6">

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

              FAQ

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
              Frequently Asked

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
                Questions
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
              Everything you need to know before starting your website project
              with Kanna Web Studio.
            </p>

          </div>

          {/* ================= FAQ ACCORDION ================= */}

          <div className="mt-14 space-y-3 sm:mt-16 sm:space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (

                <div
                  key={faq.question}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    sm:rounded-3xl
                    ${
                      isOpen
                        ? "border-[#D4AF37]/45 bg-[#10100E]"
                        : "border-white/[0.07] bg-[#0C0C0C] hover:border-[#D4AF37]/30"
                    }
                  `}
                >

                  {/* Active Top Line */}

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
                        isOpen
                          ? "w-2/3"
                          : "w-0"
                      }
                    `}
                  />

                  {/* ================= QUESTION ================= */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      sm:px-7
                      sm:py-6
                    "
                  >

                    {/* Question Side */}

                    <div className="flex items-center gap-4">

                      {/* Question Number */}

                      <span
                        className={`
                          hidden
                          text-xs
                          font-bold
                          tracking-[0.15em]
                          transition-colors
                          duration-300
                          sm:block
                          ${
                            isOpen
                              ? "text-[#D4AF37]"
                              : "text-gray-700"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <h3
                        className={`
                          text-base
                          font-semibold
                          leading-6
                          transition-colors
                          duration-300
                          sm:text-lg
                          ${
                            isOpen
                              ? "text-[#D4AF37]"
                              : "text-white group-hover:text-[#D4AF37]"
                          }
                        `}
                      >
                        {faq.question}
                      </h3>

                    </div>

                    {/* Plus Button */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-sm
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-45 border-[#D4AF37] bg-[#D4AF37] text-black"
                            : "border-white/10 bg-white/[0.03] text-[#D4AF37]"
                        }
                      `}
                    >
                      <FaPlus />
                    </span>

                  </button>

                  {/* ================= ANSWER ================= */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div
                        className="
                          border-t
                          border-white/[0.05]
                          px-5
                          pb-6
                          pt-5
                          sm:ml-14
                          sm:px-7
                        "
                      >
                        <p
                          className="
                            max-w-3xl
                            text-sm
                            leading-7
                            text-gray-400
                            sm:text-base
                            sm:leading-8
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div
            className="
              mt-12
              text-center
              sm:mt-14
            "
          >

            <p className="text-sm text-gray-500 sm:text-base">
              Still have a question about your website?
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
              Talk to us

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