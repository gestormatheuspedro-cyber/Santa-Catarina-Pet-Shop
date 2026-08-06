import { MapPin, Clock, Phone, Share2, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      text: "Rua Santa Catarina, 394 — Floresta, Joinville - SC, 89211-300"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      text: "Segunda a Sexta: 07:45 às 12:30 / 13:30 às 18:00"
    },
    {
      icon: Phone,
      title: "Telefones para Contato",
      text: "Fixo: (47) 3027-3380 | WhatsApp: (47) 98461-4756"
    },
    {
      icon: Share2,
      title: "Redes Sociais",
      text: "@santacatarinapetshop (Instagram & Facebook)"
    }
  ];

  return (
    <section id="contato" className="w-full bg-bg-soft py-16 lg:py-24 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Onde estamos
            </span>
            
            <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
              Venha nos fazer <em className="italic text-primary">uma visita!</em>
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-8 font-light">
              Ficamos localizados no <span className="text-primary font-bold">bairro Floresta</span>, em uma área de fácil acesso com <span className="text-primary font-bold">estacionamento próprio</span> na Rua Santa Catarina. Venha conhecer nosso espaço de perto, bater um papo com a <span className="text-primary font-bold">Dra. Karina</span> e ver a <span className="text-primary font-bold">transparência do nosso banho e tosa</span>!
            </p>

            {/* List of Contact Items */}
            <div className="flex flex-col gap-6 w-full mb-8">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-2xs sm:text-xs text-text-secondary leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Open Maps Navigation Link */}
            <motion.a
              href="https://www.google.com/maps/place/Santa+Catarina+Pet+Shop/@-26.3258634,-48.8452547,1314m/data=!3m1!1e3!4m17!1m8!3m7!1s0x94deb0fb8c348565:0x19e81e37928c5190!2sR.+Santa+Catarina,+394+-+Floresta,+Joinville+-+SC,+89211-300!3b1!8m2!3d-26.3258634!4d-48.8452547!16s%2Fg%2F11rp3rkjdj!3m7!1s0x94deb18424b131c1:0xf93787e0c436336a!8m2!3d-26.3258634!4d-48.8452547!9m1!1b1!16s%2Fg%2F11h25zc8gr?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs sm:text-sm shadow-md shadow-primary/20 hover:shadow-primary-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Compass size={16} />
              Abrir no Google Maps
            </motion.a>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-border-light shadow-sm bg-text-muted/10 relative">
              <iframe
                title="Localização do Santa Catarina Pet Shop no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.4674061219896!2d-48.8525042!3d-26.321855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0402b84cf65%3A0x6b4476652da20547!2sRua%20Santa%20Catarina%2C%20394%20-%20Floresta%2C%20Joinville%20-%20SC%2C%2089211-300!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
