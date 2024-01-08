const body = document.querySelector(".body");
const container = document.createElement("div");
container.classList.add("container");

let colorPicker = document.getElementById("colorPicker");
colorPicker.value = "#000";
let selectedColor = "#000";

const slider = document.querySelector("#range");

let sqPerSide = 33;
let squareWidth = 100 / sqPerSide + "%";

window.onload = () => {
  updateGrid(sqPerSide);
  container.style["border"] = "10px solid black";
  container.style["border-radius"] = "10px";
  body.appendChild(container);
};

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

sliderText = document.querySelector(".sliderText");
sliderText.innerHTML = sqPerSide + " X " + sqPerSide;

slider.oninput = function () {
  sqPerSide = slider.value;
  updateGrid(sqPerSide);
};
function updateGrid(sqPerSide) {
  container.innerHTML = "";
  squareWidth = 100 / sqPerSide + "%";
  sliderText.innerHTML = sqPerSide + " X " + sqPerSide;
  for (let i = 1; i <= sqPerSide * sqPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["width"] = squareWidth;
    square.style["height"] = squareWidth;
    square.addEventListener("mouseover", () => {
      if (isClicking) {
        square.style.backgroundColor = selectedColor;
      }
    });
    container.appendChild(square);
  }
}
container.style["border"] = "10px solid black";
container.style["border-radius"] = "10px";
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
