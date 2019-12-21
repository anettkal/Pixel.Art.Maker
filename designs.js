// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
const heightElement = document.getElementById("inputHeight");
const widthElement = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");

const height = Number(heightElement.value);
const width = Number(widthElement.value);

document.querySelector("#pixelCanvas").innerHTML="";

for (let i = 0; i < height; i++){
    let tableRow = table.insertRow();
    for (let j = 0; j < width; j++ ) {
        let tableCell = tableRow.insertCell();
        tableCell.addEventListener('click', function() {
            var col = document.getElementById("colorPicker").value;
            tableCell.style.backgroundColor = col;
});
    }
        }
            }

const form = document.getElementById("sizePicker");
form.onsubmit = function(event) {
    makeGrid();
    event.preventDefault();
    return false;
}
