export const seo = {
  site: {
    name: "Osono Clinic | Ozonoterapia Médica en Ayacucho",
    url: "https://osonoclinic.pe", // Actualizado a .pe para SEO local en Perú
    locale: "es_PE",
    language: "es",
    languageAlternate: "en"
  },
  meta: {
    title: {
      default: "Osono Clinic | Ozonoterapia Médica y Tratamiento del Dolor en Ayacucho",
      home: "Osono Clinic | Especialistas en Ozonoterapia y Hernias Discales en Ayacucho",
      services: "Tratamientos Médicos con Ozono | Alivio del Dolor y Regeneración | Osono Clinic",
      contact: "Agenda tu Cita Médica | Osono Clinic Ayacucho"
    },
    description: {
      default: "Clínica líder en ozonoterapia médica en Ayacucho. Especialistas en tratamiento del dolor, hernias discales, artrosis y revitalización inmunológica. Medicina de vanguardia en San Juan Bautista.",
      home: "Recupera tu movilidad sin cirugía. En Osono Clinic Ayacucho somos expertos en ozonoterapia medicinal para hernias discales, dolor crónico y bienestar integral. ¡Agenda tu evaluación hoy!",
      services: "Descubre el poder del ozono medicinal: Tratamientos para el dolor de columna, pie diabético, medicina estética y sueroterapia en Ayacucho.",
      contact: "Consulta con nuestros especialistas en Ayacucho. Ubicados en San Juan Bautista, Huamanga. Atención personalizada para tu recuperación."
    },
    keywords: [
      "ozonoterapia en ayacucho",
      "tratamiento hernias discales ayacucho",
      "clinica del dolor huamanga",
      "ozono medicinal peru",
      "tratamiento artrosis ayacucho",
      "pie diabetico ayacucho",
      "medicina regenerativa huamanga",
      "sueroterapia ayacucho",
      "autohemoterapia ayacucho",
      "alivio dolor de espalda ayacucho",
      "san juan bautista huamanga salud",
      "especialistas en ozono peru"
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
    site: "@osonoclinic",
    creator: "@osonoclinic"
  },
  schema: {
    organization: {
      name: "Osono Clinic",
      url: "https://osonoclinic.pe",
      logo: "https://osonoclinic.pe/logos/logo-osono.png",
      description: "Líderes en Ozonoterapia Médica y Bioregenerativa en el sur del Perú.",
      sameAs: [
        "https://facebook.com/osonoclinic",
        "https://instagram.com/osonoclinic",
        "https://tiktok.com/@osonoclinic"
      ]
    },
    medicalClinic: {
      name: "Osono Clinic - Ozonoterapia Ayacucho",
      description: "Centro médico especializado en tratamientos con ozono para hernias discales y regeneración celular.",
      priceRange: "$$", // Cambiado a $$ para ser más accesible y competitivo
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