// import { createSlice } from "@reduxjs/toolkit";


// const USERdata = createSlice({
//     name: "users",
//     initialState: 0,
//     reducers: {
//         addUser(state, action) {
//             return state + 1
//         },
//         removeUser(state, action) {
//             return state - 1
//         }
//     },
// })

// export const { addUser, removeUser } = USERdata.actions;

// export default USERdata.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const USERdata = createSlice({
    name: "user",
    initialState: 0,
    reducers: {
        Add: (state) => {
            return state + 1
        },
        Remove: (state) => {
            return state - 1
        },

        Clear: (state) => {
            return 0
        }
    }
})

export const { Add, Remove, Clear } = USERdata.actions

export default USERdata.reducer