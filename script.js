 document.addEventListener('DOMContentLoaded', () =>{   
    const grid = document.getElementById('grid');
    const colorPicker = document.getElementById('colorpicker');
    const clearButton = document.getElementById('clearbutton');

    const gridSize = 24;
    let currentColor = colorPicker;
    let isDrawing = false;

    // Create grid
    function createGrid() {
        for (let i = 0; i < gridSize * gridSize; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mousedown', () => {
                pixel.style.backgroundColor = currentColor;
                isDrawing = true;
            });
            pixel.addEventListener('mouseover', () => {
                if (isDrawing) {
                    pixel.style.backgroundColor = currentColor;
                }
            });
            pixel.addEventListener('mouseup', () => {
                isDrawing = false;
            });
            grid.appendChild(pixel);
        }
    }

    // Clear grid
    function clearGrid() {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
    }

    // Set up color picker
    colorPicker.addEventListener('input', (event) => {
        currentColor = event.target.value
    });

    // Clear button
    clearButton.addEventListener('click', clearGrid);

    // Detect mouse up event to stop drawing
    document.body.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    // Create grid on page load
    createGrid();
});