export default function gridGenerator(size: number, insert: Boolean) {
	let gameGrid: any = [];
	for (let i = 0; i < size; i++) {
		gameGrid.push(Array(size).fill(""));
	}
	if (!insert) {
		return gameGrid;
	}
	const x0 = rn(0, 4);
	const y0 = rn(0, 4);
	gameGrid[x0][y0] = "2";

	const x1 = rn(0, 4);
	const y1 = rn(0, 4);
	// TODO:: there is a collision problem here, needs resolved
	gameGrid[x1][y1] = gameGrid[x1][y1] === "2" ? gameGrid[rn(1, 4)][rn(1, 4)] : "2";

	return gameGrid.map((row: any[]) => row.join()).join().split(',');;
}

// Function to generate random number between the range, inclusively
function rn(min: number, max: number): string {
	return String(Math.floor(Math.random() * (max - min) + min));
}
