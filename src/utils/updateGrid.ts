import gridGenerator from "./gridGenerator";
//TODO:: figure this algorithm out for updating the grid based on its passed in state, should be fun
export default function updateGrid(
	direction: string,
	currentGrid: any,
	score: number
): any {
	let isValid: Boolean = false;
	currentGrid = toMatrix(currentGrid, 4);

	let wasUpdated: Array<Number> = [];
	switch (direction) {
		case "RIGHT":
			wasUpdated = [];
			for (let i = 0; i < currentGrid.length; i++) {
				for (let j = 0; j < currentGrid.length; j++) {
					if (currentGrid[i][j + 1] === undefined) continue;

					if (currentGrid[i][j + 1] === "" && currentGrid[i][j] !== "" && currentGrid[i][j - 1] !== undefined) {
						currentGrid[i][j + 1] = currentGrid[i][j];
						currentGrid[i][j] = currentGrid[i][j - 1];
						continue;
					}
					if (currentGrid[i][j] === currentGrid[i][j + 1] && (currentGrid[i][j + 1] !== "" && currentGrid[i][j] !== "")) {
						if (wasUpdated[0] === i && wasUpdated[1] === j) continue;

						let temp = parseInt(currentGrid[i][j]);
						let newCellValue = String(temp + temp);
						score = score + parseInt(newCellValue);
						currentGrid[i][j + 1] = newCellValue;
						currentGrid[i][j] = "";
						wasUpdated = [i, j + 1]
						continue;
					}
				}
			}
			break;
		case "LEFT":
			wasUpdated = [];
			for (let i = 0; i < currentGrid.length; i++) {
				for (let j = 0; j < currentGrid.length; j++) {
					if (currentGrid[i][j - 1] === undefined) continue;

					if (currentGrid[i][j - 1] === "" && currentGrid[i][j] !== "") {
						currentGrid[i][j - 1] = currentGrid[i][j];
						currentGrid[i][j] = currentGrid[i][j + 1];
						continue;
					}
					if (currentGrid[i][j] === currentGrid[i][j - 1] && (currentGrid[i][j - 1] !== "" && currentGrid[i][j] !== "")) {
						if (wasUpdated[0] === i && wasUpdated[1] === j) continue;
						let temp = parseInt(currentGrid[i][j]);
						let newCellValue = String(temp + temp);
						currentGrid[i][j - 1] = newCellValue;
						currentGrid[i][j] = "";
						wasUpdated = [i, j - 1]
						continue;
					}
				}
			}
			break;
		case "UP":
			for (let i = 0; i < currentGrid.length; i++) {
				for (let j = 0; j < currentGrid.length; j++) {
					if (i === 0) continue;

					if (currentGrid[i - 1][j] === "" && currentGrid[i][j] !== "") {
						currentGrid[i - 1][j] = currentGrid[i][j];

						try {
							currentGrid[i][j] = currentGrid[i + 1][j];
						} catch (e) {
							currentGrid[i][j] = currentGrid[i][j]
							continue;
						}
						continue;
					}
					if (currentGrid[i][j] === currentGrid[i - 1][j] && (currentGrid[i - 1][j] !== "" && currentGrid[i][j] !== "")) {
						let temp = parseInt(currentGrid[i][j]);
						let newCellValue = String(temp + temp);
						currentGrid[i - 1][j] = newCellValue;
						currentGrid[i][j] = "";
						continue;
					}
				}
			}
			break;
		case "DOWN":
			for (let i = 0; i < currentGrid.length; i++) {
				for (let j = 0; j < currentGrid.length; j++) {
					if (i === 3) continue;
					if (currentGrid[i + 1][j] === "" && currentGrid[i][j] !== "") {
						currentGrid[i + 1][j] = currentGrid[i][j];
						currentGrid[i][j] = currentGrid[i + 1][j];
						continue;
					}
					if (currentGrid[i][j] === currentGrid[i + 1][j] && (currentGrid[i + 1][j] !== "" && currentGrid[i][j] !== "")) {
						let temp = parseInt(currentGrid[i][j]);
						let newCellValue = String(temp + temp);
						currentGrid[i + 1][j] = newCellValue;
						currentGrid[i][j] = "";
						continue;
					}
				}
			}
			break;
		default:
			console.log('Unexpected case encountered.');
			break;
	}
	currentGrid = insertNewValueIntoGrid(currentGrid);
	isValid = validateBoardIsStillPlayable(currentGrid);
	currentGrid = currentGrid.map((row: any[]) => row.join()).join().split(',');
	return [isValid, currentGrid, score];
}

function validateBoardIsStillPlayable(grid: any): Boolean {
	let isPlayable: Boolean = false;
	for (let row of grid) {
		for (let cell of row) {
			if (cell === "") {
				isPlayable = true;
			}
		}
	}
	console.log(grid, isPlayable)
	return isPlayable;
}

const toMatrix = (arr: string[], width: number) => {
	return arr.reduce((rows: any, key: any, index: number) => (index % width === 0 ? rows.push([key])
		: rows[rows.length - 1].push(key)) && rows, []);
}

const insertNewValueIntoGrid = (grid: any): any => {
	let hasBeenPlaced = false;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			if (grid[i][j] === "") {
				grid[i][j] = "2";
				hasBeenPlaced = true;
				break;
			}
		}
		if (hasBeenPlaced) break;
	}
	return grid;
}

// Function to generate random number between the range, inclusively
function rn(min: number, max: number): string {
	return String(Math.floor(Math.random() * (max - min) + min));
}