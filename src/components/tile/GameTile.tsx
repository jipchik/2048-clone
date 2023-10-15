import TileProps from "./TileInterface";
import "./GameTile.css";
export default function GameTile(props: TileProps) {
	return <div className="tile">{props.number}</div>;
}
