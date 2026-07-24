import { GALLERY_IMAGES } from "../data";
import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Split images into two rows of 12 items (or simply double the lists for smooth looping)
  const row1 = [...GALLERY_IMAGES];
  const row2 = [...GALLERY_IMAGES.slice().reverse()];

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="galeria" className="w-full bg-bg-soft py-16 lg:py-24 overflow-hidden border-b border-border-light">
      
      {/* Centralized Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
          Nossos pets
        </span>
        <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
          Alguns dos amiguinhos que <em className="italic text-primary">passaram por aqui</em>
        </h2>
        <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
          Amor, carinho e paciência em cada detalhe. Veja a alegria dos nossos clientes e inspire-se para agendar o horário do seu melhor amigo!
        </p>
      </div>

      {/* Marquee Roller Container */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full relative">
        
        {/* Row 1 - Sliding Left */}
        <div className="relative flex w-full overflow-x-hidden py-1">
          {/* We duplicate the array 3 times to ensure no gaps ever show, even on huge monitors */}
          <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((imgUrl, i) => (
              <div
                key={`r1-${i}`}
                onClick={() => setSelectedImage(imgUrl)}
                className="relative group shrink-0 w-[160px] h-[220px] sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-zoom-in border border-border-light"
              >
                <img
                  src={imgUrl}
                  alt="Pet cliente"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Sliding Right / Reverse direction */}
        <div className="relative flex w-full overflow-x-hidden py-1">
          <div className="flex gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row2, ...row2, ...row2].map((imgUrl, i) => (
              <div
                key={`r2-${i}`}
                onClick={() => setSelectedImage(imgUrl)}
                className="relative group shrink-0 w-[160px] h-[220px] sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[300px] lg:w-[260px] lg:h-[340px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-zoom-in border border-border-light"
              >
                <img
                  src={imgUrl}
                  alt="Pet cliente"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button top-right */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Fechar galeria"
            >
              <X size={24} />
            </button>

            {/* Imagem */}
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-full max-h-[85vh] overflow-hidden rounded-xl border border-white/10 bg-text-base/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Pet em foco"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain block mx-auto shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
