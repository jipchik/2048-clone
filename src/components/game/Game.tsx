import { useEffect, useState } from "react";
import gridGenerator from "../../utils/gridGenerator";
import GameGrid from "../grid/GameGrid";
import GameTileMover from "../mover/GameTileMover";
import { useDispatch, useSelector } from "react-redux";
import './Game.css'
import YouLoseModal from "./YouLoseModal";
import { getScale, setGrid, getGrid, getScore, setScore } from "../../redux/slices/gridSlice";
import "./YouLoseModal.css"
export default function Game() {
	const scale = useSelector(getScale);
	const score = useSelector(getScore);
	const [loserMessage, setLoserMessage] = useState("");
	const dispatch = useDispatch();

	const handleResetGameClick = (event: any) => {
		dispatch(setGrid(gridGenerator(4, true)))
		setLoserMessage("");
		dispatch(setScore(0));
	}

	return (
		<div>
			<div>{score}</div>
			<div className='game'>
				<button style={{ width: "100px", backgroundColor: "blue", color: "yellow", marginLeft: "95px", marginBottom: "2px", marginTop: "2px" }} onClick={handleResetGameClick}>RESET GAME</button>
				<GameGrid />
			</div>
			<div style={{width: "50%", marginLeft: "30px"}}>
				<GameTileMover setLoserMessage={setLoserMessage} />
			</div>
			{
				loserMessage !== "" ?
					null // <YouLoseModal message={loserMessage} closeModal={handleResetGameClick} />
					:
					null

			}
		</div>
	);
}
