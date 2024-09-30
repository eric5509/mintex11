import { configureStore } from "@reduxjs/toolkit";
import { DarkmodeReducer } from "../reducers/darkmode";
import { SidebarSlice } from "../reducers/sidebar";



export const store = configureStore({
    reducer: {
        darkmode: DarkmodeReducer.reducer,
        sidebar: SidebarSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch