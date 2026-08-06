import { INSTAGRAM_POSTS } from "../data";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="w-full bg-bg-soft py-16 lg:py-20 border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <a
            href="https://instagram.com/santacatarinapetshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors tracking-wide uppercase mb-2"
          >
            <Instagram size={14} />
            @santacatarinapetshop
          </a>
          <h2 className="clamp-heading font-serif text-text-base font-bold mb-3">
            Siga nossa rotina no Instagram
          </h2>
          <p className="font-sans text-xs text-text-secondary leading-relaxed">
            Acompanhe o dia a dia mais fofo do <span className="text-primary font-bold">bairro Floresta</span>! Postamos <span className="text-primary font-semibold">fotos dos nossos amiguinhos</span>, <span className="text-primary font-semibold">dicas de cuidados</span> e novidades da loja.
          </p>
        </div>

        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-border-light shadow-sm">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-text-base group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Instagram image with custom referrer policy for secure CDN images */}
              <img
                src={post.imageUrl}
                alt="Feed Post"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover overlay with orange color and stats */}
              <div className="absolute inset-0 bg-primary/80 backdrop-blur-xs flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5 text-white font-sans font-bold text-xs sm:text-sm">
                  <Heart size={16} className="fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white font-sans font-bold text-xs sm:text-sm">
                  <MessageCircle size={16} className="fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Follow Button */}
        <div className="text-center">
          <motion.a
            href="https://instagram.com/santacatarinapetshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs sm:text-sm shadow-primary hover:shadow-primary-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={16} />
            Seguir @santacatarinapetshop
          </motion.a>
        </div>

      </div>
    </section>
  );
}
