export default function updateGrid(
	direction: Object,
	currentGrid: Array<Array<string>>
): Object {
	switch(direction) {
		case "RIGHT":
			for (let row of currentGrid) {
				for (let cell of row) {
					let cellNum = parseInt(cell);
					cellNum = cellNum * cellNum;
					cell = String(cellNum);
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
	return currentGrid;
}
