const container = document.querySelector('.container');

// Create a 16x16 grid of square divs
function makeGrid(rows, cols) {
    for(i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell);
    }
}

makeGrid(16, 16);