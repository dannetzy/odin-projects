const container = document.querySelector(".sketch-container");
const defaultSize = 16;
const defaultWidthPx = 50;
const defaultContainerWidthPx = defaultSize * defaultWidthPx;

function makeGrid(size, width) {
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < size; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.style.height = `${width}px`;
      row.style.width = `${width}px`;
      column.append(row);
    }
    container.append(column);
  }
}

function randomRGB() {
  return Math.floor(Math.random() * 255);
}

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("row")) {
    event.target.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  }
});

makeGrid(defaultSize, defaultWidthPx);

const sketchBtn = document.querySelector("#sketchBtn");

sketchBtn.addEventListener("click", () => {
  const askSize = Number(prompt("Sketch size", 16));

  if (isNaN(askSize)) {
    alert("Please type a number from 1-100.");
    return;
  }
  if (askSize > 100) {
    alert("The maximum size is 100.");
    return;
  }
  if (askSize < 1) {
    alert("The minimum size is 1.");
    return;
  }
  container.replaceChildren();
  makeGrid(askSize, defaultContainerWidthPx / askSize);
});