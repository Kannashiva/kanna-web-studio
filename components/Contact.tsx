"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Reveal from "./Reveal";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  const cards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call",
      value: "+91 8143218054", // Replace with your number
      href: "tel:+918143218054",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "kannawebstudio@gmail.com", // Replace with your email
      href: "mailto:kannawebstudio@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Hyderabad, India",
      href: "https://maps.google.com/?q=Hyderabad,India",
    },
  ];

  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#050505] py-28 text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CONTACT
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Let's Build Something Amazing
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-gray-400">
              Tell us about your project and we'll get back to you shortly.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#D4AF37]/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-xl text-[#D4AF37]">
                      {c.icon}
                    </div>

                    <div>
                      <h3 className="font-bold">{c.title}</h3>

                      {c.href ? (
                        <a
                          href={c.href}
                          target={
                            c.title === "Location" ? "_blank" : undefined
                          }
                          rel={
                            c.title === "Location"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-gray-400 transition duration-300 hover:text-[#D4AF37]"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{c.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-[#D4AF37]"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-[#D4AF37]"
              />

              <input
                name="subject"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-[#D4AF37]"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-[#D4AF37]"
              />

              <button
                disabled={loading}
                className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}