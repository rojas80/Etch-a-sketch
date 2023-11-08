const DEFAULT_GRID_SIZE = 30;

const gridContainer  = document.getElementById("container-grid");

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const newGridButton = document.getElementById("new-grid");

const clearGridButton = document.getElementById("clear-grid");

let isMouseDown = true;



slider.addEventListener('input', function(){
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
});
newGridButton.addEventListener('click', function(){
    clearGrid();
    setupGrid(slider.value);
});
clearGridButton.addEventListener('click', function(){
    clearGrid();
    setupGrid(slider.value);
});

document.body.onmousedown =  () => (isMouseDown = true);
document.body.onmouseup = () =>  (isMouseDown = false);


gridContainer.addEventListener('mousemove', function(event){
    let elementMouseIsOver =  document.elementFromPoint(event.clientX, event.clientY);
    console.log(isMouseDown);
    if(isMouseDown){ 
        elementMouseIsOver.addEventListener('mousemove',function(event){
        elementMouseIsOver.style.backgroundColor = 'black';
        });
    }
   
});


function setupGrid(size){
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows =  `repeat(${size}, 1fr)`;

    for(let i = 0;  i < size * size; i++){
        const gridItem = document.createElement("div");
        gridItem.style.width = "calc(100%/ ${size})"
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}
function clearGrid(){
    gridContainer.innerHTML = '';
}


document.addEventListener("DOMContentLoaded", function(){
    setupGrid(DEFAULT_GRID_SIZE);
});

