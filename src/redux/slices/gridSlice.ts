import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import gridGenerator from "../../utils/gridGenerator";

interface GridState {
	grid: any;
	scale: number;
	winState: Boolean;
}

const initialState: GridState = {
	grid: gridGenerator(4),
	scale: 4,
	winState: true
};

export const gridSlice = createSlice({
	name: "gridReducer",
	initialState: initialState,
	reducers: {
		setGrid: (state, action: PayloadAction<any>) => {
			state.grid = action.payload;
		},
		setScale: (state, action: PayloadAction<any>) => {
			state.scale = action.payload;
		},
		setWinState: (state, action: PayloadAction<any>) => {
			state.winState = action.payload;
		}
	},
});

export const getGrid = (state: RootState) => state.grid.grid;
export const getScale = (state: RootState) => state.grid.scale;
export const getWinState = (state: RootState) => state.grid.winState;

// Action creators are generated for each case reducer function
export const { setGrid, setScale, setWinState } = gridSlice.actions;

export default gridSlice.reducer;
