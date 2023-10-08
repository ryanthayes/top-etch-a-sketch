// Global variables 
const BLACK = 'var(--clr-neutral-900)';
const GRAY = 'var(--clr-neutral-400)';

let color = BLACK;
let sizeOfGrid = 16;
let click = false;

const slider = document.getElementById('pixel-size-input');
const eraserButton = document.getElementById('btn-eraser');
const clearButton = document.getElementById('btn-clear');
const pixelSizeButton = document.getElementById('pixel-size-button');
const canvas = document.getElementById('canvas');

// Create a square grid
function createGrid(numOfGrids) {
    clear();
    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numOfGrids; j++) {
            const widthAndHeight = 500 / sizeOfGrid; // Divide size of canvas (set in CSS) by number of pixels in grid
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${widthAndHeight}px`;
            cell.style.height = `${widthAndHeight}px`;
            cell.style.backgroundColor = GRAY;
            row.appendChild(cell);

            // Change background color of cell when drawing
            cell.addEventListener('mouseenter', colorCell);
        }
        canvas.appendChild(row);
    }
}

// On Page Load - default size
createGrid(sizeOfGrid);

// UI controls

// Set pixel size for new canvas slider
let pixelSizeSlider = document.getElementById('pixel-size-slider');
pixelSizeSlider.value = 16;
let displayPixelSize = document.getElementById('pixel-size-label');
displayPixelSize.textContent = pixelSizeSlider.value;
pixelSizeSlider.oninput = function() {
    displayPixelSize.textContent = this.value;
}

// Button to capture slider value to create new grid
pixelSizeButton.addEventListener('click', function() {
sizeOfGrid = pixelSizeSlider.value;
createGrid(sizeOfGrid);
})

// Change color of paint
function colorCell() {
    if (click) {
        if((color === 'RANDOM')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(colorChoice) {
    color = colorChoice;
}

// Clear Grid
function clear() {
    let pixels = canvas.querySelectorAll('div');
    pixels.forEach((div) => div.remove());
}

// Reset grid
function reset() {
    let cells = canvas.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = GRAY);
}

// Event listeners
clearButton.addEventListener('click', reset);
document.querySelector("body").addEventListener('click', () => {
    click = !click;
})