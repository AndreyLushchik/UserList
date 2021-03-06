import { configureStore } from "@reduxjs/toolkit";

import listSlice from "./slices/listSlice";

export const store = configureStore({
	reducer: {
		list: listSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
