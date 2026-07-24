import { SERVICES } from "../data";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function ServiceStrip() {
  return (
    <section id="servicos" className="w-full bg-white border-y border-border-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-border-light">
          {SERVICES.map((service, index) => {
            // Dynamically resolve icon from lucide-react
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <motion.a
                key={service.id}
                href="#agendamento"
                className="group flex flex-col items-center justify-center text-center p-6 lg:py-10 transition-all duration-300 hover:bg-bg-soft"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Rounded Icon Box with soft colors */}
                <div className="w-12 h-12 rounded-xl bg-bg-soft text-text-secondary flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary">
                  <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center">
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-1 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="font-sans text-3xs sm:text-2xs text-text-secondary leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
