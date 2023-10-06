const container = document.querySelector('.container');
const flexGrid = document.querySelector('.flex-grid');
const gridSize = document.querySelector('.grid-size');

// Create a 16x16 grid
function makeGrid(rows, cols) {
    let cell = flexGrid.querySelectorAll('div');
    cell.forEach((div) => div.remove());
    for(i = 0; i < (rows * cols); i++) {
        cell = document.createElement('div');
        cell.innerText = (i + 1);
        flexGrid.appendChild(cell).className = "grid-item";
        // Paint cells on mouseover
        cell.addEventListener('mouseover', () => {
            cell.style.background = 'pink';
        })
    }
}

makeGrid(16, 16);

function changeCanvasSize(input) {
    let rows = input;
    let cols = input;
    makeGrid(rows, cols);
}

