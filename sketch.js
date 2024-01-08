const body = document.querySelector(".body");
const container = document.createElement("div");
container.classList.add("container");

let colorPicker = document.getElementById("colorPicker");
colorPicker.value = "#ff5050";
let selectedColor = "#ff5050";

let sqPerSide = prompt("Enter the squares per side");

colorPicker.addEventListener("input", (e) => {
  selectedColor = e.target.value;
});

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
      square.style.backgroundColor = selectedColor;
    }
  });
  container.appendChild(square);
}
container.style["border"] = "20px solid rgb(222, 80, 80)";
container.style["border-radius"] = "20px";
body.appendChild(container);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  lastColor = selectedColor;
  selectedColor = "white";
});

btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  selectedColor = lastColor;
});
