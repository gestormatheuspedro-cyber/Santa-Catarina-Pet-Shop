import { ServiceItem, DifferentialItem, TestimonialItem, FAQItem, InstagramPost } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "banho",
    title: "Banho Premium",
    subtitle: "Água morna, sopro silencioso e produtos profissionais de alta linha.",
    iconName: "Bath"
  },
  {
    id: "tosa",
    title: "Tosa Especializada",
    subtitle: "Tosa higiênica, na máquina ou tesoura por profissionais experientes.",
    iconName: "Scissors"
  },
  {
    id: "veterinaria",
    title: "Veterinária Diária",
    subtitle: "Consultas diárias com a Dra. Karina Krüger para prevenção e cuidados.",
    iconName: "Activity"
  },
  {
    id: "estetica",
    title: "Estética Pet",
    subtitle: "Hidratação de pelos, corte de unhas e limpeza de ouvido com carinho.",
    iconName: "Sparkles"
  },
  {
    id: "prevencao",
    title: "Prevenção",
    subtitle: "Vacinação importada, aplicação de vermífugos e controle de antiparasitas.",
    iconName: "ShieldCheck"
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "vet",
    title: "Veterinária diária",
    description: "Presença e atendimento diário da Dra. Karina Krüger para consultas e emergências.",
    iconName: "HeartPulse"
  },
  {
    id: "vidro",
    title: "Área em vidro",
    description: "Ambiente de banho e tosa 100% visível em vidro para você acompanhar cada detalhe.",
    iconName: "Eye"
  },
  {
    id: "google",
    title: "4.9 no Google",
    description: "Mais de 183 avaliações espontâneas de clientes satisfeitos com nosso atendimento.",
    iconName: "Star"
  },
  {
    id: "humano",
    title: "Atendimento humanizado",
    description: "Cada pet é tratado como membro da nossa própria família, com amor e paciência.",
    iconName: "Smile"
  },
  {
    id: "moderno",
    title: "Espaço moderno",
    description: "Equipamentos de ponta, climatização adequada e máxima higienização dos materiais.",
    iconName: "Sparkles"
  },
  {
    id: "horario",
    title: "Horário estendido",
    description: "Abertura antecipada às 07:45 para se adequar à sua rotina matinal corrida.",
    iconName: "Clock"
  }
];

