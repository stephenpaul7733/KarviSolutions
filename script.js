// ================= ACTIVE MENU HIGHLIGHT =================
const navLinks = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ================= HAMBURGER MENU TOGGLE =================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// ================= CONTACT FORM ALERT =================
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting KARVI SOLUTIONS. We will get back to you soon!");
  e.target.reset();
});




// ================= CLIENTS SLIDER =================
const track = document.getElementById("clientsTrack");
const cards = document.querySelectorAll(".client-card");
let index = 0;

function updateSlider() {
  if (!cards.length) return;

  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");

  const cardWidth = cards[0].offsetWidth + 30; // include gap
  const centerOffset = (track.parentElement.offsetWidth / 2) - (cards[0].offsetWidth / 2);

  track.style.transform = `translateX(${-index * cardWidth + centerOffset}px)`;
}

function moveSlide(step) {
  if (!cards.length) return;

  index = (index + step + cards.length) % cards.length; // circular
  updateSlider();
}

// Auto slide every 4 seconds
setInterval(() => moveSlide(1), 4000);
window.addEventListener("load", updateSlider);
window.addEventListener("resize", updateSlider);

// ================= LIGHTBOX =================
const lightbox = document.getElementById("clientLightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const caption = document.querySelector(".lightbox .caption");

cards.forEach(card => {
  card.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = card.querySelector("img").src;
    caption.textContent = card.querySelector("h4").textContent;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

// ================= SERVICE TABS =================
document.querySelectorAll('.service-tabs button').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.service-tabs button').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab)?.classList.add('active');
  });
});

// ================= WHATSAPP FORM =================
document.getElementById("whatsappForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all required fields");
    return;
  }

  const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
  window.open(`https://wa.me/919000675919?text=${text}`, "_blank");
});
// Show WhatsApp button after page load
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsapp-float");

  // delay (optional)
  setTimeout(() => {
    whatsappBtn.style.display = "block";
  }, 1000); // 1 second delay
});
