const container = document.querySelector('.container');
const flexGrid = document.querySelector('.flex-grid');
const gridItem = document.querySelector('.grid-item');

// Create a 16x16 grid
function makeGrid(rows, cols) {
    for(i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.innerText = (i + 1);
        flexGrid.appendChild(cell).className = "grid-item";
        // Paint cells on mouseover
        cell.addEventListener('mouseover', () => {
            cell.style.background = 'pink';
        })
    }
}

makeGrid(16, 16);

