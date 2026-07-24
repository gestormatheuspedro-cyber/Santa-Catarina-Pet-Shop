import { Menu, Phone, Calendar, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenMenu: () => void;
}

export default function Hero({ onOpenMenu }: HeroProps) {
  const avatars = [
    "https://lh3.googleusercontent.com/d/1Uu51LHnQf1SKqz3W6jtZNOq06xATblZz",
    "https://lh3.googleusercontent.com/d/1OdzpPSi76UbIrmOdBAFcIJZHYo6-G_em",
    "https://lh3.googleusercontent.com/d/1Hp_YTqIcvXjRJ61jRJMjG87NLRWsI_HP",
    "https://lh3.googleusercontent.com/d/1DmS67boO-PPfBQUCEf9rGblWsBnMBU6w"
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Header Navigation - Clean Editorial Style */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] sm:h-[88px] flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-border-light shadow-2xs overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="https://lh3.googleusercontent.com/d/144xPtER3_e8_QasjfEGHWigV-BWs9XxU"
                alt="Logo Santa Catarina Pet Shop"
                className="w-full h-full object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-extrabold text-xs sm:text-sm tracking-widest text-text-base uppercase leading-none">
                SANTA CATARINA
              </span>
              <span className="font-serif italic text-primary text-base leading-none mt-0.5">
                Pet Shop
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest text-[#4A5568]">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#banho-tosa" className="hover:text-primary transition-colors">Banho & Tosa</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Estrutura</a>
            <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right mr-2">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider leading-none mb-1">ATENDIMENTO</p>
              <p className="text-xs sm:text-sm font-semibold text-text-base leading-none">(47) 3027-3380</p>
            </div>

            {/* Green WhatsApp Call-to-action */}
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-brand hover:bg-green-brand-dark text-white font-sans font-bold text-xs transition-all shadow-sm hover:shadow-md"
            >
              <Calendar size={13} />
              AGENDAR AGORA
            </a>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={onOpenMenu}
            className="lg:hidden flex flex-col gap-1.5 items-center justify-center p-2.5 rounded-xl bg-bg-soft border border-border-light text-text-base focus:outline-none hover:bg-border-light transition-all"
            aria-label="Abrir menu"
          >
            <div className="w-5 h-0.5 bg-text-base rounded-full" />
            <div className="w-4 h-0.5 bg-text-base rounded-full align-left self-start" />
          </button>

        </div>
      </nav>

      {/* 2. Full Background Hero Section - Premium & Ultra-Polished */}
      <header
        id="top"
        className="relative min-h-[100dvh] min-h-[100svh] w-full flex flex-col justify-center items-start px-5 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-12 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/d/1ugTLtdU4rgVJ0vTYTNx0LAuhjNWAyzMC')",
        }}
      >
        {/* Soft background gradient overlay so text is 100% legible on mobile & desktop */}
        <div className="absolute inset-0 sm:inset-y-0 sm:right-auto sm:left-0 w-full sm:w-[58%] bg-gradient-to-t sm:bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none z-0" />

        {/* Content Aligned Left over luxury backdrop */}
        <div className="relative z-10 w-full max-w-[540px] flex flex-col items-start text-left">
          
          {/* Social Proof Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-3 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full border border-white/80 shadow-xs"
          >
            <div className="flex -space-x-1.5">
              {avatars.slice(0, 3).map((av, index) => (
                <img
                  key={index}
                  src={av}
                  alt="Avaliação Google"
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 rounded-full border border-white object-cover shrink-0"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                <Star size={12} fill="currentColor" />
              </div>
              <span className="text-[11px] font-bold text-[#1A1A2E] tracking-tight">
                4.9 no Google <span className="text-text-muted font-normal">| +183 avaliações</span>
              </span>
            </div>
          </motion.div>

          {/* Main Title - Elegant Instrument Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-[#1A1A2E] text-[clamp(2.4rem,5.5vw,5rem)] tracking-tight leading-[1.08] mb-3 sm:mb-4"
          >
            Mais que um pet shop.<br />
            <span className="italic text-primary font-normal">Um lugar de amor e cuidado. ♡</span>
          </motion.h1>

          {/* Subtitle - Refined Editorial Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-[#4A5568] leading-relaxed mb-6 sm:mb-8 max-w-[480px] font-normal"
          >
            Oferecemos banho e tosa premium com transparência total, consultório veterinário diário e carinho para o seu <strong className="font-semibold text-[#1A1A2E]">melhor amigo</strong> em <strong className="font-semibold text-[#1A1A2E]">Joinville</strong>.
          </motion.p>

          {/* Multi-layered Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5547984614756"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center sm:items-start justify-center gap-0.5 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl sm:rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary-lg transition-all duration-300 transform active:scale-98 min-h-[52px]"
            >
              <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-white/90">Agendar pelo</span>
              <span className="font-sans font-extrabold text-sm sm:text-base leading-none">WHATSAPP</span>
            </a>

            {/* Structure CTA */}
            <a
              href="#banho-tosa"
              className="flex flex-col items-center sm:items-start justify-center gap-0.5 px-8 py-4 border-2 border-primary text-primary bg-white/90 hover:bg-white rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300 min-h-[52px]"
            >
              <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-primary/80">Conheça nossa</span>
              <span className="font-serif italic text-base font-semibold leading-none">ESTRUTURA</span>
            </a>
          </motion.div>

        </div>

      </header>
    </div>
  );
}
