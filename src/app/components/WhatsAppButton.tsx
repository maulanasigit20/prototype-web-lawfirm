import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "6281234567890",
  message = "Halo, saya ingin berkonsultasi mengenai layanan hukum di Jalasena Bhiksa.",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Label */}
      <div
        className={`bg-[#0c1630] text-[#dce6f5] text-xs font-semibold px-3 py-2 rounded-md border border-[#c9a227]/40 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Konsultasi via WhatsApp
      </div>

      {/* Tombol Utama */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Hubungi kami via WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#20ba5a]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}