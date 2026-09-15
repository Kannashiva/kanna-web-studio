import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918143218054"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kanna Web Studio on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-600
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:bg-green-700

        md:bottom-6
        md:right-6
        md:h-auto
        md:w-auto
        md:gap-3
        md:px-5
        md:py-3
      "
    >
      <FaWhatsapp className="text-3xl" />

      <span className="hidden font-semibold md:inline">
        Chat With Us
      </span>
    </a>
  );
}