import { useState } from "react";
import "./GameTileMover.css";
import { useSelector, useDispatch } from "react-redux";
import { getGrid, setGrid } from "../../redux/slices/gridSlice";
import updateGrid from "../../utils/updateGrid";
import messages from '../../messages';

const gameTileMoverButtons: string[] = ["", "UP", "", "LEFT", "", "RIGHT", "", "DOWN", ""];

interface GameTileMoverProps {
	setLoserMessage: Function
}

export default function GameTileMover(props: GameTileMoverProps) {
	const dispatch = useDispatch();
	let grid: any = useSelector(getGrid);

	const handleButtonClick = (event: any, direction: string) => {
		let [isValid, newGrid] = updateGrid(direction, grid);

		if (!isValid) {
			props.setLoserMessage(messages.YOU_LOSE)
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
		</section>
	);
}
