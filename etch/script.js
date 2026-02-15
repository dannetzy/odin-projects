const container = document.querySelector(".sketch-container");
const defaultSize = 16;
const defaultWidthPx = 50;

function makeGrid(size, width) {
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.textContent = (i * size) + j;
      row.style.height = `${width}px`;
      row.style.width = `${width}px`;
      column.append(row);
    }
    container.append(column);
  }
}

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("row")) {
    event.target.style.backgroundColor = "green";
  }
});

makeGrid(defaultSize, defaultWidthPx);

