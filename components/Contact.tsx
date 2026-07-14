import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaPhoneAlt className="text-blue-500 text-2xl" />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: <FaEnvelope className="text-red-500 text-2xl" />,
    title: "Email",
    value: "your@email.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-green-500 text-2xl" />,
    title: "Location",
    value: "Hyderabad, Telangana",
  },
];

const socials = [
  {
    icon: <FaWhatsapp className="text-3xl text-green-500" />,
    href: "#",
  },
  {
    icon: <FaInstagram className="text-3xl text-pink-500" />,
    href: "#",
  },
  {
    icon: <FaGithub className="text-3xl text-white" />,
    href: "#",
  },
  {
    icon: <FaLinkedin className="text-3xl text-blue-500" />,
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Let's create a modern website for your business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {contacts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-12 flex justify-center gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              className="transition hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}