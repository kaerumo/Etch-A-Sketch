const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    let interactions = 0;

    square.addEventListener("mouseenter", () => {
      if (interactions === 0) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
      if (interactions < 10) {
        interactions++;
        square.style.opacity = interactions * 0.1;
      }
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  const input = prompt("Squares per side? (max 100)");
  const size = parseInt(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number from 1 to 100.");
    return;
  }
  createGrid(size);
});

createGrid(16);
