export default function gridGenerator(size: number) {
	let gameGrid: any = [];
	for (let i = 0; i < size; i++) {
		gameGrid.push(Array(size).fill(""));
	}
	const x0 = rn(0, 4);
	const y0 = rn(0, 4);
	gameGrid[x0][y0] = "2";

	const x1 = rn(0, 4);
	const y1 = rn(0, 4);
	gameGrid[x1][y1] = gameGrid[x1][y1] === "2" ? gameGrid[rn(1, 4)][rn(1, 4)] : "2"; //there is a collision problem here, fix it (was good enough ATT)
	return gameGrid;
}

// Function to generate random number between the range, inclusively
function rn(min: number, max: number): string {
	return String(Math.floor(Math.random() * (max - min) + min));
}
