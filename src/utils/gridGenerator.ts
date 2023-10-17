export default function gridGenerator(size: number) {
	let gameGrid: any = [];
	for (let i = 0; i < size; i++) {
		gameGrid.push(Array(size).fill(i));

		const fp = [rn(1, 4), rn];
		const sp = rn(1, 4);
	}
	return gameGrid;
}

// Function to generate random number
function rn(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}
