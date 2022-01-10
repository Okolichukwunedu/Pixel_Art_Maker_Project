// Select color input
// Select size input
const mysizePicker = document.getElementById('sizePicker');
const mycolorPicker = document.getElementById('colorPicker');
const mypixelCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
mysizePicker.addEventListener ('submit', function (event) {
    mypixelCanvas.innerHTML = "";
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(width, height);
});

//To create the table from user's input
function makeGrid(width, height) {
      for (let i = 1; i <= height; i++) {
        let row = mypixelCanvas.insertRow();
        for (let j = 1; j <= width; j++) {
          let cell = row.insertCell();

          // adding color and removing it in the cell
          cell.addEventListener("click", function(event){
              cell.style.background = mycolorPicker.value;
          cell.addEventListener ("click", function(event){
              event.preventDefault();
              cell.style.backgroundColor = mycolorPicker.value;
            })
          })
        }
      }
};
