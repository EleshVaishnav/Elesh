const doodles = ["❤️","💖","💕","💘","💞","🌹"];
const btn = document.getElementById("doodleBtn");
const doodleBox = document.getElementById("doodles");

btn.onclick = () => {
  for (let i = 0; i < 8; i++) {
    const d = document.createElement("div");
    d.className = "doodle";
    d.innerText = doodles[Math.floor(Math.random()*doodles.length)];

    d.style.left = Math.random()*100 + "vw";
    d.style.top = Math.random()*100 + "vh";
    d.style.fontSize = (20 + Math.random()*30) + "px";

    doodleBox.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  }
};

/* scroll reveal */

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});

document.querySelectorAll(".hero, .final")
  .forEach(el => observer.observe(el));
