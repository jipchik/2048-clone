import gridGenerator from "./gridGenerator";
//TODO:: figure this algorithm out for updating the grid based on its passed in state, should be fun
export default function updateGrid(
	direction: string,
	currentGrid: any
): any {
	let isValid: Boolean = false;
	let tempGrid: any = gridGenerator(4, false);

	switch (direction) {
		case "RIGHT":
			for (let i = 0; i < currentGrid.length - 1; i++) {
				let j = 0;
				let hasNotMoved = true;
				while (j < 3 || hasNotMoved) {
					let currTileValue = currentGrid[i][j];
					console.log(`current value when i = ${i} and j = ${j} is: ${currTileValue}`)
					if (currentGrid[i + 1][j] === undefined) {
						tempGrid[i][j] = currTileValue;
						break;
					}
					if (currentGrid[i + 1][j] === currentGrid[i][j]) {
						let newTileValue = parseInt(currTileValue) + parseInt(currTileValue);
						tempGrid[i + 1][j] = String(newTileValue);
						tempGrid[i + 1][j] = "";
						hasNotMoved = false;
					} else {
						tempGrid[i + 1][j] = currTileValue;
					}
					j++;
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
	//console.log(tempGrid)
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