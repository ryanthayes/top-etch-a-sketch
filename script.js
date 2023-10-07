// Global variables

const sizeOfGrid = 4;

const eraserButton = document.getElementById('btn.erase');
const resetButton = document.getElementById('btn.reset');

const canvas = document.getElementById('canvas');
const setCanvasSize = document.getElementById('set-canvas-size');

// Create a square grid
function createGrid(numOfGrids) {
    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numOfGrids; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = '100%';
            let height = 500 / parseInt(sizeOfGrid);
            cell.style.height = `${height}px`;
            cell.innerText = (j + 1);
            row.appendChild(cell);

            // Change background color of cell when drawing
            cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
            });
        }
        canvas.appendChild(row);
    }
}

createGrid(sizeOfGrid);