export const GALLERY_IMAGES: string[] = [
  "https://lh3.googleusercontent.com/d/1Uu51LHnQf1SKqz3W6jtZNOq06xATblZz",
  "https://lh3.googleusercontent.com/d/1OdzpPSi76UbIrmOdBAFcIJZHYo6-G_em",
  "https://lh3.googleusercontent.com/d/1Hp_YTqIcvXjRJ61jRJMjG87NLRWsI_HP",
  "https://lh3.googleusercontent.com/d/1DmS67boO-PPfBQUCEf9rGblWsBnMBU6w",
  "https://lh3.googleusercontent.com/d/18qVl2F2Qbu2WM-40YlEB7Ynom6bmkdMT",
  "https://lh3.googleusercontent.com/d/1JxZQ_4QT5IM_ItvinOykOCTMeUxMHmOV",
  "https://lh3.googleusercontent.com/d/1TMb5FB5lhMGeAzkQXDWitWTa_M9m15G7",
  "https://lh3.googleusercontent.com/d/15WDNrtke1ay95pBE2LwARHKainhXpxu1",
  "https://lh3.googleusercontent.com/d/1Siqis2F4xtKfSbZBX9UBd0By5m68L8d-",
  "https://lh3.googleusercontent.com/d/1ZQ46L-Er7wbW-u18vGvCX4TgxlINlSVe",
  "https://lh3.googleusercontent.com/d/12pfxmg2RDCBxP7QARZMXDDbm4U2H_FSw",
  "https://lh3.googleusercontent.com/d/1ePTuVPxU9cTNUoRAso-awHf912kwITPF",
  "https://lh3.googleusercontent.com/d/1Oa9On3Aq5NxDg96NUdrOrsjhjzgjYvlC",
  "https://lh3.googleusercontent.com/d/190QSo79wbj0cKm_nDT1hSFTLHJP0WuaT",
  "https://lh3.googleusercontent.com/d/1BVkwKD0_rCtEIJs5p2TMLYjqjACIyX7G",
  "https://lh3.googleusercontent.com/d/1y4JShmCg0g8rkpQ-SeJbqO2M-r0DTrfN"
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Maria S.",
    petName: "Floquinho",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 2 dias",
    text: "O setor de banho e tosa é todo de vidro e a gente consegue acompanhar cada detalhe do atendimento. Dá muita segurança ver o carinho e o cuidado com que tratam nossos bichinhos!"
  },
  {
    id: "t2",
    name: "Roberto A.",
    petName: "Max",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 1 semana",
    text: "Atendimento excelente. A Dra. Karina está sempre presente no consultório para tirar dúvidas e realizar as consultas preventivas. Super indico a clínica e toda a equipe!"
  },
  {
    id: "t3",
    name: "Fernanda L.",
    petName: "Amora",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 2 semanas",
    text: "Profissionais competentes e extremamente atenciosos. O banho e tosa é impecável, o pelo da Amora fica super macio, hidratado e cheiroso por vários dias. Nota dez!"
  },
  {
    id: "t4",
    name: "Carla M.",
    petName: "Luna",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 3 semanas",
    text: "Melhor pet shop de Joinville! A transparência de poder ver o banho pelo vidro é fantástica, dá muita paz de espírito. Sem falar na facilidade de agendamento pelo WhatsApp."
  },
  {
    id: "t5",
    name: "João P.",
    petName: "Thor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 1 mês",
    text: "Já sou cliente há 3 anos e não troco por nada. O cuidado com o bem-estar animal aqui é levado a sério em todas as etapas, desde a recepção até a consulta clínica com a veterinária."
  },
  {
    id: "t6",
    name: "Ana Beatriz R.",
    petName: "Pipoca",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 2 meses",
    text: "Levo meu poodle para banho e hidratação com frequência. Eles usam produtos excelentes de qualidade premium e ele sempre volta super tranquilo, relaxado e feliz."
  },
  {
    id: "t7",
    name: "Lucas V.",
    petName: "Bob",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 3 meses",
    text: "Espaço muito limpo, moderno e organizado. O atendimento pontual e a preocupação em entender os hábitos do Bob antes de qualquer procedimento faz toda a diferença."
  },
  {
    id: "t8",
    name: "Camila S.",
    petName: "Belinha",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    date: "Há 4 meses",
    text: "A veterinária tirou todas as minhas dúvidas com calma e muito carinho pela Belinha. O carinho da equipe com os animais é apaixonante! Recomendo de olhos fechados."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Como faço para agendar?",
    answer: "O agendamento é rápido e prático! Você pode preencher o nosso formulário nesta página, o que gerará uma mensagem automática formatada para o nosso WhatsApp, ou simplesmente clicar em qualquer botão do WhatsApp no site para falar direto conosco."
  },
  {
    id: "faq2",
    question: "Vocês atendem aos sábados?",
    answer: "Nosso horário é de Segunda a Sexta das 07:45 às 12:30 e das 13:30 às 18:00. No momento não abrimos aos sábados, mas nossa abertura antecipada ajuda quem precisa deixar o pet antes de ir ao trabalho!"
  },
  {
    id: "faq3",
    question: "A veterinária atende todos os dias?",
    answer: "Sim! A Dra. Karina Krüger, nossa médica veterinária responsável, está presente diariamente no pet shop para realizar consultas clínicas, vacinação preventiva, exames e orientações de rotina."
  },
  {
    id: "faq4",
    question: "Como funciona a área em vidro?",
    answer: "Nossa área de banho e tosa possui paredes de vidro temperado totalmente transparentes voltadas para o saguão e recepção. Isso permite que qualquer tutor acompanhe todo o processo de lavagem, secagem e tosa em tempo real."
  },
  {
    id: "faq5",
    question: "Posso cancelar ou remarcar?",
    answer: "Com certeza! Pedimos apenas a gentileza de nos avisar com pelo menos 2 horas de antecedência através do WhatsApp para que possamos organizar os horários e liberar a vaga para outro pet."
  },
  {
    id: "faq6",
    question: "Quais raças vocês atendem?",
    answer: "Atendemos cães e gatos de todas as raças, portes (desde filhotes de porte mini até raças gigantes) e temperamentos. Nossos especialistas são treinados em manejo positivo e técnicas calmantes."
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "inst1",
    imageUrl: "https://lh3.googleusercontent.com/d/1TMb5FB5lhMGeAzkQXDWitWTa_M9m15G7",
    likes: 124,
    comments: 18,
    link: "https://instagram.com/santacatarinapetshop"
  },
  {
    id: "inst2",
    imageUrl: "https://lh3.googleusercontent.com/d/15WDNrtke1ay95pBE2LwARHKainhXpxu1",
    likes: 245,
    comments: 32,
    link: "https://instagram.com/santacatarinapetshop"
  },
  {
    id: "inst3",
    imageUrl: "https://lh3.googleusercontent.com/d/1Siqis2F4xtKfSbZBX9UBd0By5m68L8d-",
    likes: 189,
    comments: 14,
    link: "https://instagram.com/santacatarinapetshop"
  },
  {
    id: "inst4",
    imageUrl: "https://lh3.googleusercontent.com/d/1ZQ46L-Er7wbW-u18vGvCX4TgxlINlSVe",
    likes: 156,
    comments: 21,
    link: "https://instagram.com/santacatarinapetshop"
  },
  {
    id: "inst5",
    imageUrl: "https://lh3.googleusercontent.com/d/12pfxmg2RDCBxP7QARZMXDDbm4U2H_FSw",
    likes: 212,
    comments: 25,
    link: "https://instagram.com/santacatarinapetshop"
  },
  {
    id: "inst6",
    imageUrl: "https://lh3.googleusercontent.com/d/1ePTuVPxU9cTNUoRAso-awHf912kwITPF",
    likes: 310,
    comments: 48,
    link: "https://instagram.com/santacatarinapetshop"
  }
];
