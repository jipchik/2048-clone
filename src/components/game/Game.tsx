import { useEffect, useState } from "react";
import gridGenerator from "../../utils/gridGenerator";
import GameGrid from "../grid/GameGrid";
import GameTileMover from "../mover/GameTileMover";
import { useSelector } from "react-redux";
import YouLoseModal from "./YouLoseModal";
import { getScale } from "../../redux/slices/gridSlice";
export default function Game() {
	const scale = useSelector(getScale);
	return (
		<div>
			<h1>Current Game Grid Scale: {scale}</h1>
			<GameGrid />
			<GameTileMover />
		</div>
	);
}
