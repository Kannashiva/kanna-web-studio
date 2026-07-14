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
  FaInstagram,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhoneAlt className="text-2xl" />,
    title: "Phone",
    value: "+91 81432 18054",
    link: "tel:+918143218054",
    color: "bg-blue-600",
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: "Email",
    value: "kannawebstudio@gmail.com",
    link: "mailto:kannawebstudio@gmail.com",
    color: "bg-red-600",
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: "Location",
    value: "Hyderabad, Telangana",
    color: "bg-green-600",
  },
];

const socials = [
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/918143218054",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/kannawebstudio/",
  },
];

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
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <Reveal>
      <section
        id="contact"
        className="bg-slate-950 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
              Contact
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Let's Build Something Amazing
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
              Have a website idea or business project?
              Let's discuss how Kanna Web Studio can help
              you build a strong online presence.
            </p>

          </div>

          {/* Contact Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {contacts.map((item) => (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  text-center
                  hover:-translate-y-2
                  hover:border-blue-500
                  transition
                "
              >

                <div
                  className={`
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    ${item.color}
                    text-white
                  `}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {item.link ? (
                  <a
                    href={item.link}
                    className="mt-3 block text-slate-400 hover:text-blue-400 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-slate-400">
                    {item.value}
                  </p>
                )}

              </div>

            ))}

          </div>

          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8"
          >

            <h3 className="text-2xl font-bold text-white">
              Send a Project Inquiry
            </h3>

            <p className="mt-2 text-slate-400">
              Tell me about your project and I'll get back to you as soon as possible.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="business"
                placeholder="Business Name"
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

            </div>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

          </form>

          {/* WhatsApp CTA */}

          <div className="mt-16 flex flex-col items-center">

            <a
              href="https://wa.me/918143218054"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-green-600
                px-8
                py-4
                text-white
                font-semibold
                hover:bg-green-700
                transition
              "
            >

              <FaWhatsapp />

              Start Project Discussion

            </a>

            {/* Social Icons */}

            <div className="mt-10 flex gap-8">

              {socials.map((social, index) => (

                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-3xl
                    text-slate-300
                    hover:text-blue-400
                    hover:scale-125
                    transition
                  "
                >

                  {social.icon}

                </a>

              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}