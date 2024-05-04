import { useEffect, useState } from "react";
import gridGenerator from "../../utils/gridGenerator";
import GameGrid from "../grid/GameGrid";
import GameTileMover from "../mover/GameTileMover";
import { useDispatch, useSelector } from "react-redux";
import './Game.css'
import YouLoseModal from "./YouLoseModal";
import { getScale, setGrid, getGrid } from "../../redux/slices/gridSlice";
import "./YouLoseModal.css"
export default function Game() {
	const scale = useSelector(getScale);
	const [loserMessage, setLoserMessage] = useState("");
	const dispatch = useDispatch();

	const handleResetGameClick = (event: any) => {
		dispatch(setGrid(gridGenerator(4, true)))
		setLoserMessage("");
	}

	return (
		<div className='game'>
			<div>
				{/* <h1>Current Game Grid Scale: {scale}</h1> */}
				<button style={{ width: "100px", backgroundColor: "blue", color: "yellow", marginLeft: "95px" }} onClick={handleResetGameClick}>RESET GAME</button>
				<GameGrid />
			</div>
			<GameTileMover setLoserMessage={setLoserMessage} />
			{
				loserMessage !== "" ?
				<YouLoseModal message={loserMessage} closeModal={handleResetGameClick}/>
				:
				null

			}
		</div>
	);
}
