import { createSlice } from "@reduxjs/toolkit";

const DisplaySlice = createSlice({
    name:'display',
    initialState: {
        active: 'algo',
        bg: '#7580F0'
    },
    reducers: {
        switchActive: (state, action) => {
            state.active = action.payload.active;
            state.bg = action.payload.bg;
        }
    }
});

export default DisplaySlice.reducer;

export const {switchActive} = DisplaySlice.actions;