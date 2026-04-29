export const seo = {
  site: {
    name: "Osono Clinic | Ozonoterapia by Dharma Tabiat",
    url: "https://osono.dharmatabiat.com/", // Updated to new domain
    locale: "es_PE",
    language: "es",
    languageAlternate: "en"
  },
  meta: {
    title: {
      default: "Osono Clinic - Dharma Tabiat | Ozonoterapia Médica Ayacucho",
      home: "Osono Clinic | Especialistas Ozonoterapia & Hernias Discales Ayacucho - Dharma Tabiat",
      services: "Tratamientos Ozono Médico | Dolor Crónico & Regeneración | Osono Dharma Ayacucho",
      contact: "Agenda Cita Ozonoterapia | Osono Clinic Dharma Tabiat Ayacucho"
    },
    description: {
      default: "Osono Clinic by Dharma Tabiat: Líderes en ozonoterapia médica Ayacucho. Tratamiento dolor, hernias discales, artrosis. San Juan Bautista, Huamanga.",
      home: "Osono Dharma Tabiat Ayacucho: Ozonoterapia para hernias discales, dolor crónico sin cirugía. Especialistas en regeneración celular. ¡Agenda ahora!",
      services: "Ozono medicinal en Osono Dharma: Dolor columna, pie diabético, sueroterapia, medicina estética Ayacucho Huamanga.",
      contact: "Agenda cita ozonoterapia Osono Clinic Dharma Tabiat. Especialistas Ayacucho, San Juan Bautista Huamanga. Recuperación personalizada."
    },
    keywords: [
      "ozonoterapia ayacucho",
      "osono dharmatabiat",
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
    author: "Osono Clinic - Especialistas en Ozono",
    publisher: "Osono Clinic",
    copyright: "© 2026 Osono Clinic. Todos los derechos reservados.",
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
    siteName: "Osono Clinic"
  },
  twitter: {
    card: "summary_large_image",
    site: "@osonodharma",
    creator: "@osonodharma"
  },
  schema: {
    organization: {
      name: "Osono Clinic by Dharma Tabiat",
      url: "https://osono.dharmatabiat.com/",
      logo: "https://osono.dharmatabiat.com/img/head/logo.png",
      description: "Osono Clinic desarrollada por Dharma Tabiat: Líderes en Ozonoterapia Médica y Bioregenerativa en Ayacucho y sur del Perú.",
      sameAs: [
        "https://facebook.com/osonodharma",
        "https://instagram.com/osonodharma",
        "https://tiktok.com/@osonodharma"
      ]
    },
    medicalClinic: {
      name: "Osono Clinic Dharma Tabiat - Ozonoterapia Ayacucho",
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