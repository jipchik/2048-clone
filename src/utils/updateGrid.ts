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
			let i = 0;
			for (let row of currentGrid) {
				let j = 0;
				for (let cell of row) {
					if (cell !== "" && i !== 3) {
						if (currentGrid[i + 1][j] === ""){
							//just move
							if (currentGrid[i + 1][j] !== undefined) {
								tempGrid[i + 1][j] = cell;
								//tempGrid[i][j] = "";
								console.log('open space')
							} else {
								tempGrid[i + 1][j] = cell;
							}
						} else {
							//add em
							if (currentGrid[i + 1][j] !== undefined) {
								let cellNum = cellUpdator(parseInt(cell));
								tempGrid[i + 1][j] = cellNum;
								//tempGrid[i][j] = "";
								console.log('adding');
							} else {
								tempGrid[i][j] = cell;
							}
						}
					} else {
						tempGrid[i][j] = cell;
					}
					j++;
				}
				i++;
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
	console.log(tempGrid)
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