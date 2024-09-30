import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: true
}


export const DarkmodeReducer = createSlice({
    name: 'darkmode',
    initialState,
    reducers: ({
        toggleDarkmode: (state) => {
            state.value = !state.value
            return state
        }
    })
})

export const { toggleDarkmode } = DarkmodeReducer.actions