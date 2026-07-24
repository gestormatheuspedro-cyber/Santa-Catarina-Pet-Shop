import { MessageSquare, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-12 sm:py-16 lg:py-20 text-white border-b border-white/5">
      
      {/* Decorative Circles (Pseudo-elements alternative) */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-12 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          
          {/* Headline Text */}
          <div className="text-center lg:text-left">
            <h2 className="clamp-heading font-serif text-white font-bold leading-tight mb-3">
              Agende o melhor cuidado para <em className="italic text-amber-200 font-serif font-normal">seu pet.</em>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/90 font-light max-w-lg">
              Clique abaixo para agendar um atendimento direto pelo WhatsApp com confirmação imediata. Seu amiguinho merece esse carinho!
            </p>
          </div>

          {/* Action Buttons (Stacked on mobile, row on desktop) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
            {/* Green WhatsApp button */}
            <motion.a
              href="https://wa.me/5547984614756"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-brand hover:bg-green-brand-dark text-white font-sans font-bold text-xs sm:text-sm shadow-lg shadow-black/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={18} className="fill-current" />
              Agendar pelo WhatsApp
            </motion.a>

            {/* Outline Phone button */}
            <motion.a
              href="tel:4730273380"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/30 hover:bg-white/10 text-white font-sans font-bold text-xs sm:text-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} />
              (47) 3027-3380
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
