import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/918143218054?text=Hi%20Kanna%20Web%20Studio%2C%20I%27m%20interested%20in%20building%20a%20website.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kanna Web Studio on WhatsApp"
      title="Chat with us"
      className="
        group
        fixed
        bottom-5
        right-5
        z-[90]
        flex
        items-center
        gap-2.5
        rounded-full
        bg-[#25D366]
        p-3.5
        text-white
        shadow-[0_8px_28px_rgba(0,0,0,0.22)]
        transition-transform
        duration-200
        hover:-translate-y-1
        sm:bottom-6
        sm:right-6
        sm:px-5
        sm:py-3.5
      "
    >
    <SiWhatsapp className="text-[27px] text-white sm:text-[28px]" />

<span
  className="
    hidden
    text-sm
    font-semibold
    text-white
    sm:block
  "
>
  Chat with us
</span>
    </a>
  );
}