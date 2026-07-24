import { FAQS } from "../data";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq1"); // First one open by default

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24 h-fit">
            <span className="inline-block w-fit px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Dúvidas frequentes
            </span>
            <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
              Tem alguma dúvida sobre <em className="italic text-primary">nossos serviços?</em>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
              Separamos as perguntas mais comuns dos nossos clientes para te ajudar a entender melhor como funciona a nossa rotina, cuidados e agendamentos.
            </p>
            <div className="p-4 rounded-xl bg-bg-soft border border-border-light flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-brand/10 text-green-brand flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-1">
                  Não achou o que procurava?
                </h4>
                <p className="font-sans text-2xs sm:text-xs text-text-secondary leading-normal mb-2">
                  Nossa equipe está sempre disponível para bater um papo e tirar suas dúvidas direto no WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5547984614756" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-green-brand hover:text-green-brand-dark transition-colors"
                >
                  Chamar no WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen 
                      ? "border-primary-light bg-primary-50/10 shadow-sm" 
                      : "border-border-light bg-bg-soft hover:border-text-muted hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between text-left p-4 sm:p-5 font-sans font-bold text-sm sm:text-base text-text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-45" : "bg-white text-text-secondary shadow-sm"
                    }`}>
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-5 pt-0 sm:pt-0 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-dashed border-border-light mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
