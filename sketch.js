const body = document.querySelector(".body");
const container = document.createElement("div");
container.classList.add("container");
let isClicking = false;

container.addEventListener("mousedown", () => {
  isClicking = true;
});

container.addEventListener("mouseup", () => {
  isClicking = false;
});
for (let i = 1; i <= 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    if (isClicking) {
      square.style.backgroundColor = "black";
    }
  });
  container.appendChild(square);
}
body.appendChild(container);
