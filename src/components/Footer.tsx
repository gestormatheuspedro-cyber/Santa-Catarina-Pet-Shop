import { Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#1A1A2E] text-white/65 font-sans text-xs sm:text-sm py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand details (1.8fr equivalent) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/30 bg-white shrink-0 shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/d/144xPtER3_e8_QasjfEGHWigV-BWs9XxU"
                  alt="Logo Santa Catarina Pet Shop"
                  className="w-full h-full object-cover object-center scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-sm tracking-wider text-white">
                  SANTA CATARINA
                </span>
                <span className="font-serif italic text-primary text-xs leading-none">
                  Pet Shop
                </span>
              </div>
            </a>
            
            <p className="font-sans text-2xs sm:text-xs text-white/60 leading-relaxed max-w-sm text-left">
              Cuidado veterinário dedicado, banho e tosa de vidro com total transparência e uma estrutura feita de amor para o bem-estar do seu pet em Joinville - SC.
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://instagram.com/santacatarinapetshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com/santacatarinapetshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="tel:4730273380"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white text-white/80 flex items-center justify-center transition-all duration-300"
                aria-label="Telefone"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white">Links Rápidos</h4>
            <ul className="flex flex-col gap-2.5 font-medium text-2xs sm:text-xs text-white/50">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Serviços */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white">Nossos Serviços</h4>
            <ul className="flex flex-col gap-2.5 font-medium text-2xs sm:text-xs text-white/50">
              <li><a href="#banho-tosa" className="hover:text-primary transition-colors">Banho Premium</a></li>
              <li><a href="#banho-tosa" className="hover:text-primary transition-colors">Tosa Higiênica</a></li>
              <li><a href="#veterinaria" className="hover:text-primary transition-colors">Consultório Vet</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Estética Pet</a></li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4 text-left">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white">Fale Conosco</h4>
            <ul className="flex flex-col gap-3 font-medium text-2xs sm:text-xs text-white/50">
              <li className="flex items-start gap-2.5 leading-tight">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Santa+Catarina+Pet+Shop/@-26.3258634,-48.8452547,1314m/data=!3m1!1e3!4m17!1m8!3m7!1s0x94deb0fb8c348565:0x19e81e37928c5190!2sR.+Santa+Catarina,+394+-+Floresta,+Joinville+-+SC,+89211-300!3b1!8m2!3d-26.3258634!4d-48.8452547!16s%2Fg%2F11rp3rkjdj!3m7!1s0x94deb18424b131c1:0xf93787e0c436336a!8m2!3d-26.3258634!4d-48.8452547!9m1!1b1!16s%2Fg%2F11h25zc8gr?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rua Santa Catarina, 394<br />Bairro Floresta, Joinville - SC
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:4730273380" className="hover:text-white transition-colors">(47) 3027-3380</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-primary shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.987 4.479-9.987 9.987 0 1.763.462 3.42 1.266 4.872L2 22l5.284-1.385c1.397.763 2.982 1.192 4.673 1.192 5.505 0 9.986-4.479 9.986-9.987 0-5.506-4.48-9.987-9.986-9.987zm0 18.291c-1.554 0-3.012-.416-4.28-1.135l-.307-.173-3.181.833.849-3.1-.19-.303c-.787-1.258-1.203-2.714-1.203-4.241 0-4.577 3.725-8.301 8.301-8.301 4.578 0 8.302 3.724 8.302 8.301 0 4.578-3.724 8.303-8.302 8.303zm4.577-6.223c-.251-.125-1.485-.733-1.714-.817-.23-.083-.396-.125-.562.125-.167.25-.647.817-.793.983-.146.167-.291.188-.542.063-.25-.125-1.059-.39-2.016-1.244-.745-.664-1.248-1.484-1.395-1.734-.145-.25-.015-.385.11-.51.114-.112.25-.291.375-.437.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.77-1.854-.203-.489-.412-.423-.563-.43-.145-.008-.312-.01-.479-.01-.166 0-.437.062-.666.312-.229.25-.874.854-.874 2.083 0 1.229.896 2.417.999 2.563.104.146 1.764 2.693 4.274 3.778.598.258 1.064.412 1.428.528.6.19 1.147.163 1.579.098.481-.072 1.485-.606 1.693-1.164.208-.559.208-1.039.146-1.14-.063-.1-.229-.163-.48-.288z" />
                </svg>
                <a href="https://wa.me/5547984614756" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(47) 98461-4756</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-2xs text-white/40">
          <div className="text-center sm:text-left flex flex-col sm:flex-row gap-1 sm:gap-4 leading-relaxed">
            <span>© {currentYear} Santa Catarina Pet Shop. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">|</span>
            <span>CNPJ: 31.972.948/0001-32</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all focus:outline-none"
            aria-label="Voltar para o topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
