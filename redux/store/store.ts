import { configureStore } from "@reduxjs/toolkit";
import { DarkmodeReducer } from "../reducers/darkmode";
import { SidebarSlice } from "../reducers/sidebar";
import { sidebarActionsSlice } from "../reducers/sidebarActions";



export const store = configureStore({
    reducer: {
        darkmode: DarkmodeReducer.reducer,
        sidebar: SidebarSlice.reducer,
        sidebarActions: sidebarActionsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch