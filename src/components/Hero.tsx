import { useState, useEffect } from "react";
import {
  Calendar,
  Star,
  Play,
  Heart,
  Stethoscope,
  MapPin,
  Smile,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenMenu: () => void;
}

export default function Hero({ onOpenMenu }: HeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trustItems = [
    {
      icon: <Heart size={16} className="text-primary shrink-0" />,
      text: "+ de 1000 Pets Atendidos",
    },
    {
      icon: <Star size={16} className="text-amber-400 fill-amber-400 shrink-0" />,
      text: "4,9 no Google",
    },
    {
      icon: <Stethoscope size={16} className="text-primary shrink-0" />,
      text: "Veterinário Diário",
    },
    {
      icon: <MapPin size={16} className="text-primary shrink-0" />,
      text: "Joinville • SC",
    },
    {
      icon: <Smile size={16} className="text-primary shrink-0" />,
      text: "Atendimento Humanizado",
    },
  ];

  return (
    <div className="relative w-full flex flex-col bg-slate-950 text-white overflow-hidden">
      {/* 1. Header Navigation - Refined Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-b border-border-light/80 shadow-xs text-text-base py-3 sm:py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10 text-white py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 ${
                isScrolled
                  ? "bg-white border-2 border-primary/20 shadow-sm"
                  : "bg-white border-2 border-white/60 shadow-lg"
              }`}
            >
              <img
                src="https://lh3.googleusercontent.com/d/144xPtER3_e8_QasjfEGHWigV-BWs9XxU"
                alt="Logo Santa Catarina Pet Shop"
                className="w-full h-full object-cover object-center scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`font-sans font-extrabold text-xs sm:text-base tracking-widest uppercase leading-none ${
                  isScrolled ? "text-text-base" : "text-white"
                }`}
              >
                SANTA CATARINA
              </span>
              <span className="font-serif italic text-primary text-sm sm:text-lg leading-none mt-1 font-semibold">
                Pet Shop
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest transition-colors ${
              isScrolled ? "text-[#4A5568]" : "text-white/90"
            }`}
          >
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#banho-tosa" className="hover:text-primary transition-colors">
              Banho & Tosa
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Estrutura
            </a>
            <a href="#galeria" className="hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right mr-1">
              <p
                className={`text-[10px] font-bold uppercase tracking-wider leading-none mb-1 ${
                  isScrolled ? "text-text-muted" : "text-white/70"
                }`}
              >
                ATENDIMENTO
              </p>
              <p
                className={`text-xs sm:text-sm font-semibold leading-none ${
                  isScrolled ? "text-text-base" : "text-white"
                }`}
              >
                (47) 3027-3380
              </p>
            </div>

            {/* Green WhatsApp Call-to-action */}
            <a
              href="https://wa.me/5547984614756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-brand hover:bg-green-brand-dark text-white font-sans font-bold text-xs transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              <Calendar size={13} />
              AGENDAR AGORA
            </a>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={onOpenMenu}
            className={`lg:hidden flex flex-col gap-1.5 items-center justify-center p-2.5 rounded-xl transition-all focus:outline-none ${
              isScrolled
                ? "bg-bg-soft border border-border-light text-text-base hover:bg-border-light"
                : "bg-white/15 border border-white/20 text-white hover:bg-white/25 backdrop-blur-md"
            }`}
            aria-label="Abrir menu"
          >
            <div className={`w-5 h-0.5 rounded-full ${isScrolled ? "bg-text-base" : "bg-white"}`} />
            <div className={`w-4 h-0.5 rounded-full self-start ${isScrolled ? "bg-text-base" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* 2. Full Background Hero Section */}
      <header
        id="top"
        className="relative min-h-[100dvh] min-h-[100svh] w-full flex flex-col justify-between items-start px-4 sm:px-8 lg:px-16 xl:px-24 pt-28 sm:pt-32 pb-8 bg-cover bg-center sm:bg-[center_right] bg-no-repeat overflow-hidden bg-slate-950"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/d/1ugTLtdU4rgVJ0vTYTNx0LAuhjNWAyzMC')",
        }}
      >
        {/* Dark overlay gradient: balanced dark veil on mobile for text contrast while preserving photo ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-slate-950/85 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/55 sm:to-transparent pointer-events-none z-0" />

        {/* Top/Bottom Vignette and ambient contrast enhancer */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 pointer-events-none z-0" />

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-[560px] flex flex-col items-start text-left my-auto pt-4 sm:pt-0">
          {/* Badge Above Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:inline-flex mb-4 sm:mb-5 items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold shadow-sm"
          >
            <span className="flex text-amber-400 gap-0.5">
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
              <Star size={13} fill="currentColor" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium tracking-wide">
              4,9 no Google <span className="text-white/80">• <strong className="text-amber-300 font-extrabold">+ de 1000</strong> pets atendidos 🐾</span>
            </span>
          </motion.div>

          {/* Main Title - Playfair Display serif font */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-medium text-white text-[clamp(2.4rem,5.5vw,4.8rem)] tracking-tight leading-[1.08] mb-4 drop-shadow-sm"
          >
            O cuidado que<br />
            seu pet <span className="text-primary italic font-semibold">merece.</span>
          </motion.h1>

          {/* Subtitle - Inter/Manrope font */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-[500px] font-normal"
          >
            Banho e tosa premium, atendimento veterinário diário e uma equipe apaixonada por cuidar de quem faz parte da sua família.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center"
          >
            {/* Primary Button: Agendar Agora */}
            <a
              href="https://wa.me/5547984614756?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center sm:items-start justify-center px-6 sm:px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl sm:rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[56px]"
            >
              <div className="flex items-center gap-1.5 font-sans font-extrabold text-sm sm:text-base leading-tight tracking-wide">
                <MessageCircle size={17} className="fill-current text-white shrink-0" />
                <span>Agendar Agora</span>
              </div>
              <span className="font-sans font-normal text-[11px] text-white/85 group-hover:text-white transition-colors mt-0.5">
                Atendimento imediato pelo WhatsApp
              </span>
            </a>

            {/* Secondary Button: Conheça nossa estrutura */}
            <a
              href="#banho-tosa"
              className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 border border-white/25 hover:border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xs transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 font-sans font-bold text-xs sm:text-sm tracking-wide min-h-[56px]"
            >
              <Play size={15} className="fill-current text-white shrink-0" />
              <span>Conheça nossa estrutura</span>
            </a>
          </motion.div>
        </div>

        {/* 3. Trust Bar (Barra de Confiança) at bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl mx-auto mt-8 sm:mt-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-full p-3.5 sm:p-4 text-white shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-2 text-center lg:text-left">
              {trustItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center lg:justify-start gap-2 px-2.5 py-1.5 rounded-lg ${
                    idx === trustItems.length - 1 && trustItems.length % 2 !== 0 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  {item.icon}
                  <span className="font-sans font-medium text-xs sm:text-sm text-white/90 tracking-tight whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
}
