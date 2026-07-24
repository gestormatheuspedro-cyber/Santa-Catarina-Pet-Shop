import { useState, useEffect } from "react";
import { X, Calendar, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import realDogImg from "../assets/images/real_groomed_dog_avatar_1784850629909.jpg";

export default function WhatsappFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none pointer-events-none">
          {/* Animated Call-to-Action Message Bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="pointer-events-auto relative bg-white border border-primary/20 text-text-base rounded-2xl p-3.5 sm:p-4 shadow-xl max-w-[260px] sm:max-w-[290px] mr-1"
              >
                {/* Close speech bubble button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-text-base text-white flex items-center justify-center hover:bg-primary transition-colors focus:outline-none shadow-md z-10"
                  aria-label="Fechar mensagem"
                >
                  <X size={12} />
                </button>

                {/* Speech bubble tail pointing to the dog */}
                <div className="absolute -bottom-2 right-7 sm:right-9 w-4 h-4 bg-white border-r border-b border-primary/20 rotate-45" />

                {/* Content Link */}
                <a
                  href="https://wa.me/5547984614756?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1.5 group"
                >
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-primary uppercase tracking-wider">
                    <Calendar size={13} className="animate-pulse" />
                    <span>Agendamento Rápido</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-text-base leading-tight group-hover:text-primary transition-colors">
                    🐾 Agende o banho ou consulta do seu pet direto pelo WhatsApp!
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#25D366] px-3.5 py-1.5 rounded-full w-fit mt-1 shadow-sm group-hover:bg-[#20bd5a] transition-colors">
                    <MessageCircle size={13} className="fill-current" />
                    <span>Conversar no WhatsApp</span>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Mascot & WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -6, 0]
            }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ 
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.3 },
              scale: { type: "spring", damping: 18 }
            }}
            className="pointer-events-auto relative group"
          >
            <a
              href="https://wa.me/5547984614756?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar atendimento no WhatsApp do Santa Catarina Pet Shop"
              className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white p-1 border-2 border-primary shadow-lg transition-transform duration-300 hover:scale-108 active:scale-95"
            >
              {/* Inner Circle Avatar */}
              <div className="w-full h-full rounded-full overflow-hidden bg-primary-50 relative flex items-center justify-center">
                <img
                  src={realDogImg}
                  alt="Atendimento Santa Catarina Pet Shop"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Paw Badge at Top Right */}
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs shadow-md border-2 border-white">
                🐾
              </div>

              {/* WhatsApp Green Badge Indicator at Bottom Right */}
              <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md border-2 border-white group-hover:scale-110 transition-transform">
                <MessageCircle size={15} className="fill-current text-white" />
              </div>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


