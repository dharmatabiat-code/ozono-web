# Guía de Contribución para Osono Clinic

¡Gracias por tu interés en contribuir al proyecto!

## 🏗️ Arquitectura del Proyecto

### Flujo de Datos

```
src/pages/index.astro (Página principal)
    └── src/layouts/Layout.astro (Plantilla base)
            ├── src/components/Header.astro
            ├── src/components/Footer.astro
            ├── src/styles/global.css
            └── src/styles/index.css
```

### Componentes Principales

#### Header.astro
- Navegación fija con efecto scroll
- Menú responsive para móvil
- Transiciones suaves

#### Footer.astro
- Información de contacto
- Enlaces rápidos
- Redes sociales
- Horario de atención

#### Layout.astro
- Meta tags SEO
- Carga de fuentes
- Estilos globales
- Estructura HTML base

---

## 🎨 Guía de Estilos

### Colores

```css
/* Variables en global.css */
:root {
  --color-primary: #0f172a;      /* Slate 900 */
  --color-accent: #0ea5e9;       /* Sky 500 */
  --color-teal: #0d9488;         /* Teal 600 */
  --color-emerald: #10b981;      /* Emerald 500 */
}

/* Colores hardcoded en componentes */
--color-teal-primary: #338B85;    /* Teal principal */
--color-red-accent: #ef4444;     /* Rojo para acentos */
```

### Clases Utilitarias Comunes

```html
<!-- Espaciado -->
<p class="mt-8 mb-6">Margen superior e inferior</p>

<!-- Tipografía -->
<h2 class="text-4xl md:text-5xl font-extrabold">Título responsivo</h2>

<!-- Colores -->
<p class="text-slate-600 text-[#338B85]">Colores de texto</p>

<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">Flexbox</div>

<!-- Grid -->
<div class="grid md:grid-cols-3 gap-10">Grid responsivo</div>

<!-- Efectos -->
<div class="hover:shadow-xl transition-all duration-300">Hover effects</div>
```

---

## 🔧 Personalización de Secciones

### Agregar Nueva Sección

1. Crear el markup en `src/pages/index.astro`
2. Agregar estilos si es necesario en `src/styles/index.css`
3. Asegurar ID único para navegación: `<section id="nueva-seccion">`
4. Agregar enlace en Header si es necesario

### Modificar Servicios

Buscar en `index.astro`:
```astro
<!-- Servicio 1 -->
<div class="group relative p-10 rounded-[2.5rem]...">
  <!-- Contenido del servicio -->
</div>
```

### Actualizar FAQ

Buscar en `index.astro`:
```astro
<details class="group bg-white rounded-2xl...">
  <summary>Pregunta</summary>
  <div>Respuesta</div>
</details>
```

---

## 🐛 Debugging

### Problemas Visuales

1. **Imágenes no cargan**: Verificar ruta en `/public/`
2. **Estilos incorrectos**: Limpiar cache del navegador
3. **Tailwind no aplica**: Verificar `@import "tailwindcss"` en global.css

### Problemas de Build

```bash
# Ver errores detallados
npm run build -- --verbose

# Verificar configuración
npm run astro -- check
```

---

## 📝 Buenas Prácticas

1. **Semantic HTML**: Usar etiquetas semánticas (`<section>`, `<article>`, `<nav>`)
2. **Accesibilidad**: 
   - Siempre incluir `alt` en imágenes
   - Usar etiquetas `aria-` cuando sea necesario
   - Asegurar contraste de colores
3. **Responsive**: Diseñar mobile-first
4. **Rendimiento**: Optimizar imágenes antes de subir

---

## 🔄 Flujo de Trabajo

1. Fork del repositorio
2. Crear branch: `git checkout -b feature/nueva-funcionalidad`
3. Hacer cambios
4. Commit: `git commit -m 'Agrega nueva funcionalidad'`
5. Push: `git push origin feature/nueva-funcionalidad`
6. Crear Pull Request

---

*Última actualización: 2026*

