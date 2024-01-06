import GameTile from "../tile/GameTile";
import "./GameRow.css";
export default function GameRow(props: any) {
    
    return (
        <div>
            {
                props.rowTiles.map((tileValue: string, index: number) => (
                    <GameTile key={index} currentTileValue={tileValue}/>
                ))
            }
        </div>
    )
}