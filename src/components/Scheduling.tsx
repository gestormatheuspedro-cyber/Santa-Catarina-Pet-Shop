import React, { useState } from "react";
import { MessageSquare, Calendar, Clock, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Scheduling() {
  const [formData, setFormData] = useState({
    tutorName: "",
    phone: "",
    petName: "",
    breed: "",
    service: "",
    size: "",
    observations: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple auto-formatting handler for Brazilian phone numbers: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // strip non-digits
    
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format message string
    const whatsappText = `Olá, Santa Catarina Pet Shop! Gostaria de agendar um serviço pelo site:

🐾 *DADOS DO TUTOR:*
- Nome: ${formData.tutorName}
- Telefone: ${formData.phone}

🐶 *DADOS DO PET:*
- Nome do Pet: ${formData.petName}
- Raça: ${formData.breed || "Não informada"}
- Porte: ${formData.size}

⭐ *SOLICITAÇÃO DE SERVIÇO:*
- Serviço: ${formData.service}
${formData.observations ? `- Observações: ${formData.observations}` : ""}`;

    // Prefill WhatsApp URL
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/5547984614756?text=${encodedText}`;

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Clear status shortly after
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <section id="agendamento" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info Sticky */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-24">
            <span className="inline-block w-fit px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              Agendamento
            </span>
            <h2 className="clamp-heading font-serif text-text-base font-bold mb-4">
              Agende o horário do <em className="italic text-primary">seu melhor amigo</em>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
              Preencha os dados abaixo para solicitar o agendamento de <span className="text-primary font-bold">banho</span>, <span className="text-primary font-bold">tosa</span> ou <span className="text-primary font-bold">consulta veterinária</span>. Suas informações serão organizadas em uma mensagem automática para confirmarmos o atendimento pelo <span className="text-emerald-600 font-bold">WhatsApp</span> na hora!
            </p>

            {/* Quick Contact Indicators */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-0.5">Horário de Funcionamento</h4>
                  <p className="font-sans text-2xs sm:text-xs text-text-secondary">Segunda a Sexta: 07:45 às 12:30 / 13:30 às 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-0.5">Telefone Fixo / WhatsApp</h4>
                  <p className="font-sans text-2xs sm:text-xs text-text-secondary">(47) 3027-3380 / (47) 98461-4756</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-text-base mb-0.5">Nosso Endereço</h4>
                  <p className="font-sans text-2xs sm:text-xs text-text-secondary">Rua Santa Catarina, 394 — Floresta, Joinville - SC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-bg-soft border border-border-light p-6 sm:p-8 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tutor Name */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.1s" }}>
                    <label htmlFor="tutorName" className="font-sans font-bold text-xs text-text-secondary">
                      Nome do Tutor *
                    </label>
                    <input
                      id="tutorName"
                      type="text"
                      required
                      value={formData.tutorName}
                      onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                      placeholder="Seu nome completo"
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.15s" }}>
                    <label htmlFor="phone" className="font-sans font-bold text-xs text-text-secondary">
                      WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(47) 99999-9999"
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Pet Name & Breed Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pet Name */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.2s" }}>
                    <label htmlFor="petName" className="font-sans font-bold text-xs text-text-secondary">
                      Nome do Pet *
                    </label>
                    <input
                      id="petName"
                      type="text"
                      required
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      placeholder="Ex: Floquinho, Max, Mel"
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>

                  {/* Breed */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.25s" }}>
                    <label htmlFor="breed" className="font-sans font-bold text-xs text-text-secondary">
                      Raça (opcional)
                    </label>
                    <input
                      id="breed"
                      type="text"
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      placeholder="Ex: Poodle, Labrador, SRD..."
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Service & Pet Size Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Select */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.3s" }}>
                    <label htmlFor="service" className="font-sans font-bold text-xs text-text-secondary">
                      Serviço Desejado *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Banho">Banho Premium</option>
                      <option value="Banho e Tosa">Banho e Tosa Completa</option>
                      <option value="Tosa higiênica">Tosa Higiênica</option>
                      <option value="Tosa completa">Tosa na Tesoura</option>
                      <option value="Estética">Estética Pet (Hidratação/Uf/etc)</option>
                      <option value="Veterinária">Consulta Veterinária</option>
                      <option value="Vacinação">Vacinação preventiva</option>
                      <option value="Outro">Outro Serviço</option>
                    </select>
                  </div>

                  {/* Size Select */}
                  <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.35s" }}>
                    <label htmlFor="size" className="font-sans font-bold text-xs text-text-secondary">
                      Porte do Pet *
                    </label>
                    <select
                      id="size"
                      required
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <option value="">Selecione o porte</option>
                      <option value="Mini (até 4kg)">Mini (até 4kg)</option>
                      <option value="Pequeno (4–10kg)">Pequeno (4–10kg)</option>
                      <option value="Médio (10–25kg)">Médio (10–25kg)</option>
                      <option value="Grande (25–45kg)">Grande (25–45kg)</option>
                      <option value="Gigante (45kg+)">Gigante (45kg+)</option>
                    </select>
                  </div>
                </div>

                {/* Observations */}
                <div className="flex flex-col gap-1.5 animate-field" style={{ animationDelay: "0.4s" }}>
                  <label htmlFor="observations" className="font-sans font-bold text-xs text-text-secondary">
                    Observações ou Preferências (opcional)
                    </label>
                  <textarea
                    id="observations"
                    rows={3}
                    value={formData.observations}
                    onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                    placeholder="Nos conte se o seu pet tem alergia, medo de soprador ou preferência de horário..."
                    className="px-4 py-3 bg-white border border-border-light rounded-xl font-sans text-xs sm:text-sm text-text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-green-brand hover:bg-green-brand-dark disabled:bg-green-brand/50 text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-all duration-300 cursor-pointer mt-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <MessageSquare size={18} className="fill-current" />
                  {isSubmitted ? "Abrindo WhatsApp..." : "Enviar solicitação pelo WhatsApp"}
                </motion.button>
                
                <p className="font-sans text-3xs sm:text-2xs text-text-muted text-center leading-relaxed">
                  * Ao enviar, você abrirá o aplicativo do WhatsApp pré-preenchido para falar com nossa recepção imediatamente.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
