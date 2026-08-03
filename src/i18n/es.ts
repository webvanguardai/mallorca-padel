import type { Translations } from "./en";

const es: Translations = {
  // Hero
  hero: {
    badge: "🏸 18–23 agosto 2026 · Mallorca",
    subtitle: "6 días de pádel, sol y Mediterráneo. Sesiones de coaching, boat trip al atardecer, Corcuera Cup y alojamiento en Tomir Portals Suites.",
    ctaRegister: "Inscripción",
    ctaDownload: "Descargar Breakdown",
    stats: [
      { number: "6", label: "Días", icon: "📅" },
      { number: "5", label: "Sesiones", icon: "🏸" },
      { number: "1", label: "Boat Trip", icon: "⛵" },
      { number: "4★", label: "Hotel", icon: "🏨" },
    ],
    scroll: "Scroll",
  },

  // Navbar
  nav: {
    links: [
      { label: "Torneo", href: "#about" },
      { label: "Jugadores", href: "#players" },
      { label: "Resultados", href: "#results" },
      { label: "Incluido", href: "#prizes" },
      { label: "Ubicación", href: "#location" },
      { label: "Descargar", href: "#download" },
    ],
    cta: "Inscribirse",
    ctaMobile: "Inscribirse Ahora",
  },

  // TournamentInfo
  tournament: {
    label: "El Torneo",
    title: "¿Qué es el",
    titleHighlight: "MPC?",
    description: "El Mallorca Padel Camp LTP Edition es una experiencia de 6 días que combina pádel de alto nivel, alojamiento en Tomir Portals Suites y lo mejor del Mediterráneo. 5 sesiones de coaching, torneo y boat trip incluidos.",
    categories: [
      {
        title: "Padel Coaching",
        icon: "🏸",
        teams: "5 Sesiones",
        format: "Mañana y Tarde",
        description: "Sesiones de coaching profesional en pista. Mejora tu técnica con entrenadores expertos en el mejor entorno del Mediterráneo.",
      },
      {
        title: "Corcuera Cup",
        icon: "🏆",
        teams: "Torneo incluido",
        format: "Vie 21 · 5pm–9pm",
        description: "Competición oficial Corcuera Cup con todos los participantes del camp. El momento más esperado de la semana.",
      },
      {
        title: "Boat Trip",
        icon: "⛵",
        teams: "Incluido",
        format: "Jue 20 · 7pm–10pm",
        description: "Sunset boat trip por las aguas cristalinas de Mallorca. Pádel, sol y Mediterráneo — la combinación perfecta.",
      },
    ],
    schedule: [
      { day: "Mar 18 Ago", event: "Llegada a Palma de Mallorca (PMI) · Transfer al hotel · Check-in en Tomir Portals Suites · Welcome pack", icon: "✈️" },
      { day: "Mié 19 Ago", event: "Desayuno · Sesión mañana 10am–12pm · Sesión tarde 4pm–6pm", icon: "🏸" },
      { day: "Jue 20 Ago", event: "Desayuno · Sesión mañana 10am–12pm · Sesión tarde 4pm–6pm · Boat trip sunset 7pm–10pm", icon: "⛵" },
      { day: "Vie 21 Ago", event: "Desayuno · Sesión final 11am–1pm · Corcuera Cup 5pm–9pm", icon: "🏆" },
      { day: "Sáb 22 Ago", event: "Desayuno · Excursión de grupo y día libre para descubrir lo mejor de Mallorca", icon: "🗺️" },
      { day: "Dom 23 Ago", event: "Desayuno · Check-out · Transfer al aeropuerto · Vuelo de vuelta", icon: "🛫" },
    ],
    scheduleTitle: "Programa del Camp",
    scheduleDisclaimer: "Los horarios pueden variar. La confirmación definitiva se enviará próxima a la fecha.",
  },

  // Location
  location: {
    label: "Ubicación",
    title: "Tomir",
    titleHighlight: "Portals Suites",
    description: 'Alojamiento incluido en <strong class="text-white">Tomir Portals Suites</strong>, uno de los hoteles más exclusivos de Mallorca. Portals Nous, a minutos del mar y con acceso directo a las mejores pistas de pádel de la isla.',
    info: [
      { icon: "🏨", label: "Hotel", value: "Tomir Portals Suites — Portals Nous, Mallorca" },
      { icon: "📅", label: "Fechas", value: "18–23 agosto 2026 (5 noches)" },
      { icon: "🌡️", label: "Tiempo", value: "Agosto en Mallorca · 28–32°C, sol garantizado" },
      { icon: "✈️", label: "Aeropuerto", value: "Palma de Mallorca (PMI) — transfer incluido" },
      { icon: "🏸", label: "Pistas", value: "Pistas profesionales de pádel · 5 sesiones + 1 torneo" },
    ],
    button: "Ver Hotel",
  },

  // Players
  players: {
    label: "Participantes",
    title: "Jugadores",
    titleHighlight: "Destacados",
    subtitle: "Los participantes se anunciarán a medida que se confirmen las inscripciones. ¡Asegura tu plaza ahora!",
    comingSoonTitle: "Participantes por confirmar",
    comingSoonText: "La lista de jugadores se revelará a medida que se confirmen las inscripciones. Sé de los primeros en unirte al Mallorca Padel Camp 2026 LTP Edition.",
    ctaText: "Inscríbete Ahora",
    bottomNote: "Plazas limitadas. Regístrate pronto para asegurar tu lugar en el MPC 2026.",
  },

  // Results
  results: {
    label: "Competición",
    title: "Partidos y",
    titleHighlight: "Resultados",
    subtitle: "Sigue el cuadro del torneo en directo. Resultados actualizados tras cada partido.",
    comingSoonTitle: "Resultados Próximamente",
    comingSoonText: "Los resultados del torneo se publicarán aquí tras la Corcuera Cup. ¡Mantente atento!",
    dateNote: "18–23 agosto 2026 · Tomir Portals Suites, Mallorca",
    ctaText: "Inscríbete para Competir",
  },

  // Prizes (now "What's Included")
  prizes: {
    label: "La Experiencia",
    title: "Qué",
    titleHighlight: "Incluye",
    items: [
      {
        icon: "🏸",
        title: "Coaching Profesional",
        description: "5 sesiones de coaching de pádel con entrenadores expertos. Sesiones de mañana y tarde para mejorar tu juego.",
      },
      {
        icon: "🏆",
        title: "Corcuera Cup",
        description: "Torneo oficial con todos los participantes del camp. Compite, diviértete y llévate el trofeo.",
      },
      {
        icon: "⛵",
        title: "Boat Trip al Atardecer",
        description: "Boat trip inolvidable por las aguas cristalinas de Mallorca. La forma perfecta de desconectar.",
      },
      {
        icon: "🏨",
        title: "Tomir Portals Suites",
        description: "5 noches en uno de los hoteles más exclusivos de Mallorca. Portals Nous, a minutos del mar.",
      },
      {
        icon: "✈️",
        title: "Transfers Aeropuerto",
        description: "Transfer ida y vuelta desde el aeropuerto de Palma de Mallorca (PMI) al hotel. Sin preocupaciones logísticas.",
      },
      {
        icon: "🎒",
        title: "Welcome Pack",
        description: "Pack de bienvenida oficial MPC con merchandising exclusivo y todo lo que necesitas para el camp.",
      },
    ],
    footerNote: "Todo incluido en un solo paquete. Plazas limitadas.",
    pricing: {
      title: "Precio",
      full: {
        label: "Plaza completa",
        price: "2.300",
        currency: "€",
        description: "Todo incluido · Alojamiento en Tomir Portals Suites",
      },
      perPerson: "por persona",
    },
  },

  // DownloadPDF
  download: {
    label: "Documento Oficial",
    title: "Camp",
    titleHighlight: "Breakdown",
    description: "Descarga el documento oficial con el itinerario completo, qué está incluido, info del hotel Tomir Portals Suites y todo lo que necesitas saber para el camp.",
    fileName: "Breakdown_MPC_2026.pdf",
    fileSubtitle: "Documento Oficial del Torneo",
    whatsInside: "Qué Contiene",
    contents: [
      "Itinerario completo día a día (18–23 agosto)",
      "Qué está incluido y qué no",
      "Info del hotel Tomir Portals Suites",
      "5 sesiones de pádel + programa del torneo",
      "Corcuera Cup — formato y reglas",
      "Boat trip sunset — detalles",
      "Transfers aeropuerto incluidos",
      "Guía de llegada a Mallorca (PMI)",
    ],
    downloadTitle: "Descarga Ahora",
    downloadSubtitle: "PDF gratis — Sin registro necesario",
    downloadButton: "Descargar PDF",
  },

  // Registration
  registration: {
    label: "Únete",
    title: "Apúntate al",
    titleHighlight: "MPC 2026",
    subtitle: "Asegura tu plaza en el Mallorca Padel Camp LTP Edition. 18–23 agosto 2026 · Tomir Portals Suites. Plazas limitadas.",
    form: {
      fullName: "Nombre Completo *",
      fullNamePlaceholder: "Tu nombre completo",
      email: "Email *",
      emailPlaceholder: "tu@email.com",
      partnerName: "Nombre del Compañero/a",
      partnerNamePlaceholder: "Nombre de tu pareja de juego",
      category: "Categoría *",
      categoryPlaceholder: "Selecciona categoría",
      categoryMens: "Dobles Masculino",
      categoryWomens: "Dobles Femenino",
      categoryMixed: "Dobles Mixto",
      country: "País",
      countryPlaceholder: "Tu país",
      phone: "Teléfono",
      phonePlaceholder: "+34 XXX XXX XXX",
      message: "Mensaje",
      messagePlaceholder: "¿Algo más que debamos saber?",
      submit: "Enviar Inscripción",
      legal: "Al registrarte, aceptas las normas y reglamento del torneo.",
    },
    success: {
      title: "¡Inscripción Recibida!",
      message: "¡Gracias! Nos pondremos en contacto contigo pronto con los detalles de confirmación.",
    },
  },

  // Sponsors
  sponsors: {
    label: "Colaboraciones",
    title: "Conviértete en",
    titleHighlight: "Partner",
    description: "¿Interesado en colaborar con el MPC 2026? Buscamos marcas que compartan nuestra pasión por el pádel y el estilo de vida mediterráneo.",
    ctaText: "Contáctanos",
  },

  // Footer
  footer: {
    description: "Pádel, sol y Mediterráneo. 6 días en Tomir Portals Suites, Mallorca. 18–23 agosto 2026.",
    tournamentTitle: "Torneo",
    tournamentLinks: ["Sobre", "Jugadores", "Resultados", "Incluido", "Programa"],
    resourcesTitle: "Recursos",
    resourcesDownload: "Descargar Breakdown PDF",
    resourcesRegister: "Inscribirse",
    resourcesVenue: "Ubicación y Viaje",
    contactTitle: "Contacto",
    copyright: "© 2026 Mallorca Padel Camp LTP Edition. Todos los derechos reservados.",
    builtBy: "Web por",
  },
};

export default es;
