// Shared function fro get input by id
function getInputById(inputFeildId) {
  const stringValue = document.getElementById(inputFeildId).value;
  const intValue = parseFloat(stringValue);
  return intValue;
}
// Shared function for display by id
function displayById(textFieldId, area) {
  document.getElementById(textFieldId).innerText = area;
}
// triangle area function
function calculateTriangle() {
  // get the value of base
  const base = getInputById("triangle-base");

  // get the value of height

  const height = getInputById("triangle-height");

  // calculate area
  let area = 0.5 * base * height;
  area = area.toFixed(3);

  // display area
  displayById("triangle-area", area);
}

// rectangle area function
function calculateRectangle() {
  // get the value of base
  const width = getInputById("rectangle-width");

  // get the value of height
  const length = getInputById("rectangle-length");

  // calculate area
  let area = width * length;
  area = area.toFixed(3);
  // display area
  displayById("rectangle-area", area);
}

// parallelogram are function
function calculateParallelogram() {
  // get the value of base
  const base = getInputById("parallelogram-base");

  // get the value of height
  const height = getInputById("parallelogram-height");

  // calculate area
  let area = base * height;
  area = area.toFixed(3);

  // display area
  displayById("parallelogram-area", area);
}

// rhombus are function
function calculateRhombus() {
  // get the value of diameter 1
  const d1 = getInputById("rhombus-d1");

  // get the value of diameter 2
  const d2 = getInputById("rhombus-d2");

  // calculate area
  let area = 0.5 * d1 * d2;
  area = area.toFixed(3);
  // display area
  displayById("rhombus-area", area);
}

// Pentagon are function
function calculatePentagon() {
  // get the value of perimeter
  const perimeter = getInputById("pentagon-perimeter");

  // get the value of apothem
  const apothem = getInputById("pentagon-apothem");

  // calculate area
  let area = 0.5 * perimeter * apothem;
  area = area.toFixed(3);
  // display area
  displayById("pentagon-area", area);
}

// Ellipse are function
function calculateEllipse() {
  // get the value of perimeter
  const a = getInputById("ellipse-a");

  // get the value of apothem
  const b = getInputById("ellipse-b");

  // calculate area
  let area = 3.14159 * a * b;
  area = area.toFixed(3);
  // display area
  displayById("ellipse-area", area);
}
