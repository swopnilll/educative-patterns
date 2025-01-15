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
