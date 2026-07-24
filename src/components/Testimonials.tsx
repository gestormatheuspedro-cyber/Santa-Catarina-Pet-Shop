import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  
  // Touch / Swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Monitor window resize safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Determine slides per view based on screen width
  let slidesPerView = 1;
  if (windowWidth >= 1024) slidesPerView = 3;
  else if (windowWidth >= 640) slidesPerView = 2;

  const totalSlides = TESTIMONIALS.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  // Keep currentIndex bounded when resizing window
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Autoplay function
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    stopAutoplay();
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
    startAutoplay();
  };

  const prevSlide = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    startAutoplay();
  };

  const nextSlide = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    startAutoplay();
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoplay();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      startAutoplay();
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    } else {
      startAutoplay();
    }
  };

  return (
    <section id="depoimentos" className="w-full bg-bg-soft py-16 lg:py-24 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centralized Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <a
            href="https://www.google.com/maps/place/Santa+Catarina+Pet+Shop/@-26.3258634,-48.8452547,1314m/data=!3m1!1e3!4m17!1m8!3m7!1s0x94deb0fb8c348565:0x19e81e37928c5190!2sR.+Santa+Catarina,+394+-+Floresta,+Joinville+-+SC,+89211-300!3b1!8m2!3d-26.3258634!4d-48.8452547!16s%2Fg%2F11rp3rkjdj!3m7!1s0x94deb18424b131c1:0xf93787e0c436336a!8m2!3d-26.3258634!4d-48.8452547!9m1!1b1!16s%2Fg%2F11h25zc8gr?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-primary-50 text-primary rounded-full text-xs font-extrabold tracking-wider uppercase mb-3 border border-primary/10 hover:bg-primary-100 transition-colors"
          >
            <Star size={13} className="fill-current text-amber-500" />
            <span>Avaliações no Google (4.9 ★)</span>
          </a>
          <h2 className="clamp-heading font-serif text-text-base font-bold mb-3 leading-tight">
            Quem ama, confia e <em className="italic text-primary">recomenda!</em>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
            Veja as avaliações reais deixadas por tutores no Google que vivenciam nosso amor, transparência e profissionalismo no dia a dia.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          id="depCarousel"
          className="relative w-full mb-8 sm:mb-10 group"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-text-base shadow-md border border-border-light flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-text-base shadow-md border border-border-light flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Próxima avaliação"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Overflow Clip Area */}
          <div className="overflow-hidden w-full rounded-2xl p-1">
            {/* Slides Track */}
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                width: `${(totalSlides / slidesPerView) * 100}%`,
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="px-2 sm:px-3 shrink-0"
                  style={{ 
                    width: `${100 / totalSlides}%` 
                  }}
                >
                  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-border-light shadow-2xs hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
                    <div>
                      {/* Top Header: Rating & Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-1 text-amber-400">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={15} className="fill-current" />
                          ))}
                        </div>
                        {testimonial.date && (
                          <span className="font-sans text-[11px] text-text-muted font-medium bg-bg-soft px-2.5 py-0.5 rounded-full border border-border-light">
                            {testimonial.date}
                          </span>
                        )}
                      </div>

                      {/* Quote mark & comment text */}
                      <div className="relative mb-5">
                        <Quote size={20} className="text-primary/15 absolute -top-1 -left-1 rotate-180 pointer-events-none" />
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed relative z-10 pt-1">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>

                    {/* Profile Card Footer */}
                    <div className="flex items-center gap-3.5 border-t border-dashed border-border-light pt-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-primary/20 shrink-0 shadow-2xs"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-sans font-bold text-xs sm:text-sm text-text-base truncate">
                          {testimonial.name}
                        </h3>
                        <p className="font-sans text-2xs sm:text-xs text-primary font-semibold truncate">
                          Tutor(a) do <span className="font-extrabold">{testimonial.petName}</span> 🐾
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clickable Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx 
                  ? "w-8 bg-primary shadow-2xs" 
                  : "w-2.5 bg-border-light hover:bg-primary/40"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews CTA Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Santa+Catarina+Pet+Shop/@-26.3258634,-48.8452547,1314m/data=!3m1!1e3!4m17!1m8!3m7!1s0x94deb0fb8c348565:0x19e81e37928c5190!2sR.+Santa+Catarina,+394+-+Floresta,+Joinville+-+SC,+89211-300!3b1!8m2!3d-26.3258634!4d-48.8452547!16s%2Fg%2F11rp3rkjdj!3m7!1s0x94deb18424b131c1:0xf93787e0c436336a!8m2!3d-26.3258634!4d-48.8452547!9m1!1b1!16s%2Fg%2F11h25zc8gr?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-border-light rounded-full bg-white text-text-base hover:bg-primary-50 hover:text-primary hover:border-primary/40 font-sans font-bold text-xs sm:text-sm shadow-2xs transition-all duration-300 hover:scale-102"
            aria-label="Ver todas as 183 avaliações no Google Maps"
          >
            <MessageSquare size={16} className="text-primary" />
            <span>Ver todas as 183 avaliações no Google (4.9 ★)</span>
          </a>
        </div>

      </div>
    </section>
  );
}

