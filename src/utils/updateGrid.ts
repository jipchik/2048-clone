import gridGenerator from "./gridGenerator";
//TODO:: figure this algorithm out for updating the grid based on its passed in state, should be fun
export default function updateGrid(
	direction: string,
	currentGrid: any
): any {
	let isValid: Boolean = false;
	currentGrid = toMatrix(currentGrid, 4);

	switch (direction) {
		case "RIGHT":
			for (let i = 0; i < currentGrid.length; i++) {
				let mutex = false;
				for (let j = 0; j < currentGrid.length; j++) {
					if (currentGrid[i][j + 1] === "" && currentGrid[i][j] !== "") {
						currentGrid[i][j + 1] = currentGrid[i][j];
						currentGrid[i][j] = currentGrid[i][j - 1];
						continue;
					} 
					if (currentGrid[i][j] === currentGrid[i][j + 1] && (currentGrid[i][j + 1] !== "" && currentGrid[i][j] !== "")) {
						if(!mutex) {
							let temp = parseInt(currentGrid[i][j]);
							let newCellValue = String(temp + temp);
							currentGrid[i][j + 1] = newCellValue;
							mutex = true;
						}
						continue;
					} 
					if (currentGrid[i][j + 1] === undefined) {
						currentGrid[i][j] = currentGrid[i][j];
						continue;
					}
				}
			}
			break;
		case "LEFT":
			console.log(direction);
			break;
		case "UP":
			console.log(direction);
			break;
		case "DOWN":
			console.log(direction);
			break;
		default:
			console.log('Unexpected case encountered.');
			break;
	}
	currentGrid = insertNewValueIntoGrid(currentGrid);
	isValid = validateBoardIsStillPlayable(currentGrid);
	currentGrid = currentGrid.map((row: any[]) => row.join()).join().split(',');
	return [isValid, currentGrid];
}

function validateBoardIsStillPlayable(grid: any): Boolean {
	let isPlayable = false;
	for (let row of grid) {
		for (let cell of row) {
			if (cell === "") {
				isPlayable = true;
			}
		}
	}
	return isPlayable;
}

const toMatrix = (arr: string[], width: number) => {
	return arr.reduce((rows: any, key: any, index: number) => (index % width === 0 ? rows.push([key])
		: rows[rows.length - 1].push(key)) && rows, []);
}

const insertNewValueIntoGrid = (grid: any): any => {
	let hasBeenPlaced = false;
	do {
		let numOne = rn(0, 4);
		let numTwo = rn(0, 4);
		if (grid[numOne][numTwo] === "") {
			grid[numOne][numTwo] = "2";
			hasBeenPlaced = true;
		}

	} while (!hasBeenPlaced)
	return grid;
}

// Function to generate random number between the range, inclusively
function rn(min: number, max: number): string {
	return String(Math.floor(Math.random() * (max - min) + min));
}