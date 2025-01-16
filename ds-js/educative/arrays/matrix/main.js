const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

const traverseMatrix = (matrix) => {
	let rows = matrix.length; // 3

	let cols = matrix[0].length; // 4

	let state = "up";

	let storageArray = [];

	let pr = rows - 1; // 2

	let pc = cols - 1; // 3

	for (let i = 0; i < rows * cols; i++) {
        storageArray[i] = matrix[pr][pc];

        if(state === "up"){

            if(pr - 1 < 0){
                state = "down"
                pc = pc - 1;
            } else {
                pr = pr - 1; // 0 
            }
           
        } else {

            if(pr === rows - 1){
                state = "up";
                pc = pc - 1;
            } else {
                pr = pr + 1;
            }
        
        }
    
      
	}

    return storageArray;
};

const traverseMatrixBasedOnEvenOdd = (matrix) => {
    let rowL = matrix.length;
    let colL = matrix[0].length;

    let storageArray = [];

    // If Col is Odd, Traverse from Bottom
    // If Col is Even, Traverse From Top 

    let index = 0;

    for(let col = colL - 1; col >= 0; col-- ){

        if(col % 2 === 0){
            for(let row = 0; row < rowL; row++){
                storageArray[index] = matrix[row][col];
                index = index + 1;
            }
        } else {
            for(let row = rowL - 1; row >= 0; row++){
                storageArray[index] = matrix[row][col];
                index = index + 1;
            }
        }

    }

    return storageArray;

}

// Example:

// Given the library array

const library = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [9, 11, 13, 15]
];

// The correct zigzag traversal should return:

// [9, 2, 1, 3, 4, 11, 13, 6, 5, 7, 8, 15]

function traverseLibrary(library) {
    let row = library.length - 1;
    let col = 0;
    let goingUp = true;
    const result = [];

    while (col < library[0].length) {
        result.push(library[row][col]);
        if (goingUp) {
            if (row == 0) {
                goingUp = false;
                col += 1;
            } else {
                row -= 1;
            }
        } else {
            if (row == library.length - 1) {
                goingUp = true;
                col += 1;
            } else {
                row += 1;
            }
        }
    }

    return result;
}