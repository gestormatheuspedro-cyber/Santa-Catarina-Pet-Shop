import { X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navLinks = [
    { label: "Início", href: "#top" },
    { label: "Serviços", href: "#servicos" },
    { label: "Banho & Tosa", href: "#banho-tosa" },
    { label: "Estrutura", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Veterinária", href: "#veterinaria" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#1A1A2E]/97 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Brand & Close */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary/30 bg-white shrink-0 shadow-sm">
                    <img
                      src="https://lh3.googleusercontent.com/d/144xPtER3_e8_QasjfEGHWigV-BWs9XxU"
                      alt="Logo Santa Catarina Pet Shop"
                      className="w-full h-full object-cover object-center scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-extrabold text-xs tracking-wider text-white">
                      SANTA CATARINA
                    </span>
                    <span className="font-serif italic text-primary text-xs">
                      Pet Shop
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-sans font-bold text-sm text-white/90 hover:text-primary border-b border-white/5 py-3.5 transition-colors block"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href="tel:4730273380"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/20 text-white hover:bg-white/5 font-sans font-bold text-xs sm:text-sm transition-all"
              >
                <Phone size={14} />
                (47) 3027-3380
              </a>
              
              <a
                href="#agendamento"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white hover:bg-primary-dark font-sans font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Calendar size={14} />
                AGENDAR AGORA
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
