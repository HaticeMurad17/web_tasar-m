const cursorCar = document.getElementById("cursorCar");

let carX = window.innerWidth / 2;
let carY = window.innerHeight / 2;
let mouseX = carX;
let mouseY = carY;
const speed = 0.1; // 0.05 = çok yavaş, 0.2 = hızlı

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Arabanın konumunu yavaşça fareye yaklaştır
  carX += (mouseX - carX) * speed;
  carY += (mouseY - carY) * speed;

  // Arabanın yönünü hesapla
  const dx = mouseX - carX;
  const dy = mouseY - carY;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  cursorCar.style.left = `${carX}px`;
  cursorCar.style.top = `${carY}px`;
  cursorCar.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

animate();


