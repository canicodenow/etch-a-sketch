let container = document.querySelector(".container");

function createGrid(grid) {
    // loop - from 0 up to grid input (default 16)
    for (let row = 0; row < grid; row++) {
        // add constant to create a div to put the rows into
        const gridRow = document.createElement("div");
        // add a class for the row divs
        gridRow.classList.add("row");
        // make row fit into container by making it percentage of full height based on given grid input
        gridRow.style.height = (100 / grid) + "%";
        // loop - from 0 up to grid input (default 16)
        for (let column = 0; column < grid; column++) {
            // add const to create a div to put the columns into
            const gridColumns = document.createElement("div")
            // add a class for the column divs
            gridColumns.classList.add("column");
            // add a column div to each row div
            gridRow.appendChild(gridColumns);
        }
        // add a row div to the container on each iteration
        container.appendChild(gridRow);
    }
    highlightGrid();
}

function changeGrid() {
    // variable to access all children in the .row class
    let children = document.querySelectorAll(".row");
    // remove each child from the container element
    children.forEach(child => {
        container.removeChild(child);
    })
    // get a new grid size from the user
    let getGridSize = prompt("Choose number of rows for the grid", "16");
    // run createGrid function to vreate a newgrid using the input from user from getGridSize prompt
    createGrid(getGridSize);
}

function highlightGrid() {
    // variable to select all 'column' elements
    let boxChange = document.querySelectorAll(".column");
    // 
    boxChange.forEach(hover => {
        hover.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "#3c3c3c";
        }
        )
    }
    )
}

function randomColours() {
    let colourChange = document.querySelectorAll(".column");
    colourChange.forEach(hover => {
        hover.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = getRandomRgb();
        })
    })
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function resetGrid() {
    let children = document.querySelectorAll(".row");
    children.forEach(child => {
        container.removeChild(child);
    })
    createGrid(16);
}