import "./GameTile.css";
export default function GameTile(props: any) {
	return <div className='tile'>{props.currentTileValue}</div>;
}
