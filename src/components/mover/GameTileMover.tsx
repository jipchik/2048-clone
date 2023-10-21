import "./GameTileMover.css";
import "../grid/GameGrid.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";
import updateGrid from "../../utils/updateGrid";
const gameTileMoverButtons: any = [
	["", "LEFT", ""],
	["UP", "CENTER", "DOWN"],
	["", "RIGHT", ""],
];

export default function GameTileMover() {
	const dispatch = useDispatch();
	const grid: string[][] = useSelector(getGrid);

	const handleButtonClick = (event: any, direction: string) => {
		if (direction === "") return;
		
		let newGrid = updateGrid(direction, grid);
		dispatch(setGrid(newGrid));
	};
	return (
		<div className="grid">
			{gameTileMoverButtons.map((column: Array<string>, i: number) => (
				<div key={`${i}`}>
					{column.map((direction: string, j: number) => (
						<button key={`${i}_${j}`} className={`mover ${direction === "" ? "non-mover": ""}`} onClick={(e) => handleButtonClick(e, direction)}>
							{["LEFT", "RIGHT", "UP", "DOWN"].includes(direction)
								? direction
								: ""}
						</button>
					))}
				</div>
			))}
		</div>
	);
}
