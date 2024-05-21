import "./App.css";
import Game from "./components/game/Game";
export default function App() {
	return (
		<div className="App">
			<h1 style={{marginLeft: "55px"}}>2048 Clone</h1>
			<Game />
		</div>
	);
}
