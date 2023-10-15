export default function gridGenerator(size: number) {
	let gameGrid: any = [];
	for (let i = 0; i < size; i++) {
		gameGrid.push(Array(size).fill({ number: i, position: [i, i] }));
	}
	return gameGrid;
}
