import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-14">


        <div className="grid gap-10 md:grid-cols-4">


          {/* Brand */}

          <div className="md:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              Kanna 
              <span className="text-blue-500">
                {" "}Web Studio
              </span>
            </h2>


            <p className="mt-4 max-w-md text-slate-400 leading-7">
              Building modern, responsive and SEO-friendly websites
              that help restaurants, startups and local businesses
              grow online.
            </p>


            <Link
              href="#contact"
              className="
              inline-block
              mt-6
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-white
              font-semibold
              hover:bg-blue-700
              transition
              "
            >
              Start a Project
            </Link>


          </div>



          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Navigation
            </h3>


            <div className="mt-5 space-y-3 text-slate-400">


              <Link
                href="#about"
                className="block hover:text-blue-400 transition"
              >
                About
              </Link>


              <Link
                href="#services"
                className="block hover:text-blue-400 transition"
              >
                Services
              </Link>


              <Link
                href="#projects"
                className="block hover:text-blue-400 transition"
              >
                Projects
              </Link>


              <Link
                href="#contact"
                className="block hover:text-blue-400 transition"
              >
                Contact
              </Link>


            </div>

          </div>




          {/* Services */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>


            <div className="mt-5 space-y-3 text-slate-400">


              <p>
                Business Websites
              </p>

              <p>
                Restaurant Websites
              </p>

              <p>
                Landing Pages
              </p>

              <p>
                Website Maintenance
              </p>


            </div>


          </div>


        </div>




        {/* Bottom */}

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">


          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kanna Web Studio. All rights reserved.
          </p>



          <div className="flex gap-5 text-2xl">


            <a
              href="#"
              className="text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>


            <a
              href="#"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>


            <a
              href="#"
              className="text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>


            <a
              href="#"
              className="text-blue-500 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>


          </div>


        </div>


      </div>

    </footer>
  );
}