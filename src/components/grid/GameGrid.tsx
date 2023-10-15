import GameTile from "../tile/GameTile";
import gridGenerator from "../../utils/gridGenerator";
import "./GameGrid.css";
export default function GameGrid() {
	return (
		<div className="grid">
			{gridGenerator(4).map((row: any) => (
				<div>
					{row.map((tile: any) => (
						<GameTile key={Math.random()} number={tile.number} position={{}} />
					))}
				</div>
			))}
		</div>
	);
}
