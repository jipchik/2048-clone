import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GridState {
	grid: Object;
}

const initialState: GridState = {
	grid: [
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
	],
};

export const gridSlice = createSlice({
	name: "gridReducer",
	initialState: initialState,
	reducers: {
		setGrid: (state, action: PayloadAction<any>) => {
			state.grid = action.payload;
		},
	},
});

export const getGrid = (state: RootState) => state.grid;

// Action creators are generated for each case reducer function
export const { setGrid } = gridSlice.actions;

export default gridSlice.reducer;
