import GameGrid from "../grid/GameGrid";
import GameTileMover from "../mover/GameTileMover";
export default function Game() {
	return (
		<div>
			<GameGrid />
			<GameTileMover />
		</div>
	);
}
