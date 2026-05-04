export const seo = {
  site: {
    name: "Ozono Clinic | Ozonoterapia by Dharma Tabiat",
    url: "https://ozono.dharmatabiat.com/", // Updated to new domain
    locale: "es_PE",
    language: "es",
    languageAlternate: "en"
  },
  meta: {
    title: {
      default: "Ozono Clinic - Dharma Tabiat | Ozonoterapia Médica Ayacucho",
      home: "Ozono Clinic | Especialistas Ozonoterapia & Hernias Discales Ayacucho - Dharma Tabiat",
      services: "Tratamientos Ozono Médico | Dolor Crónico & Regeneración | Ozono Dharma Ayacucho",
      contact: "Agenda Cita Ozonoterapia | Ozono Clinic Dharma Tabiat Ayacucho"
    },
    description: {
      default: "Ozono Clinic by Dharma Tabiat: Líderes en ozonoterapia médica Ayacucho. Tratamiento dolor, hernias discales, artrosis. San Juan Bautista, Huamanga.",
      home: "Ozono Dharma Tabiat Ayacucho: Ozonoterapia para hernias discales, dolor crónico sin cirugía. Especialistas en regeneración celular. ¡Agenda ahora!",
      services: "Ozono medicinal en Ozono Dharma: Dolor columna, pie diabético, sueroterapia, medicina estética Ayacucho Huamanga.",
      contact: "Agenda cita ozonoterapia Ozono Clinic Dharma Tabiat. Especialistas Ayacucho, San Juan Bautista Huamanga. Recuperación personalizada."
    },
    keywords: [
      "ozonoterapia ayacucho",
      "ozono dharmatabiat",
      "ozonoterapia dharmatabiat ayacucho",
      "tratamiento hernias discales ayacucho",
      "clinica ozonoterapia huamanga",
      "tratamiento dolor cronico ayacucho",
      "ozono medicinal san juan bautista",
      "medicina regenerativa ayacucho",
      "sueroterapia dharmatabiat",
      "pie diabetico ozonoterapia ayacucho",
      "artrosis tratamiento ozono huamanga",
      "alivio dolor espalda ayacucho",
      "hernias discales sin cirugia ayacucho",
      "especialistas ozono dharma tabiat",
      "clinica dolor huamanga",
      "ozonoterapia medica peru"
    ],
    author: "Ozono Clinic - Especialistas en Ozono",
    publisher: "Ozono Clinic",
    copyright: "© 2026 Ozono Clinic. Todos los derechos reservados.",
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false
    }
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Ozono Clinic"
  },
  twitter: {
    card: "summary_large_image",
    site: "@ozonodharma",
    creator: "@ozonodharma"
  },
  schema: {
    organization: {
      name: "Ozono Clinic by Dharma Tabiat",
      url: "https://ozono.dharmatabiat.com/",
      logo: "https://ozono.dharmatabiat.com/img/head/logo.png",
      description: "Ozono Clinic desarrollada por Dharma Tabiat: Líderes en Ozonoterapia Médica y Bioregenerativa en Ayacucho y sur del Perú.",
      sameAs: [
        "https://facebook.com/ozonodharma",
        "https://instagram.com/ozonodharma",
        "https://tiktok.com/@ozonodharma"
      ]
    },
    medicalClinic: {
      name: "Ozono Clinic Dharma Tabiat - Ozonoterapia Ayacucho",
      description: "Centro médico especializado en ozonoterapia para hernias discales, dolor crónico y regeneración celular en San Juan Bautista, Huamanga.",
      priceRange: "S/.",
      paymentAccepted: ["Efectivo", "Tarjeta de Crédito", "Transferencia", "Yape", "Plin"],
      currenciesAccepted: "PEN"
    }
  },
  sitemap: {
    priority: {
      home: "1.0",
      services: "0.9", // Subí la prioridad porque los servicios atraen tráfico específico
      contact: "0.7"
    },
    changefreq: {
      home: "weekly",
      services: "weekly",
      contact: "monthly"
    }
  }
};