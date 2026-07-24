import VideoPlayer from "./VideoPlayer";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Veterinary() {
  const features = [
    "Consultas clínicas completas",
    "Vacinação e prevenção importada",
    "Orientação nutricional personalizada",
    "Acompanhamento contínuo de saúde",
  ];

  return (
    <section id="veterinaria" className="w-full bg-white py-16 lg:py-24 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Video Column: Ordered first on mobile, second on desktop (right) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[420px]">
              <VideoPlayer
                videoUrl="/api/video/16pKNDgzYvL9rwIZqtWFvxCFOPTxnTVKj"
                posterUrl="https://lh3.googleusercontent.com/d/16pKNDgzYvL9rwIZqtWFvxCFOPTxnTVKj"
                title="Dra. Karina Krüger"
                ariaLabel="Vídeo do atendimento veterinário com a Dra. Karina Krüger no Santa Catarina Pet Shop"
                aspectRatio="9:16"
              />
            </div>
          </div>

          {/* Text Column: Ordered second on mobile, first on desktop (left) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Nossa veterinária
            </span>
            
            <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
              Dra. Karina Krüger<br />
              <em className="font-serif italic text-primary leading-none font-normal">Médica Veterinária</em>
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-light">
              Ter um médico veterinário por perto faz toda a diferença para o bem-estar do seu pet. Aqui no Santa Catarina Pet Shop, a Dra. Karina Krüger está presente diariamente para realizar consultas clínicas, vacinação preventiva de alta qualidade e dar as melhores orientações nutricionais. Garantimos um atendimento humanizado e um acompanhamento contínuo da saúde física e emocional do seu melhor amigo.
            </p>

            {/* 4 Features List */}
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

            {/* WhatsApp Appointment CTA */}
            <motion.a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-brand hover:bg-green-brand-dark text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar consulta com a Dra. Karina
              <ArrowRight size={16} />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
