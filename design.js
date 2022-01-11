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


/**
* @desc create a grid of squares
* @param int $width - number of squares representing the width of the
grid
* @param int $height - number of squares representing the height of the
grid
*/
function makeGrid(width, height) {
      for (let i = 1; i <= height; i++) {
        let row = mypixelCanvas.insertRow();
        for (let j = 1; j <= width; j++) {
          let cell = row.insertCell();
          cell.dataset.clicked = 'false';
        }
      }
};


// adding and removing color on the cell
mypixelCanvas.addEventListener ("click", function(event){
    let cell = null;
    if (event.target.tagName.toLowerCase() == "td"){
      cell = event.target;
    }
    if (cell){
      console.log(cell.dataset.clicked);
      if (cell.dataset.clicked == 'false'){
        cell.style.background = mycolorPicker.value;
        cell.dataset.clicked = true;
    } else{
      //Remove styling here
      cell.style.background = 'none';
      cell.dataset.clicked = 'false'
    }
  }

});
