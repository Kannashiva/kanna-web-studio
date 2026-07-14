import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918143218054"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      gap-3
      rounded-full
      bg-green-600
      px-5
      py-3
      text-white
      shadow-lg
      hover:bg-green-700
      hover:scale-105
      transition
      "
    >
      <FaWhatsapp className="text-3xl" />

      <span className="font-semibold">
        Chat With Us
      </span>

    </a>
  );
}