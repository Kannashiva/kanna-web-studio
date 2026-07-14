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

            {contacts.map((item)=>(

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




          {/* CTA */}

          <div className="mt-12 flex flex-col items-center">


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

              {socials.map((social,index)=>(

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