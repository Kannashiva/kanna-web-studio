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
    value: "+91 9876543210",
    href: "tel:+919876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "hello@kannawebstudio.com",
    href: "mailto:hello@kannawebstudio.com",
  },
    {icon:<FaMapMarkerAlt/>,title:"Location",value:"Hyderabad, India"},
  ];

  return (
    <Reveal>
      <section id="contact" className="relative overflow-hidden bg-[#050505] py-28 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">CONTACT</p>
            <h2 className="mt-4 text-5xl font-black">Let's Build Something Amazing</h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-400">Tell us about your project and we'll get back to you shortly.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {cards.map((c)=>(
                <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-[#D4AF37]/50 transition">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-xl">{c.icon}</div>
                    <div><h3 className="font-bold">{c.title}</h3><p className="text-gray-400">{c.value}</p></div>
                  </div>
                </div>
              ))}
            </div>

            <form ref={form} onSubmit={sendEmail} className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-5">
              <input name="name" required placeholder="Your Name" className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none focus:border-[#D4AF37]" />
              <input type="email" name="email" required placeholder="Email Address" className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none focus:border-[#D4AF37]" />
              <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none focus:border-[#D4AF37]" />
              <textarea name="message" required rows={6} placeholder="Tell us about your project..." className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none focus:border-[#D4AF37]" />
              <button disabled={loading} className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-black hover:scale-[1.02] transition">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
