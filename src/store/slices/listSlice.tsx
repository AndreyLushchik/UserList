import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface listState {
	list: [];
	isLoading: boolean;
	error: any;
}

const initialState: listState = {
	list: [],
	isLoading: false,
	error: null,
};

export const listSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getUsersListStart: (state) => {
			state.isLoading = true;
		},
		getUsersListFailure: (state, action) => {
			state.error = action.payload;
		},
		getUsersListSucces: (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
		},
	},
});

export const { getUsersListStart, getUsersListFailure, getUsersListSucces } =
	listSlice.actions;

//selectors

export const selectUsers = (state: RootState) => state.list.list;

export default listSlice.reducer;
