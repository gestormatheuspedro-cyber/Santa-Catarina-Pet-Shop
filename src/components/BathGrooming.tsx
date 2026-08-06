import VideoPlayer from "./VideoPlayer";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function BathGrooming() {
  const features = [
    "Área 100% em vidro",
    "Produtos premium",
    "Profissionais especializados",
    "Água morna e secagem profissional",
  ];

  return (
    <section id="banho-tosa" className="w-full bg-bg-soft py-16 lg:py-24 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptions and features list */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Nosso diferencial
            </span>
            
            <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
              Banho e tosa <em className="italic text-primary">com transparência total.</em>
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-light">
              Acreditamos que a confiança é a base de tudo. Por isso, nossa área de banho e tosa é totalmente cercada por <span className="text-primary font-bold">paredes de vidro transparente</span>. Você pode acompanhar de perto todo o atendimento, vendo com seus próprios olhos o <span className="text-primary font-semibold">amor, carinho e paciência</span> que nossa <span className="text-primary font-semibold">equipe dedicada</span> entrega ao seu pet.
            </p>

            {/* Features list grid (1 col mobile -> 2 cols desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary flex items-center justify-center shrink-0">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <span className="font-sans font-bold text-xs sm:text-sm text-text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp Call to Action */}
            <motion.a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-brand hover:bg-green-brand-dark text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Banho & Tosa
              <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Right Column: 9:16 Vertical Video Player */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-none">
              <VideoPlayer
                videoUrl="/api/video/1BVeZnUATXf7hUvyEkURRwRfrHrTkUKBy"
                posterUrl="https://lh3.googleusercontent.com/d/1BVeZnUATXf7hUvyEkURRwRfrHrTkUKBy"
                title="Banho e Tosa"
                ariaLabel="Vídeo do setor de Banho e Tosa do Santa Catarina Pet Shop"
                aspectRatio="9:16"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
