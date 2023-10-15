import "./GameTileMover.css";
import "../grid/GameGrid.css";
const gameTileMover: any = [
	["", "UP", ""],
	["LEFT", "", "RIGHT"],
	["", "DOWN", ""],
];
export default function GameTileMover() {
	return (
		<div className="grid">
			{gameTileMover.map((row: Array<string>) => (
				<div>
					{row.map((cell: string) => (
						<div className="mover">{cell}</div>
					))}
				</div>
			))}
		</div>
	);
}
