import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5513997591781"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-[#25D366] text-white p-4 md:px-5 md:py-3.5 rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300"
      style={{
        boxShadow: "0 10px 25px -5px rgba(37, 211, 102, 0.4), 0 8px 10px -6px rgba(37, 211, 102, 0.2)",
      }}
    >
      <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />
      <span className="font-semibold text-sm hidden md:inline-block">Falar com especialista</span>
    </a>
  );
}
