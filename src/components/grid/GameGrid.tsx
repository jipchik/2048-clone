import { useState } from "react";
import GameRow from "./GameRow";
import "./GameGrid.css";
import GameTile from "../tile/GameTile";
import { useSelector } from "react-redux";
import { getGrid } from "../../redux/slices/gridSlice";

export default function GameGrid() {
	
	let grid = useSelector(getGrid);
	let flatGrid = grid.map((row: any[]) => row.join()).join().split(',');
	const [gameGrid, setGameGrid] = useState({
		flat: flatGrid,
		matrix: grid
	})

	console.log(grid)
	return (
		<div className="grid">
			{gameGrid.flat.map((cell: any, index: number) => (
				<GameTile currentTileValue={cell}/>
			))}
		</div>
	);
}
