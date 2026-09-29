"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] =
    useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!form.current || isSending) return;

    try {
      setIsSending(true);
      setStatus("idle");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      form.current.reset();

      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        bg-[var(--background-alt)]
        py-16
        text-[var(--foreground)]
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
      "
    >
      <div className="site-container">
        {/* HEADER */}

        <div className="grid gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6B22] sm:text-xs">
              Start a Project
            </p>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[var(--muted)]">
              Have an idea, business or brand that needs a website? Tell us
              what you&apos;re planning and let&apos;s explore how we can
              bring it online.
            </p>
          </div>

          <h2 className="text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            Have a project
            <br />
            in mind?{" "}
            <span className="text-[#FF6B22]">
              Let&apos;s talk.
            </span>
          </h2>
        </div>

        {/* CONTACT AREA */}

        <div className="grid gap-14 py-12 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-20">
          {/* LEFT */}

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
                Get in touch
              </p>

              <h3 className="mt-5 max-w-[420px] text-[clamp(2.2rem,3.7vw,4rem)] font-medium leading-[1] tracking-[-0.05em]">
                Let&apos;s build something{" "}
                <span className="text-[#FF6B22]">
                  worth remembering.
                </span>
              </h3>

              <p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[var(--muted)] sm:text-[16px] sm:leading-8">
                Whether you&apos;re starting from scratch or improving an
                existing digital presence, share your idea and we&apos;ll
                take it from there.
              </p>
            </div>

            {/* DIRECT CONTACT */}

            <div className="mt-12 border-t border-[var(--border)] lg:mt-20">
              <a
                href="mailto:kannawebstudio@gmail.com"
                className="group flex items-center justify-between gap-5 border-b border-[var(--border)] py-5"
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                    Email
                  </p>

                  <p className="mt-2 text-sm font-medium sm:text-base">
                    kannawebstudio@gmail.com
                  </p>
                </div>

                <span className="text-lg text-[#FF6B22] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="https://wa.me/918143218054?text=Hi%20Kanna%20Web%20Studio%2C%20I%27m%20interested%20in%20building%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-5 border-b border-[var(--border)] py-5"
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-sm font-medium sm:text-base">
                    +91 81432 18054
                  </p>
                </div>

                <span className="text-lg text-[#FF6B22] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <div className="flex items-center justify-between gap-5 border-b border-[var(--border)] py-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                    Based in
                  </p>

                  <p className="mt-2 text-sm font-medium sm:text-base">
                    Hyderabad, India
                  </p>
                </div>

                <span className="h-2 w-2 rounded-full bg-[#FF6B22]" />
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}

          <div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* NAME */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  sm:px-6
                  sm:py-6
                "
              >
                <label
                  htmlFor="name"
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--muted)]
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[var(--foreground)]
                    outline-none
                    focus:outline-none
                    focus-visible:!outline-none
                    placeholder:text-[var(--muted)]
                    placeholder:opacity-45
                    sm:text-[19px]
                  "
                />
              </div>

              {/* EMAIL */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  sm:px-6
                  sm:py-6
                "
              >
                <label
                  htmlFor="email"
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--muted)]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[var(--foreground)]
                    outline-none
                    focus:outline-none
                    focus-visible:!outline-none
                    placeholder:text-[var(--muted)]
                    placeholder:opacity-45
                    sm:text-[19px]
                  "
                />
              </div>

              {/* SUBJECT */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  sm:px-6
                  sm:py-6
                "
              >
                <label
                  htmlFor="subject"
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--muted)]
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What can we help you with?"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    text-[17px]
                    font-medium
                    text-[var(--foreground)]
                    outline-none
                    focus:outline-none
                    focus-visible:!outline-none
                    placeholder:text-[var(--muted)]
                    placeholder:opacity-45
                    sm:text-[19px]
                  "
                />
              </div>

              {/* MESSAGE */}

              <div
                className="
                  rounded-[18px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  sm:px-6
                  sm:py-6
                "
              >
                <label
                  htmlFor="message"
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[var(--muted)]
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    bg-transparent
                    text-[17px]
                    font-medium
                    leading-7
                    text-[var(--foreground)]
                    outline-none
                    focus:outline-none
                    focus-visible:!outline-none
                    placeholder:text-[var(--muted)]
                    placeholder:opacity-45
                    sm:text-[19px]
                  "
                />
              </div>

              {/* SUBMIT */}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    bg-[#FF6B22]
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-[#171717]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[var(--foreground)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  <span className="transition-colors duration-200 group-hover:text-[var(--background-alt)]">
                    {isSending ? "Sending..." : "Send Enquiry"}
                  </span>

                  <span className="transition-colors duration-200 group-hover:text-[var(--background-alt)]">
                    ↗
                  </span>
                </button>

                {status === "success" && (
                  <p className="mt-5 text-sm font-medium text-[#2F9D61]">
                    Thank you! Your enquiry has been sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="mt-5 text-sm font-medium text-red-600">
                    Something went wrong. Please try again or contact us on
                    WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            Let&apos;s Create Something Meaningful
          </p>

          <p className="text-sm text-[var(--muted)]">
            We&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}