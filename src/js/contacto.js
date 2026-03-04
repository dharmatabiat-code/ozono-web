// contacto.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const btn = document.getElementById("btn-contacto");
  const whatsappNumber = "51997307782";

  console.log("Script contacto.js cargado");
  console.log("Form:", form);
  console.log("Btn:", btn);

  if (!form || !btn) {
    console.error("No se encontró el formulario o el botón");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("input-nombre").value.trim();
    const telefono = document.getElementById("input-telefono").value.trim();
    const motivo = document.getElementById("input-motivo").value;

    // Validación de campos
    if (!nombre || !telefono || motivo === "¿Cuál es tu motivo de consulta?") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Mensaje para WhatsApp
    const mensaje = `*¡Hola! Me interesa conocer más sobre la Ozonoterapia.* 

    Nombre: ${nombre}
    Teléfono: ${telefono}
    Motivo de consulta: ${motivo}

    Quisiera más información sobre los tratamientos de ozonoterapia en Osono Clinic. ¿Podrían contactarme por favor?`;

    // Feedback al usuario
    btn.disabled = true;
    btn.innerHTML = "Abriendo WhatsApp...";

    // Abrimos WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );

    // Restaurar botón y limpiar formulario
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML =
        '<i class="fab fa-whatsapp"></i> Solicitar Información por WhatsApp';
      form.reset();
    }, 2000);
  });
});
