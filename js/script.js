// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Menú con fondo dinámico
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    nav.style.background = "#123B73";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
  } else {
    nav.style.background = "rgba(18,59,115,.92)";
    nav.style.boxShadow = "none";
  }

});

// Efecto hover en tarjetas
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });

});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", e => {

    e.preventDefault();

    const destino = document.querySelector(link.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});

// Fade inicial del hero
window.addEventListener("load", () => {

  document.querySelector(".overlay").animate([
    {
      opacity: 0,
      transform: "translateY(30px)"
    },
    {
      opacity: 1,
      transform: "translateY(0)"
    }
  ], {
    duration: 1000,
    easing: "ease-out"
  });

});

// Año automático
document.querySelector("footer p").textContent =
`© ${new Date().getFullYear()} Clases Lavoisier`;
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
