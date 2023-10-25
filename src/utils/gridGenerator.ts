export default function gridGenerator(size: number) {
	let gameGrid: any = [];
	for (let i = 0; i < size; i++) {
		gameGrid.push(Array(size).fill(""));
	}
	const x0 = rn(1, 4);
	const y0 = rn(1, 4);
	console.log(x0, y0)
	gameGrid[x0][y0] = "2";

	const x1 = rn(1, 4);
	const y1 = rn(1, 4);
	//TODO:: fix collision problem here
	gameGrid[x1][y1] = gameGrid[x1][y1] === "2" ? gameGrid[rn(1, 4)][rn(1, 4)] : "";
	return gameGrid;
}

// Function to generate random number between the range, inclusively
function rn(min: number, max: number): string {
	return String(Math.floor(Math.random() * (max - min) + min));
}
