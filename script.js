const container = document.querySelector('.container');
const flexGrid = document.querySelector('.flex-grid');

// Create a 16x16 grid
function makeGrid(rows, cols) {
    for(i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.innerText = (i + 1);
        flexGrid.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16, 16);