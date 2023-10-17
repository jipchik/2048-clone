import GameTile from "../tile/GameTile";
import gridGenerator from "../../utils/gridGenerator";
import "./GameGrid.css";
export default function GameGrid() {
	return (
		<div className="grid">
			{gridGenerator(4).map((column: any) => (
				<div key={Math.random()}>
					{column.map((tileValue: number) => (
						<GameTile key={Math.random()} currentTileValue={tileValue} />
					))}
				</div>
			))}
		</div>
	);
}
