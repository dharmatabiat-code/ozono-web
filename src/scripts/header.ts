// scripts/header.ts
export function initHeader() {
  const header = document.getElementById('main-header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu'); // ID dentro de NavMobile

  if (!header) return;
  
  // Early return si elementos críticos faltan
  if (!menuBtn || !mobileMenu) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
      header.classList.remove('text-white');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('text-white');
    }
  };

  // Evento Scroll
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check inicial

  // Lógica de Menú Móvil COMPLETA (FIX)
  const mobileSidebar = document.getElementById('mobile-menu-sidebar');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  const toggleMobileMenu = () => {
    const isOpen = menuBtn!.getAttribute('aria-expanded') === 'true';
    
    // Toggle botón hamburguesa
    menuBtn!.setAttribute('aria-expanded', (!isOpen).toString());
    
    // Toggle overlay (opacidad + visibilidad)
    mobileMenu?.classList.toggle('opacity-100', !isOpen);
    mobileMenu?.classList.toggle('visible', !isOpen);
    mobileMenu?.classList.toggle('invisible', isOpen);
    
    // Toggle sidebar (translate)
    mobileSidebar?.classList.toggle('translate-x-0', !isOpen);
    mobileSidebar?.classList.toggle('translate-x-full', isOpen);
    
    // Body scroll lock
    document.body.classList.toggle('overflow-hidden', !isOpen);
    
    // Focus trap (accesibilidad)
    if (!isOpen) {
      closeBtn?.focus();
    }
  };
  
  menuBtn?.addEventListener('click', toggleMobileMenu);
  
  // Close button handler
  closeBtn?.addEventListener('click', toggleMobileMenu);
  
  // Backdrop click to close
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      toggleMobileMenu();
    }
  });
  
  // Close con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn!.getAttribute('aria-expanded') === 'true') {
      toggleMobileMenu();
    }
  });
}