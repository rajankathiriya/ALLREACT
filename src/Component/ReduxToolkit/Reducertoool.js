import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const Reducertoool = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },

        incrementanddecrement: (state, action) => {
            state.value += parseInt(action.payload)
        },

    },
});

export const { increment, decrement, incrementanddecrement } = Reducertoool.actions

export default Reducertoool.reducer
