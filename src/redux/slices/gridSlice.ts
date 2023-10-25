import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import gridGenerator from "../../utils/gridGenerator";

interface GridState {
	grid: any;
	scale: number;
}

const initialState: GridState = {
	grid: gridGenerator(4),
	scale: 4
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
		}
	},
});

export const getGrid = (state: RootState) => state.grid.grid;
export const getScale = (state: RootState) => state.grid.scale;

// Action creators are generated for each case reducer function
export const { setGrid, setScale } = gridSlice.actions;

export default gridSlice.reducer;
