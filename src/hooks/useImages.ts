// hooks/useImages.ts
export const useProjectImages = () => {
  const images = {
    logo: {
      main: '/images/hero/logo.png',
      white: '/images/hero/logo-white.png', // Versão branca para fundos escuros
      icon: '/images/hero/logo-icon.png', // Apenas o ícone sem texto
    },
    hero: {
      main: '/images/hero/hero-main.jpg',
      overlay: '/images/hero/hero-overlay.jpg',
    },
    atividades: {
      apoioPedagogico: '/images/atividades/apoio-pedagogico.jpg',
      capoeira: '/images/atividades/capoeira.jpg',
      teatro: '/images/atividades/teatro.jpg',
      musica: '/images/atividades/musica.jpg',
      danca: '/images/atividades/danca.jpg',
      artes: '/images/atividades/artes.jpg',
    },
    eventos: {
      diaCriancas: '/images/eventos/dia-criancas.jpg',
      natalSolidario: '/images/eventos/natal-solidario.jpg',
      formatura: '/images/eventos/formatura.jpg',
      festaJunina: '/images/eventos/festa-junina.jpg',
    },
    voluntarios: {
      equipe1: '/images/voluntarios/equipe-1.jpg',
      voluntario1: '/images/voluntarios/voluntario-1.jpg',
      voluntario2: '/images/voluntarios/voluntario-2.jpg',
      acaoVoluntaria: '/images/voluntarios/acao-voluntaria.jpg',
    },
    parceiros: {
      logo1: '/images/parceiros/logo-parceiro-1.png',
      logo2: '/images/parceiros/logo-parceiro-2.png',
    },
  }

  // Fallback para Unsplash enquanto não tem as imagens reais
  const fallbacks = {
    logo: {
      main: '/images/hero/logo.png', // Sua logo real
      white: '/images/hero/logo.png', // Fallback para a mesma logo por enquanto
      icon: '/images/hero/logo.png', // Fallback para a mesma logo por enquanto
    },
    hero: {
      main: '/images/hero/hero-main.jpg',
      logo: '/images/hero/logo.png',
      overlay: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    atividades: {
      apoioPedagogico: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      capoeira: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      teatro: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      musica: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      danca: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      artes: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    eventos: {
      diaCriancas: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      natalSolidario: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      formatura: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      festaJunina: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    voluntarios: {
      equipe1: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      voluntario1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      voluntario2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      acaoVoluntaria: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    parceiros: {
      logo1: 'https://via.placeholder.com/200x100/003D79/FFFFFF?text=Parceiro+1',
      logo2: 'https://via.placeholder.com/200x100/F26522/FFFFFF?text=Parceiro+2',
    }
  }

  return {
    images,
    fallbacks,
    // Funções específicas para facilitar o uso
    getLogo: (variant: keyof typeof fallbacks.logo = 'main') => fallbacks.logo[variant],
    getHeroImage: (key: keyof typeof fallbacks.hero) => fallbacks.hero[key],
    getAtividadeImage: (key: keyof typeof fallbacks.atividades) => fallbacks.atividades[key],
    getEventoImage: (key: keyof typeof fallbacks.eventos) => fallbacks.eventos[key],
    getVoluntarioImage: (key: keyof typeof fallbacks.voluntarios) => fallbacks.voluntarios[key],
    getParceiroImage: (key: keyof typeof fallbacks.parceiros) => fallbacks.parceiros[key],
  }
}
