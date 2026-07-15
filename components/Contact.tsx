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

// Replace this file with the premium version as we continue the redesign.
// Your current EmailJS logic and component structure remain unchanged.
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
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <Reveal>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#050505] py-28 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
              CONTACT
            </p>
            <h2 className="mt-5 text-5xl md:text-6xl font-black">
              Let's Build Something Amazing
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
              Let's discuss your business idea and build a premium website that
              helps your brand stand out online.
            </p>
          </div>

          {/* Continue with your existing cards and form,
             replacing blue classes with #D4AF37 as discussed. */}

        </div>
      </section>
    </Reveal>
  );
}
