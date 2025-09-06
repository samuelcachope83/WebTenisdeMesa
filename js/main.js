
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 6px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }
});
