import { useState, useEffect } from "react";
import { X, MessageCircle, PawPrint } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsappFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/5547984614756?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet.";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 select-none pointer-events-none">
          {/* Single Phrase Compact Message Bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="pointer-events-auto relative bg-white border border-slate-200 text-slate-800 rounded-2xl px-3.5 py-2.5 shadow-xl max-w-[240px] sm:max-w-[270px] mr-1"
              >
                {/* Close button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-700 hover:bg-slate-900 text-white flex items-center justify-center transition-colors focus:outline-none shadow-md z-20 cursor-pointer"
                  aria-label="Fechar mensagem"
                >
                  <X size={11} />
                </button>

                {/* Speech bubble tail */}
                <div className="absolute -bottom-1.5 right-6 sm:right-7 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />

                {/* Compact Single Phrase Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <p className="text-xs font-semibold text-slate-800 group-hover:text-primary transition-colors leading-tight">
                    🐾 Agende o banho ou consulta do seu pet pelo WhatsApp! ✨
                  </p>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Paw + WhatsApp Trigger Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 18 }}
            className="pointer-events-auto relative group"
          >
            {/* Pulsing Orange Ripple Rings */}
            <span className="absolute inset-0 rounded-full bg-orange-500 opacity-40 animate-ping pointer-events-none" />
            <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-primary opacity-40 blur-md group-hover:opacity-75 transition-opacity pointer-events-none" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar atendimento no WhatsApp do Santa Catarina Pet Shop"
              className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-orange-500 via-amber-600 to-primary text-white shadow-xl shadow-orange-500/40 border-2 border-white transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
            >
              {/* Animated Paw Icon */}
              <motion.div
                animate={{
                  rotate: [0, -12, 12, -8, 8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center"
              >
                <PawPrint className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white/20 transform -rotate-12" />
              </motion.div>

              {/* Small Green WhatsApp Indicator Badge */}
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md border-2 border-white">
                <MessageCircle size={15} className="fill-current text-white" />
              </div>

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-extrabold border-2 border-white shadow-sm animate-pulse">
                1
              </div>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}



