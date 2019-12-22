function makeGrid () {
  const heightElement = document.getElementById('inputHeight');
  const widthElement = document.getElementById('inputWidth');
  const table = document.getElementById('pixelCanvas');

  // get number of rows and columns
  const height = Number(heightElement.value);
  const width = Number(widthElement.value);

  table.innerHTML = '';

  // build rows and columns cells
  for (let i = 0; i < height; i++) {
    const tableRow = table.insertRow();
    for (let j = 0; j < width; j++) {
      const tableCell = tableRow.insertCell();

      //changing cell color on click
      tableCell.addEventListener('click', function () {
        const col = document.getElementById('colorPicker').value;
        tableCell.style.backgroundColor = col;
      });
    }
  }
}

const form = document.getElementById('sizePicker');
form.addEventListener('submit', onSubmit);

function onSubmit (event) {
  makeGrid();
  event.preventDefault();
  return false;
}
