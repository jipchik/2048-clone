import { useEffect } from 'react';
import GameTile from "../tile/GameTile";
import gridGenerator from "../../utils/gridGenerator";
import "./GameGrid.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";

export default function GameGrid() {

	let grid = useSelector(getGrid);
	
	return (
		<div className="grid">
			{grid.map((column: any) => (
				<div key={Math.random()}>
					{column.map((tileValue: number) => (
						<GameTile key={Math.random()} currentTileValue={tileValue} />
					))}
				</div>
			))}
		</div>
	);
}
