import "./GameTileMover.css";
import "../grid/GameGrid.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";
import updateGrid from "../../utils/updateGrid";
const gameTileMoverButtons: any = [
	["", "LEFT", ""],
	["UP", "", "DOWN"],
	["", "RIGHT", ""],
];

export default function GameTileMover() {
	const dispatch = useDispatch();
	const grid = useSelector(getGrid);

	const handleButtonClick = (event: any) => {
		let direction: string = event.currentTarget["data-buttonname"];
		let newGrid = updateGrid(direction, grid);
		dispatch(setGrid(newGrid));
	};
	return (
		<div className="grid">
			{gameTileMoverButtons.map((column: Array<string>, i: number) => (
				<div key={`${i}`} onClick={handleButtonClick}>
					{column.map((direction: string, j: number) => (
						<div key={`${i}_${j}`} className="mover" data-direction={direction}>
							{["LEFT", "RIGHT", "UP", "DOWN"].includes(direction)
								? direction
								: ""}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
