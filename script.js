// Mensaje de éxito (simulado)
const form = document.getElementById("contactForm");
const mensajeExito = document.getElementById("mensajeExito");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Aquí podrías integrar EmailJS o FormSubmit.
    mensajeExito.textContent =
      "Gracias por tu mensaje. Te contactaré en las próximas horas.";
    form.reset();

    // Opcional: desaparecer el mensaje luego de unos segundos
    setTimeout(() => {
      mensajeExito.textContent = "";
    }, 6000);
  });
}

// FAQ acordeón
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Animación de aparición al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));
