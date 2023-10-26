import gridGenerator from "./gridGenerator";
//TODO:: figure this algorithm out for updating the grid based on its passed in state, should be fun
export default function updateGrid(
	direction: string,
	currentGrid: any
): any {
	let isValid: Boolean = false;
	let newGrid = gridGenerator(4);
	switch(direction) {
		case "RIGHT":
			let i = 0;
			for (let row of currentGrid) {
				let j = 0;
				for (let cell of row) {
					console.log(cell)
					let cellNum = cellUpdator(parseInt(cell));
					newGrid[i][j] = cellNum
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

	return [isValid, newGrid];
}

function cellUpdator(num: number){
    return String(num * num)
}

function validateBoardIsStillPlayable(grid: any){

}