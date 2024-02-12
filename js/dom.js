// triangle area function
function calculateTriangle() {
  // get the value of base
  const baseInput = document.getElementById("triangle-base").value;
  const base = parseFloat(baseInput);

  // get the value of height
  const heightInput = document.getElementById("triangle-height").value;
  const height = parseFloat(heightInput);

  // calculate area
  let area = 0.5 * base * height;
  area = area.toFixed(3);

  // display area
  document.getElementById("triangle-area").innerText = area;
}

// rectangle area function
function calculateRectangle() {
  // get the value of base
  const widthInput = document.getElementById("rectangle-width").value;
  const width = parseFloat(widthInput);

  // get the value of height
  const lengthInput = document.getElementById("rectangle-length").value;
  const length = parseFloat(lengthInput);

  // calculate area
  let area = width * length;
  area = area.toFixed(3);
  // display area
  document.getElementById("rectangle-area").innerText = area;
}

// parallelogram are function
function calculateParallelogram() {
  // get the value of base
  const baseInput = document.getElementById("parallelogram-base").value;
  const base = parseFloat(baseInput);

  // get the value of height
  const heightInput = document.getElementById("parallelogram-height").value;
  const height = parseFloat(heightInput);

  // calculate area
  let area = base * height;
  area = area.toFixed(3);

  // display area
  document.getElementById("parallelogram-area").innerText = area;
}

// rhombus are function
function calculateRhombus() {
  // get the valu of diameter 1
  const d1Input = document.getElementById("rhombus-base").value;
  const d1 = parseFloat(d1Input);

  // get the value of diameter 2
  const d2Input = document.getElementById("rhombus-height").value;
  const d2 = parseFloat(d2Input);

  // calculate area
  let area = 0.5 * d1 * d2;
  area = area.toFixed(3);
  // display area
  document.getElementById("rhombus-area").innerText = area;
}
