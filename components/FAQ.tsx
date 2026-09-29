"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most standard websites take around 1–3 weeks to complete once the required content, images and project details are available. Timelines may vary depending on the size and complexity of the project.",
  },
  {
    question: "Do I need to already have a domain and hosting?",
    answer:
      "No. If you do not have a domain or hosting yet, we can guide you through choosing and setting them up for your website.",
  },
  {
    question: "Will my website work properly on mobile devices?",
    answer:
      "Yes. Every website we build is designed to be responsive and work across mobile phones, tablets, laptops and desktop screens.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. Website maintenance and ongoing support can be provided depending on your requirements and the type of website.",
  },
  {
    question: "Is SEO included with the website?",
    answer:
      "Basic SEO setup is included with our website packages. Additional SEO requirements can be discussed depending on your project and business goals.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our Starter package begins at ₹4,999+ and our Business package begins at ₹9,999+. Custom or advanced projects are quoted based on the required features and scope.",
  },
  {
    question: "How does the payment process work?",
    answer:
      "The payment schedule and project terms are discussed and confirmed before development begins, so everything is clear before we start the project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
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
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              Frequently Asked Questions
            </p>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[var(--muted)]">
              Everything you may want to know before starting your website
              project with Kanna Web Studio.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Questions?
            <br />
            We&apos;ve got{" "}
            <span className="text-[#FF6B22]">
              answers.
            </span>
          </h2>
        </div>

        {/* =====================================================
            FAQ AREA
        ===================================================== */}

        <div className="grid gap-12 pt-12 sm:pt-16 lg:grid-cols-[0.48fr_1.52fr] lg:gap-20 lg:pt-20">
          {/* LEFT */}

          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
              Need more help?
            </p>

            <p className="mt-5 max-w-[320px] text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.045em]">
              Still have something
              <span className="text-[#FF6B22]"> in mind?</span>
            </p>

            <p className="mt-6 max-w-[300px] text-sm leading-7 text-[var(--muted)]">
              Tell us about your idea and we&apos;ll help you understand the
              best way to bring it online.
            </p>

            <a
              href="#contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#FF6B22]
                px-7
                py-4
                text-sm
                font-semibold
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[var(--foreground)]
              "
            >
              <span className="text-[#171717] transition-colors duration-200 group-hover:text-[var(--background)]">
                Ask a Question
              </span>

              <span className="text-[#171717] transition-colors duration-200 group-hover:text-[var(--background)]">
                ↗
              </span>
            </a>
          </div>

          {/* FAQ LIST */}

          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--border)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      group
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-6
                      py-7
                      text-left
                      sm:py-8
                    "
                  >
                    <div className="flex gap-5 sm:gap-7">
                      <span
                        className={`
                          mt-1
                          text-[9px]
                          font-bold
                          tracking-[0.18em]
                          transition-colors
                          duration-200

                          ${
                            isOpen
                              ? "text-[#FF6B22]"
                              : "text-[var(--muted)]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`
                          max-w-[720px]
                          text-[1.25rem]
                          font-medium
                          leading-[1.25]
                          tracking-[-0.025em]
                          transition-colors
                          duration-200
                          sm:text-[1.55rem]
                          lg:text-[1.75rem]

                          ${
                            isOpen
                              ? "text-[var(--foreground)]"
                              : "text-[var(--muted)] group-hover:text-[var(--foreground)]"
                          }
                        `}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* PLUS / MINUS */}

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-lg
                        transition-all
                        duration-200

                        ${
                          isOpen
                            ? "border-[#FF6B22] bg-[#FF6B22] text-[#171717]"
                            : "border-[var(--border)] text-[var(--foreground)] group-hover:border-[#FF6B22]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-out

                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-[38px] pr-14 sm:pl-[52px] sm:pr-20">
                        <p className="max-w-[680px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            Clear Questions • Clear Answers
          </p>

          <p className="text-sm text-[var(--muted)]">
            No complicated process. Just a conversation to get started.
          </p>
        </div>
      </div>
    </section>
  );
}