import gridGenerator from "./gridGenerator";
//TODO:: figure this algorithm out for updating the grid based on its passed in state, should be fun
export default function updateGrid(
	direction: string,
	currentGrid: any
): any {
	let isValid: Boolean = false;
	let tempGrid: any = gridGenerator(4, false);
	let comparisonGrid: any = [];
	
	currentGrid = toMatrix(currentGrid, 4);

	switch (direction) {
		case "RIGHT":
			for (let i = 0; i < currentGrid.length; i++) {
				for (let j = 0; j < currentGrid.length; j++) {
					console.log(`value @ ${i}_${j}: ${currentGrid[i][j]}`)
					if (currentGrid[i][j + 1] === undefined || currentGrid[i][j] !== currentGrid[i][j + 1]) {
						tempGrid[i][j] = currentGrid[i][j];
						console.log('In the case of j + 1 is undefined or not equal to the currentGrid[i][j].')
					}
					if (currentGrid[i][j] === currentGrid[i][j + 1] && currentGrid[i][j + 1] !== "") {
						console.log('In the case that the next cell to the right contains the same value as the current iteration and is not an empty string, adding together.')
						let temp = parseInt(currentGrid[i][j]);
						currentGrid[i][j] = "";
						let newCellValue = temp + temp;

						let tempJ = j;
						while (currentGrid[i][tempJ + 1] !== undefined) {
							tempGrid[i][tempJ + 1] = String(newCellValue);
							tempJ++;
						}
						console.log(`new cell value: ${newCellValue}`)
					}
					let tempJ = j;
					while (currentGrid[i][tempJ + 1] !== undefined) {
						tempGrid[i][tempJ + 1] = currentGrid[i][j];
						tempJ++;
					}
					console.log('In the else case, next right cell must be an empty string so we just move the value over.')
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
	isValid = validateBoardIsStillPlayable(tempGrid);
	console.log('temp grid', tempGrid)
	tempGrid = tempGrid.map((row: any[]) => row.join()).join().split(',');
	return [isValid, tempGrid];
}

function cellUpdator(num: number): string {
	return String(num + num)
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
	return arr.reduce((rows: any, key: any, index: number) => (index % width == 0 ? rows.push([key]) 
	  : rows[rows.length-1].push(key)) && rows, []);
}