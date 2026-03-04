// Animations on scroll
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// FAQ Accordion - Close other questions when one opens with smooth transition
function initFaqAccordion() {
  const faqDetails = document.querySelectorAll("#faq details");

  faqDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        // Close all other details
        faqDetails.forEach((otherDetail) => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
}

// Initialize all functions
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initFaqAccordion();
});

