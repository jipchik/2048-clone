import { useState } from "react";
import "./GameTileMover.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";
import updateGrid from "../../utils/updateGrid";
import messages from '../../messages';
import YouLoseModal from "../game/YouLoseModal";
const gameTileMoverButtons: string[] = ["", "UP", "", "LEFT", "", "RIGHT", "", "DOWN", ""];
export default function GameTileMover() {
	const dispatch = useDispatch();
	let grid: any = useSelector(getGrid);
	const [loserAlert, setLoserAlert] = useState("");

	const handleButtonClick = (event: any, direction: string) => {
		let [isValid, newGrid] = updateGrid(direction, grid);
		console.log(newGrid);
		if (!isValid) {
			setLoserAlert(messages.YOU_LOSE);
			return;
		}
		dispatch(setGrid(newGrid));
	};
	return (
		<section>
			<div className="mover-grid">
				{gameTileMoverButtons.map((direction: string, i: number) => (
					<div key={`${i}`}>
						<button className={`mover ${direction === "" ? "non-mover" : ""}`} onClick={(e) => handleButtonClick(e, direction)}>
							{["LEFT", "RIGHT", "UP", "DOWN"].includes(direction)
								? direction
								: ""}
						</button>
					</div>
				))}
			</div>
			<div>
				<YouLoseModal message={loserAlert} reset={setLoserAlert}/>
			</div>
		</section>
	);
}
