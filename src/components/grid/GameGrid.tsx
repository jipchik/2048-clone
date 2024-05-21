import { useState } from "react";
import "./GameGrid.css";
import GameTile from "../tile/GameTile";
import { useSelector } from "react-redux";
import { getGrid } from "../../redux/slices/gridSlice";

export default function GameGrid() {
	
	let grid = useSelector(getGrid);

	return (
		<div className="game-grid">
			{grid.map((cell: any, index: number) => (
				<GameTile key={index} currentTileValue={cell}/>
			))}
		</div>
	);
}
