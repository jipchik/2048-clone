import { useState } from "react";
import "./GameTileMover.css";
import "../grid/GameGrid.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";
import updateGrid from "../../utils/updateGrid";
import messages from '../../messages';
import YouLoseModal from "../game/YouLoseModal";
const gameTileMoverButtons: any = [
	["", "LEFT", ""],
	["UP", "CENTER", "DOWN"],
	["", "RIGHT", ""],
];

export default function GameTileMover() {
	const dispatch = useDispatch();
	const grid: any = useSelector(getGrid);
	const [loserAlert, setLoserAlert] = useState("");

	const handleButtonClick = (event: any, direction: string) => {
		
		let [isValid, newGrid] = updateGrid(direction, grid);
		console.log(isValid, newGrid)
		if (!isValid) {
			setLoserAlert(messages.YOU_LOSE);
			return;
		}
		dispatch(setGrid(newGrid));
	};

	return (
		<div>
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
			<div>
				<YouLoseModal message={loserAlert} reset={setLoserAlert}/>
			</div>
		</div>
	);
}
