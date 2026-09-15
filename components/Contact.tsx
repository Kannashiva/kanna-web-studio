"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Reveal from "./Reveal";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "+91 8143218054",
      description: "Speak directly with us",
      href: "tel:+918143218054",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "kannawebstudio@gmail.com",
      description: "Send your project requirements",
      href: "mailto:kannawebstudio@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Based In",
      value: "Hyderabad, India",
      description: "Working with businesses online",
      href: "https://maps.google.com/?q=Hyderabad,India",
    },
  ];

  return (
    <Reveal>
      <section
        id="contact"
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

        {/* ================= MAIN ================= */}

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

              Contact
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
              Have a Project

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
                In Mind?
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
              Tell us about your business and what you&apos;re looking for.
              We&apos;ll discuss your requirements and help you choose the
              right website solution.
            </p>

          </div>

          {/* ================= CONTACT GRID ================= */}

          <div
            className="
              mt-14
              grid
              gap-8
              sm:mt-16
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-10
            "
          >

            {/* ================= LEFT SIDE ================= */}

            <div className="flex flex-col">

              {/* Intro */}

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#D4AF37]
                  "
                >
                  Let&apos;s Talk
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                  "
                >
                  Start Your Website Project
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-gray-400
                    sm:text-base
                  "
                >
                  Whether you need a business website, restaurant website,
                  product showcase, landing page or portfolio, we&apos;re
                  ready to discuss your idea.
                </p>
              </div>

              {/* ================= CONTACT CARDS ================= */}

              <div className="mt-8 space-y-3">

                {contactCards.map((card) => (

                  <a
                    key={card.title}
                    href={card.href}
                    target={
                      card.title === "Based In"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      card.title === "Based In"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-[#0C0C0C]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[#D4AF37]/35
                      hover:bg-[#10100E]
                      sm:p-5
                    "
                  >

                    {/* Icon */}

                    <span
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#D4AF37]/20
                        bg-[#D4AF37]/10
                        text-lg
                        text-[#D4AF37]
                        transition-all
                        duration-300
                        group-hover:border-[#D4AF37]
                        group-hover:bg-[#D4AF37]
                        group-hover:text-black
                      "
                    >
                      {card.icon}
                    </span>

                    {/* Details */}

                    <div className="min-w-0 flex-1">

                      <p className="text-xs text-gray-500">
                        {card.title}
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-sm
                          font-semibold
                          text-white
                          sm:text-base
                        "
                      >
                        {card.value}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {card.description}
                      </p>

                    </div>

                    <FaArrowRight
                      className="
                        shrink-0
                        text-xs
                        text-gray-700
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#D4AF37]
                      "
                    />

                  </a>

                ))}

              </div>

              {/* ================= WHATSAPP CTA ================= */}

              <a
                href="https://wa.me/918143218054?text=Hi%20Kanna%20Web%20Studio%2C%20I%27m%20interested%20in%20building%20a%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-5
                  flex
                  items-center
                  justify-between
                  gap-5
                  rounded-2xl
                  border
                  border-[#D4AF37]/25
                  bg-[#D4AF37]/[0.07]
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:bg-[#D4AF37]/10
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]
                      text-xl
                      text-black
                    "
                  >
                    <FaWhatsapp />
                  </span>

                  <div>

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-white
                        sm:text-base
                      "
                    >
                      Prefer WhatsApp?
                    </p>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Send us your requirements directly
                    </p>

                  </div>

                </div>

                <FaArrowRight
                  className="
                    shrink-0
                    text-sm
                    text-[#D4AF37]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </a>

              {/* Trust Points */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-3
                  text-xs
                  text-gray-500
                  sm:text-sm
                "
              >

                {[
                  "Direct Communication",
                  "Clear Pricing",
                  "Personal Support",
                ].map((item) => (

                  <span
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <FaCheck className="text-[10px] text-[#D4AF37]" />
                    {item}
                  </span>

                ))}

              </div>

            </div>

            {/* ================= FORM SIDE ================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-[#0C0C0C]
                p-5
                sm:p-7
                lg:p-8
              "
            >

              {/* Form Top Accent */}

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
                  via-[#D4AF37]
                  to-transparent
                "
              />

              {/* Form Header */}

              <div className="mb-7">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#D4AF37]
                  "
                >
                  Project Enquiry
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Tell Us About Your Project
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill in the details below and we&apos;ll get back to you
                  shortly.
                </p>

              </div>

              {/* ================= FORM ================= */}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >

                {/* Name */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
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
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070707]
                      px-4
                      py-4
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-700
                      focus:border-[#D4AF37]/70
                      focus:ring-2
                      focus:ring-[#D4AF37]/10
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070707]
                      px-4
                      py-4
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-700
                      focus:border-[#D4AF37]/70
                      focus:ring-2
                      focus:ring-[#D4AF37]/10
                    "
                  />

                </div>

                {/* Subject */}

                <div>

                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Project / Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Example: Business Website"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070707]
                      px-4
                      py-4
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-700
                      focus:border-[#D4AF37]/70
                      focus:ring-2
                      focus:ring-[#D4AF37]/10
                    "
                  />

                </div>

                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-gray-300
                    "
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business and website requirements..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070707]
                      px-4
                      py-4
                      text-sm
                      leading-6
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-700
                      focus:border-[#D4AF37]/70
                      focus:ring-2
                      focus:ring-[#D4AF37]/10
                    "
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    bg-[#D4AF37]
                    px-6
                    py-4
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-[#E5C158]
                    hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {/* Shine */}

                  {!loading && (
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
                        group-hover:left-[120%]
                      "
                    />
                  )}

                  <FaPaperPlane className="relative z-10 text-sm" />

                  <span className="relative z-10">
                    {loading
                      ? "Sending Message..."
                      : "Send Project Enquiry"}
                  </span>

                </button>

              </form>

              {/* Privacy / Response */}

              <p
                className="
                  mt-5
                  text-center
                  text-xs
                  leading-6
                  text-gray-600
                "
              >
                Your details are only used to respond to your project enquiry.
              </p>

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}