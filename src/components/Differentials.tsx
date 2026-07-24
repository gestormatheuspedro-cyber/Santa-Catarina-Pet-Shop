import React, { useRef } from "react";
import { DIFFERENTIALS } from "../data";
import * as Icons from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

// Native highly performant React 3D Tilt Card component
function TiltCard({ item, index }: { item: typeof DIFFERENTIALS[0]; index: number; key?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking mouse position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to avoid jerky 3D transitions
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized coordinates (-0.5 to 0.5) inside the card
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col p-6 rounded-2xl bg-bg-soft border border-border-light shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-default"
    >
      {/* Glossy Overlay Highlight Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Orange Gradient Icon */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-5 shadow-primary/30 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
      >
        <IconComponent size={22} />
      </div>

      {/* Card Content with translateZ for layered 3D depth */}
      <h3 
        style={{ transform: "translateZ(20px)" }}
        className="font-sans font-bold text-base text-text-base mb-2 group-hover:text-primary transition-colors duration-300"
      >
        {item.title}
      </h3>
      <p 
        style={{ transform: "translateZ(10px)" }}
        className="font-sans text-xs text-text-secondary leading-relaxed"
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function Differentials() {
  return (
    <section id="sobre" className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centralized Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
            Por que nós
          </span>
          <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
            Cuidado profissional com <em className="font-serif italic text-primary">transparência absoluta.</em>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
            Oferecemos uma estrutura planejada com todo o amor para garantir a segurança dos pets e o sossego dos tutores em cada atendimento.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 [perspective:1000px]">
          {DIFFERENTIALS.map((diff, index) => (
            <TiltCard key={diff.id} item={diff} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
